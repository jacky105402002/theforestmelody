/*
 * Copyright 2016 Google Inc. All rights reserved.
 * ... (保留原本版權宣告) ...
 */
"use strict";

// 1. 強制等待 HTML 全部讀取完畢才執行 (解決 null 錯誤的關鍵)
document.addEventListener("DOMContentLoaded", function () {
  (function () {
    var Marzipano = window.Marzipano;
    var bowser = window.bowser;
    var screenfull = window.screenfull;
    var data = window.APP_DATA;

    // 除錯檢查：確認核心套件是否載入
    if (!Marzipano || !bowser || !data) {
      console.error(
        "❌ 核心錯誤：Marzipano, Bowser 或 Data 未載入，請檢查 static 路徑！"
      );
      return;
    }

    // ===== 取得 DOM 元素 (加入防呆檢查) =====
    var panoElement = document.querySelector("#pano");
    var startBtn = document.getElementById("startBtn");
    var introScreen = document.getElementById("introScreen");
    var sceneListElement = document.querySelector("#sceneList");
    var sceneListToggleElement = document.querySelector("#sceneListToggle");
    var autorotateToggleElement = document.querySelector("#autorotateToggle");
    var fullscreenToggleElement = document.querySelector("#fullscreenToggle");
    var sceneNameElement = document.querySelector("#titleBar .sceneName");

    // 檢查關鍵元素是否存在，不存在就報錯但"不崩潰"
    if (!panoElement) console.error("❌ 找不到 #pano 元素");
    if (!sceneListElement)
      console.error("❌ 找不到 #sceneList 元素 (可能是 HTML ID 寫錯或被刪除)");
    if (!sceneListToggleElement) console.warn("⚠️ 找不到 #sceneListToggle");
    if (!fullscreenToggleElement) console.warn("⚠️ 找不到 #fullscreenToggle");

    // ===== 開始按鈕邏輯 =====
    if (startBtn && introScreen) {
      startBtn.addEventListener("click", function () {
        introScreen.classList.add("hidden");
      });
    }

    // ===== 圖片 Modal DOM =====
    var imgModal = document.getElementById("imgModal");
    var imgModalImg = document.getElementById("imgModalImg");
    var imgModalClose = document.getElementById("imgModalClose");

    function openImageModalFromHotspotText(htmlText) {
      if (!imgModal || !imgModalImg) return; // 防呆
      var imgSrc = "";
      if (htmlText.includes("<img")) {
        var match = htmlText.match(/src=['"]([^'"]+)['"]/);
        imgSrc = match && match[1] ? match[1] : "";
      } else {
        imgSrc = htmlText.trim();
      }

      if (imgSrc && imgSrc !== "") {
        imgModalImg.src = imgSrc;
        imgModal.classList.add("visible");
      }
    }

    function closeImageModal() {
      if (!imgModal) return;
      imgModal.classList.remove("visible");
      imgModal.setAttribute("aria-hidden", "true");
      if (imgModalImg) {
        imgModalImg.src = "";
        imgModalImg.alt = "";
      }
    }

    if (imgModalClose) {
      imgModalClose.addEventListener("click", function () {
        closeImageModal();
      });
    }

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeImageModal();
    });

    // ===== 裝置偵測 =====
    if (window.matchMedia) {
      var setMode = function () {
        if (mql.matches) {
          document.body.classList.remove("desktop");
          document.body.classList.add("mobile");
        } else {
          document.body.classList.remove("mobile");
          document.body.classList.add("desktop");
        }
      };
      var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
      setMode();
      mql.addListener(setMode);
    } else {
      document.body.classList.add("desktop");
    }

    document.body.classList.add("no-touch");
    window.addEventListener("touchstart", function () {
      document.body.classList.remove("no-touch");
      document.body.classList.add("touch");
    });

    if (bowser.msie && parseFloat(bowser.version) < 11) {
      document.body.classList.add("tooltip-fallback");
    }

    // ===== Viewer 初始化 =====
    var viewerOpts = {
      controls: { mouseViewMode: data.settings.mouseViewMode },
    };

    // 如果找不到 pano 元素，就不初始化 viewer，避免崩潰
    var viewer;
    if (panoElement) {
      viewer = new Marzipano.Viewer(panoElement, viewerOpts);
    } else {
      return; // 停止執行
    }

    var scenes = data.scenes.map(function (data) {
      var urlPrefix = "tiles";
      var source = Marzipano.ImageUrlSource.fromString(
        urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
        { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" }
      );
      var geometry = new Marzipano.CubeGeometry(data.levels);
      var limiter = Marzipano.RectilinearView.limit.traditional(
        data.faceSize,
        (100 * Math.PI) / 180,
        (120 * Math.PI) / 180
      );
      var view = new Marzipano.RectilinearView(
        data.initialViewParameters,
        limiter
      );

      var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true,
      });

      data.linkHotspots.forEach(function (hotspot) {
        var element = createLinkHotspotElement(hotspot);
        scene
          .hotspotContainer()
          .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      data.infoHotspots.forEach(function (hotspot) {
        var element = createInfoHotspotElement(hotspot);
        scene
          .hotspotContainer()
          .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      return { data: data, scene: scene, view: view };
    });

    // ===== 自動旋轉 =====
    var autorotate = Marzipano.autorotate({
      yawSpeed: 0.03,
      targetPitch: 0,
      targetFov: Math.PI / 2,
    });
    if (data.settings.autorotateEnabled && autorotateToggleElement) {
      autorotateToggleElement.classList.add("enabled");
    }

    // 這裡加了檢查，如果按鈕不存在就不綁定事件
    if (autorotateToggleElement) {
      autorotateToggleElement.addEventListener("click", toggleAutorotate);
    }

    // ===== 全螢幕設定 =====
    if (screenfull.enabled && data.settings.fullscreenButton) {
      document.body.classList.add("fullscreen-enabled");

      if (fullscreenToggleElement) {
        fullscreenToggleElement.addEventListener("click", function () {
          screenfull.toggle();
        });

        screenfull.on("change", function () {
          if (screenfull.isFullscreen) {
            fullscreenToggleElement.classList.add("enabled");
          } else {
            fullscreenToggleElement.classList.remove("enabled");
          }
        });
      }
    } else {
      document.body.classList.add("fullscreen-disabled");
    }

    // ===== 場景列表控制 =====
    if (sceneListToggleElement) {
      sceneListToggleElement.addEventListener("click", toggleSceneList);
    }

    // 這裡就是原本報錯的地方，現在加了檢查
    if (!document.body.classList.contains("mobile")) {
      showSceneList();
    }

    // ===== 切換場景事件綁定 =====
    scenes.forEach(function (scene) {
      // 這裡非常重要！如果找不到對應的列表項目，就不綁定
      var el = document.querySelector(
        '#sceneList .scene[data-id="' + scene.data.id + '"]'
      );
      if (el) {
        el.addEventListener("click", function () {
          switchScene(scene);
          if (document.body.classList.contains("mobile")) {
            hideSceneList();
          }
        });
      } else {
        console.warn(
          "⚠️ 警告：找不到場景 ID 為 " + scene.data.id + " 的列表項目"
        );
      }
    });

    // ===== 視角控制按鈕 (略過詳細綁定，概念同上) =====
    var viewUpElement = document.querySelector("#viewUp");
    var viewDownElement = document.querySelector("#viewDown");
    var viewLeftElement = document.querySelector("#viewLeft");
    var viewRightElement = document.querySelector("#viewRight");
    var viewInElement = document.querySelector("#viewIn");
    var viewOutElement = document.querySelector("#viewOut");

    var velocity = 0.7;
    var friction = 3;
    var controls = viewer.controls();

    // 使用 Optional check 防止報錯
    if (viewUpElement)
      controls.registerMethod(
        "upElement",
        new Marzipano.ElementPressControlMethod(
          viewUpElement,
          "y",
          -velocity,
          friction
        ),
        true
      );
    if (viewDownElement)
      controls.registerMethod(
        "downElement",
        new Marzipano.ElementPressControlMethod(
          viewDownElement,
          "y",
          velocity,
          friction
        ),
        true
      );
    if (viewLeftElement)
      controls.registerMethod(
        "leftElement",
        new Marzipano.ElementPressControlMethod(
          viewLeftElement,
          "x",
          -velocity,
          friction
        ),
        true
      );
    if (viewRightElement)
      controls.registerMethod(
        "rightElement",
        new Marzipano.ElementPressControlMethod(
          viewRightElement,
          "x",
          velocity,
          friction
        ),
        true
      );
    if (viewInElement)
      controls.registerMethod(
        "inElement",
        new Marzipano.ElementPressControlMethod(
          viewInElement,
          "zoom",
          -velocity,
          friction
        ),
        true
      );
    if (viewOutElement)
      controls.registerMethod(
        "outElement",
        new Marzipano.ElementPressControlMethod(
          viewOutElement,
          "zoom",
          velocity,
          friction
        ),
        true
      );

    function sanitize(s) {
      return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
    }

    function switchScene(scene) {
      stopAutorotate();
      scene.view.setParameters(scene.data.initialViewParameters);
      scene.scene.switchTo();
      startAutorotate();
      updateSceneName(scene);
      updateSceneList(scene);
    }

    function updateSceneName(scene) {
      if (sceneNameElement)
        sceneNameElement.innerHTML = sanitize(scene.data.name);
    }

    function updateSceneList(scene) {
      // 這裡使用 sceneList 變數，如果沒抓到就跳過
      var sceneElements = document.querySelectorAll("#sceneList .scene");
      for (var i = 0; i < sceneElements.length; i++) {
        var el = sceneElements[i];
        if (el.getAttribute("data-id") === scene.data.id) {
          el.classList.add("current");
        } else {
          el.classList.remove("current");
        }
      }
    }

    function showSceneList() {
      // 關鍵修復點：檢查 sceneListElement 是否存在
      if (sceneListElement) sceneListElement.classList.add("enabled");
      if (sceneListToggleElement)
        sceneListToggleElement.classList.add("enabled");
    }

    function hideSceneList() {
      if (sceneListElement) sceneListElement.classList.remove("enabled");
      if (sceneListToggleElement)
        sceneListToggleElement.classList.remove("enabled");
    }

    function toggleSceneList() {
      if (sceneListElement) sceneListElement.classList.toggle("enabled");
      if (sceneListToggleElement)
        sceneListToggleElement.classList.toggle("enabled");
    }

    function startAutorotate() {
      if (
        autorotateToggleElement &&
        !autorotateToggleElement.classList.contains("enabled")
      ) {
        return;
      }
      viewer.startMovement(autorotate);
      viewer.setIdleMovement(3000, autorotate);
    }

    function stopAutorotate() {
      viewer.stopMovement();
      viewer.setIdleMovement(Infinity);
    }

    function toggleAutorotate() {
      if (!autorotateToggleElement) return;
      if (autorotateToggleElement.classList.contains("enabled")) {
        autorotateToggleElement.classList.remove("enabled");
        stopAutorotate();
      } else {
        autorotateToggleElement.classList.add("enabled");
        startAutorotate();
      }
    }

    function createLinkHotspotElement(hotspot) {
      var wrapper = document.createElement("div");
      wrapper.classList.add("hotspot");
      wrapper.classList.add("link-hotspot");
      var icon = document.createElement("img");
      icon.src = "img/link.png";
      icon.classList.add("link-hotspot-icon");
      var transformProperties = [
        "-ms-transform",
        "-webkit-transform",
        "transform",
      ];
      for (var i = 0; i < transformProperties.length; i++) {
        var property = transformProperties[i];
        icon.style[property] = "rotate(" + hotspot.rotation + "rad)";
      }
      wrapper.addEventListener("click", function () {
        switchScene(findSceneById(hotspot.target));
      });
      stopTouchAndScrollEventPropagation(wrapper);
      var tooltip = document.createElement("div");
      tooltip.classList.add("hotspot-tooltip");
      tooltip.classList.add("link-hotspot-tooltip");
      tooltip.innerHTML = findSceneDataById(hotspot.target).name;
      wrapper.appendChild(icon);
      wrapper.appendChild(tooltip);
      return wrapper;
    }

    function createInfoHotspotElement(hotspot) {
      var wrapper = document.createElement("div");
      wrapper.classList.add("hotspot");
      wrapper.classList.add("info-hotspot");
      var header = document.createElement("div");
      header.classList.add("info-hotspot-header");
      var iconWrapper = document.createElement("div");
      iconWrapper.classList.add("info-hotspot-icon-wrapper");
      var icon = document.createElement("img");
      icon.src = "img/info.png";
      icon.classList.add("info-hotspot-icon");
      iconWrapper.appendChild(icon);
      var titleWrapper = document.createElement("div");
      titleWrapper.classList.add("info-hotspot-title-wrapper");
      var title = document.createElement("div");
      title.classList.add("info-hotspot-title");
      title.innerHTML = hotspot.title;
      titleWrapper.appendChild(title);
      var closeWrapper = document.createElement("div");
      closeWrapper.classList.add("info-hotspot-close-wrapper");
      var closeIcon = document.createElement("img");
      closeIcon.src = "img/close.png";
      closeIcon.classList.add("info-hotspot-close-icon");
      closeWrapper.appendChild(closeIcon);
      header.appendChild(iconWrapper);
      header.appendChild(titleWrapper);
      header.appendChild(closeWrapper);
      var text = document.createElement("div");
      text.classList.add("info-hotspot-text");
      text.innerHTML = hotspot.text;
      wrapper.appendChild(header);
      wrapper.appendChild(text);
      var modal = document.createElement("div");
      modal.innerHTML = wrapper.innerHTML;
      modal.classList.add("info-hotspot-modal");
      document.body.appendChild(modal);
      var toggle = function () {
        if (
          !imgModal.classList.contains("visible") &&
          hotspot.text &&
          hotspot.text.includes("img/")
        ) {
          openImageModalFromHotspotText(hotspot.text);
        } else {
          wrapper.classList.toggle("visible");
          modal.classList.toggle("visible");
        }
      };
      wrapper
        .querySelector(".info-hotspot-header")
        .addEventListener("click", toggle);
      modal
        .querySelector(".info-hotspot-close-wrapper")
        .addEventListener("click", toggle);
      modal
        .querySelector(".info-hotspot-close-wrapper")
        .addEventListener("click", toggle);
      stopTouchAndScrollEventPropagation(wrapper);
      return wrapper;
    }

    function stopTouchAndScrollEventPropagation(element, eventList) {
      var eventList = [
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "wheel",
        "mousewheel",
      ];
      for (var i = 0; i < eventList.length; i++) {
        element.addEventListener(eventList[i], function (event) {
          event.stopPropagation();
        });
      }
    }

    function findSceneById(id) {
      for (var i = 0; i < scenes.length; i++) {
        if (scenes[i].data.id === id) {
          return scenes[i];
        }
      }
      return null;
    }

    function findSceneDataById(id) {
      for (var i = 0; i < data.scenes.length; i++) {
        if (data.scenes[i].id === id) {
          return data.scenes[i];
        }
      }
      return null;
    }

    switchScene(scenes[0]);
  })();
});
