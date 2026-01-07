var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "入口處",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.06183761335569038,
        "pitch": 0.09506039359385277,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.8664992998577183,
          "pitch": 0.19838395588833357,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "導覽地圖",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.239674226332749,
          "pitch": 0.2491207724852167,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -1.9431675042881693,
          "pitch": 0.15805957817888583,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0577727820290832,
          "pitch": 0.06234945688474269,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">山林好聲音電台</font></font>",
          "text": "<img src='img/Radio.jpg'>"
        },
        {
          "yaw": 0.4485552743922874,
          "pitch": 0.04631716847883638,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">生態治理工程介紹</font></font>",
          "text": "<img src='img/Project introduction.jpg'>"
        },
        {
          "yaw": -0.2690636576008565,
          "pitch": 0.06011036177622486,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">導覽地圖與點位編號</font></font>",
          "text":  "<img src='img/map.jpg'>"
        }
      ]
    },
    {
      "id": "2-",
      "name": "沙發區",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.6589291628086942,
          "pitch": 0.2651580600437917,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": -1.132836622544291,
          "pitch": 0.22142315156567172,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "聲音體驗區",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.3208720701743495,
        "pitch": 0.13346273470047265,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.3725736368193129,
          "pitch": 0.23077421595056968,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -1.8670413128057959,
          "pitch": 0.2639112005058202,
          "rotation": 0,
          "target": "4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.24387840139042005,
          "pitch": 0.08608763215054793,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">體驗及聲音說明牌</font></font>",
          "text": "<img src='img/experience and sound.jpg'>"
        },
        {
          "yaw": 0.24508667216549895,
          "pitch": 0.326405586709388,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">山林唱片行</font></font>",
          "text": "<img src='img/record store.jpg'>"
        },
        {
          "yaw": -0.9670148306267894,
          "pitch": 0.11430015539812999,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">食蛇龜</font></font>",
          "text": "<img src='img/Snake-eating turtle.jpg'>"
        }
      ]
    },
    {
      "id": "4-",
      "name": "台灣山羌",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.8901893542401975,
          "pitch": 0.250659240118539,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": 1.536181686575457,
          "pitch": 0.17192989373155498,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -0.6688174704924208,
          "pitch": 0.21229375485727253,
          "rotation": 0,
          "target": "5-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.03689145338821298,
          "pitch": 0.14539438443132724,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">台灣山羌</font></font>",
          "text": "<img src='img/Mountain Qiang.jpg'>"
        }
      ]
    },
    {
      "id": "5-",
      "name": "台灣石虎",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.159764754605634,
        "pitch": 0.04135465018887885,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.6618825547947829,
          "pitch": 0.14850078931461042,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": -0.5845194212220122,
          "pitch": 0.18001291747312642,
          "rotation": 0,
          "target": "6-"
        },
        {
          "yaw":4.3,
          "pitch": 0.10219856103235969,
          "rotation": 0,
          "target": "8-"
        },
        {
          "yaw": -0.10477343385230498,
          "pitch": 0.20775091214837715,
          "rotation": 0,
          "target": "7-"
        }
       
      ],
      "infoHotspots": [
        {
          "yaw": 0.2952543688997782,
          "pitch": 0.10713268714501112,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">台灣石虎</font></font>",
          "text": "<img src='img/stone tiger.jpg'>"
        }
      ]
    },
    {
      "id": "6-",
      "name": "腹斑蛙",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.18909934919213534,
          "pitch": 0.2753657028316354,
          "rotation": 0,
          "target": "7-"
        },
        {
          "yaw":0.35,
          "pitch": 0.1,
          "rotation": 0,
          "target": "5-"
        },
        {
          "yaw": 1.4,
          "pitch": 0.10219856103235969,
          "rotation": 0,
          "target": "8-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5259750092704341,
          "pitch": 0.18305011547986183,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">台灣黑熊</font></font>",
          "text": "<img src='img/Black Bear.jpg'>"
        },
        {
          "yaw": -0.07229750420624015,
          "pitch": 0.13548905212933882,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">腹斑蛙</font></font>",
          "text": "<img src='img/Olive Frog.jpg'>"
        }
      ]
    },
    {
      "id": "7-",
      "name": "休息區",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.08135074601102943,
        "pitch": 0.0745068502870474,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.9,
          "pitch": 0.21229375485727253,
          "rotation": 0,
          "target": "5-"
        },
                {
          "yaw": -0.9,
          "pitch": 0.1,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": 1.5424709056556036,
          "pitch": 0.10219856103235969,
          "rotation": 0,
          "target": "8-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6613935847241237,
          "pitch": 0.056577803392496406,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">藍腹鷴</font></font>",
          "text": "<img src='img/bird.jpg'>"
        }
      ]
    },
    {
      "id": "8-",
      "name": "聲音模仿區",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.13886063738504184,
        "pitch": 0.07143075941715438,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [

        {
          "yaw": -0.24310670805198953,
          "pitch": 0.18362234641557862,
          "rotation": 0,
          "target": "6-"
        },
                {
          "yaw": 0.6,
          "pitch": 0.18362234641557862,
          "rotation": 0,
          "target": "5-"
        },
        {
          "yaw": -2.774802543584606,
          "pitch": 0.38749811608052553,
          "rotation": 0,
          "target": "9--"
        }

      ],
      "infoHotspots": [
        {
          "yaw": 0.9125857782498201,
          "pitch": -0.06380896958092563,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">當你走入山林仔細聆聽，有發現什麼聲音嗎？</font></font></font></font>",
          "text": "<img src='img/Step into the forest.jpg'>"
        },
        {
          "yaw": 0.4145733417021429,
          "pitch": -0.16530028691739673,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">原來這些東西可以模仿動物的聲音！</font></font>",
          "text": "<img src='img/Animal.jpg'>"
        },
        {
          "yaw": -0.6650661526131838,
          "pitch": -0.16071620086970384,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">什麼物品可以製造出風與雷的聲音呢？</font></font>",
          "text": "<img src='img/Wind and thunder.jpg'>"
        },
        {
          "yaw": -1.4335982115819519,
          "pitch": -0.13189912442195784,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">有聽見下雨和溪流的聲音嗎？</font></font>",
          "text": "<img src='img/Rain and Stream.jpg'>"
        }
      ]
    },
    {
      "id": "9--",
      "name": "山林好聲音-擬音師挑戰",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.08592390163664732,
        "pitch": 0.024436838747973866,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.9688720690583406,
          "pitch": 0.19930347501078494,
          "rotation": 0,
          "target": "8-"
        },
        {
          "yaw": 2.847532268984514,
          "pitch": 0.019083323522945506,
          "rotation": 0,
          "target": "7-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9813335476053542,
          "pitch": 0.25727569400706685,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">擬音師挑戰</font></font>",
          "text": "<img src='img/Foley Artist Challenge.jpg'>"
        }
      ]
    }
  ],
  "name": "再響森之樂",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
