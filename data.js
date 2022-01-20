var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-corner",
      "name": "Street-corner",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2644150090849706,
        "pitch": 0.04926719071821495,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -1.2118433589284017,
          "pitch": -0.006084601442854165,
          "rotation": 0,
          "target": "1-street-front"
        },
        {
          "yaw": -1.8142055886034374,
          "pitch": -0.005419468317523268,
          "rotation": 0,
          "target": "3-path-to-field"
        },
        {
          "yaw": 1.7649296879947158,
          "pitch": 0.033110734290040966,
          "rotation": 0,
          "target": "9-back-plot-path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-street-front",
      "name": "Street-front",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9997353671018843,
        "pitch": 0.03537732463199461,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.8833003339604595,
          "pitch": 0.02850225437584264,
          "rotation": 0,
          "target": "18-main-entrance"
        },
        {
          "yaw": -2.2647776400093313,
          "pitch": -0.053085825139545406,
          "rotation": 0,
          "target": "2-street-far-corner"
        },
        {
          "yaw": 2.853561650114882,
          "pitch": 0.1306375841025318,
          "rotation": 0,
          "target": "3-path-to-field"
        },
        {
          "yaw": 0.4405456738334461,
          "pitch": 0.07271979782138871,
          "rotation": 0,
          "target": "0-street-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-street-far-corner",
      "name": "Street-far corner",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4842311376008297,
        "pitch": -0.003208984386718683,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.9879165900692044,
          "pitch": 0.014083326065744473,
          "rotation": 0,
          "target": "1-street-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-path-to-field",
      "name": "Path to field",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8256958388868547,
        "pitch": 0.26960401716819504,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.164625197921467,
          "pitch": 0.07971287975857066,
          "rotation": 4.71238898038469,
          "target": "4-field-entrance"
        },
        {
          "yaw": 0.022779052833573843,
          "pitch": -0.10399644534989605,
          "rotation": 0,
          "target": "1-street-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-field-entrance",
      "name": "Field entrance",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.349403693338294,
        "pitch": 0.03809865729599338,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -1.3150196104954155,
          "pitch": -0.16658003441587255,
          "rotation": 0,
          "target": "3-path-to-field"
        },
        {
          "yaw": -0.5183754849533457,
          "pitch": 0.05402068974361285,
          "rotation": 0,
          "target": "5-field-path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-field-path",
      "name": "Field path",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0663932969524872,
        "pitch": 0.04626265528799678,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.2773479223935453,
          "pitch": 0.027997141789414925,
          "rotation": 0,
          "target": "4-field-entrance"
        },
        {
          "yaw": 0.692876484537523,
          "pitch": -0.060409578722360635,
          "rotation": 0,
          "target": "6-field-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-field-corner",
      "name": "Field-corner",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.985597695243861,
        "pitch": 0.11701730455198245,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.9845381521115053,
          "pitch": -0.05564264471683522,
          "rotation": 0,
          "target": "5-field-path"
        },
        {
          "yaw": 0.3122113945474947,
          "pitch": 0.10116247576424087,
          "rotation": 0,
          "target": "7-field-far-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-field-far-end",
      "name": "Field-far end",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0246054918594787,
        "pitch": 0.244964085330043,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -1.0774535450241896,
          "pitch": -0.005012823741692429,
          "rotation": 0,
          "target": "8-field-house-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-field-house-view",
      "name": "Field-house view",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4562388048251904,
        "pitch": 0.03809865729600048,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.207440886274492,
          "pitch": -0.2420602535799805,
          "rotation": 0,
          "target": "1-street-front"
        },
        {
          "yaw": -1.3627448282719108,
          "pitch": -0.043916899521942554,
          "rotation": 0,
          "target": "6-field-corner"
        },
        {
          "yaw": -0.5296592537268126,
          "pitch": 0.0010460329993442485,
          "rotation": 0,
          "target": "7-field-far-end"
        },
        {
          "yaw": 0.1083084925489679,
          "pitch": 0.08066089222594996,
          "rotation": 0,
          "target": "8-field-house-view"
        },
        {
          "yaw": 3.0434798853616245,
          "pitch": -0.08511246827249508,
          "rotation": 0,
          "target": "5-field-path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-back-plot-path",
      "name": "Back plot path",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6584137928702862,
        "pitch": 0.08164599379585447,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.1675206584481952,
          "pitch": 0.019151609206840448,
          "rotation": 0,
          "target": "0-street-corner"
        },
        {
          "yaw": 1.7112985766254116,
          "pitch": -0.13620255915478197,
          "rotation": 0,
          "target": "10-path-back-property"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-path-back-property",
      "name": "Path back property",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7470605471925946,
        "pitch": -0.07075610033696478,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.781106441674896,
          "pitch": -0.09830738347977253,
          "rotation": 0,
          "target": "11-path-back-property-middle"
        },
        {
          "yaw": 0.3586617169509889,
          "pitch": 0.1441734604916043,
          "rotation": 0,
          "target": "9-back-plot-path"
        },
        {
          "yaw": -2.8253899985926765,
          "pitch": -0.1804744514001939,
          "rotation": 0,
          "target": "12-land--back-property"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-path-back-property-middle",
      "name": "Path back property middle",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.8132344419956397,
        "pitch": 0.35362944647283356,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.4040634238904897,
          "pitch": 0.10694855938336012,
          "rotation": 0,
          "target": "10-path-back-property"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-land--back-property",
      "name": "Land @ back property",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6291268678280844,
        "pitch": 0.021770661312004336,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.7772002850231488,
          "pitch": 0.1038750166254605,
          "rotation": 0,
          "target": "10-path-back-property"
        },
        {
          "yaw": 1.1861037393500133,
          "pitch": 0.053316367778256435,
          "rotation": 0,
          "target": "13-land--back---middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-land--back---middle",
      "name": "Land @ back - middle",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1033759913546746,
        "pitch": 0.37075302190170945,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.39830495247361775,
          "pitch": -0.0027681931443037655,
          "rotation": 0,
          "target": "12-land--back-property"
        },
        {
          "yaw": 2.0024754556209663,
          "pitch": 0.12463797912500496,
          "rotation": 2.356194490192345,
          "target": "14-land--back-corner"
        },
        {
          "yaw": 3.0596596622750525,
          "pitch": 0.03065827253825759,
          "rotation": 0,
          "target": "15-land--back-close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-land--back-corner",
      "name": "Land @ back-corner",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9449063958020769,
        "pitch": 0.22042794578396752,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.7961669744312605,
          "pitch": -0.0029036211760580244,
          "rotation": 0,
          "target": "13-land--back---middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-land--back-close",
      "name": "Land @ back-close",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6587404952818403,
        "pitch": -0.03425551808191507,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.1827713990604032,
          "pitch": 0.04144594492120213,
          "rotation": 0,
          "target": "13-land--back---middle"
        },
        {
          "yaw": 2.8105697404869936,
          "pitch": -0.0023415263555115473,
          "rotation": 0,
          "target": "14-land--back-corner"
        },
        {
          "yaw": 2.0790062855406424,
          "pitch": -0.0353938037761683,
          "rotation": 0,
          "target": "12-land--back-property"
        },
        {
          "yaw": -0.7702116274107826,
          "pitch": 0.001997827767292293,
          "rotation": 3.141592653589793,
          "target": "16-side-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-side-garden",
      "name": "Side garden",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.2391886379932462,
          "pitch": -0.4156578208022381,
          "rotation": 0.7853981633974483,
          "target": "15-land--back-close"
        },
        {
          "yaw": -1.0084034583422739,
          "pitch": -0.001270724555620717,
          "rotation": 0,
          "target": "17-side-garden-far"
        },
        {
          "yaw": 2.443439009626614,
          "pitch": 0.03699908622540704,
          "rotation": 0,
          "target": "18-main-entrance"
        },
        {
          "yaw": 0.37174445703094605,
          "pitch": 0.04591472083874848,
          "rotation": 1.5707963267948966,
          "target": "30-bbqwood-oven"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-side-garden-far",
      "name": "Side garden-far",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8058472959063518,
        "pitch": -0.03537732463199461,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.1709000354513783,
          "pitch": -0.1643608972576871,
          "rotation": 5.497787143782138,
          "target": "15-land--back-close"
        },
        {
          "yaw": 1.7739297365323852,
          "pitch": 0.06750638428573552,
          "rotation": 0,
          "target": "16-side-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-main-entrance",
      "name": "Main entrance",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5614675395036777,
        "pitch": -0.11157463922399913,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.373863591180511,
          "pitch": 0.008273419848265462,
          "rotation": 0,
          "target": "16-side-garden"
        },
        {
          "yaw": 1.8045930051840804,
          "pitch": 0.11866905525793747,
          "rotation": 0,
          "target": "1-street-front"
        },
        {
          "yaw": -1.474545881780088,
          "pitch": -0.0658954472988551,
          "rotation": 0,
          "target": "31-garage"
        },
        {
          "yaw": 0.01792295286274026,
          "pitch": -0.23827975921616407,
          "rotation": 0,
          "target": "32-stairs-1st"
        },
        {
          "yaw": 0.3482255622380439,
          "pitch": 0.05964578724372238,
          "rotation": 4.71238898038469,
          "target": "19-bar-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bar-entrance",
      "name": "Bar entrance",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7230439217316782,
        "pitch": 0.021770661311993678,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.773518346326936,
          "pitch": 0.03386424243624653,
          "rotation": 0,
          "target": "18-main-entrance"
        },
        {
          "yaw": -1.4240582863452396,
          "pitch": -0.013600692134929204,
          "rotation": 0,
          "target": "23-bar-far"
        },
        {
          "yaw": 0.3391548974684948,
          "pitch": 0.02073583866340556,
          "rotation": 4.71238898038469,
          "target": "20-restaurant-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-restaurant-entrance",
      "name": "Restaurant entrance",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6765834875380214,
        "pitch": 0.02177066131198302,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -1.4693247099909676,
          "pitch": 0.06779214161507596,
          "rotation": 3.141592653589793,
          "target": "19-bar-entrance"
        },
        {
          "yaw": -0.14237575904112276,
          "pitch": -0.007261163788534475,
          "rotation": 0,
          "target": "21-restaurant-room-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-restaurant-room-front",
      "name": "Restaurant room front",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.801127006482119,
        "pitch": 0.1667882982248976,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.432977657685649,
          "pitch": -0.022994873003000293,
          "rotation": 5.497787143782138,
          "target": "22-bar-close"
        },
        {
          "yaw": 1.8533404543461893,
          "pitch": 0.0678862481768725,
          "rotation": 0,
          "target": "20-restaurant-entrance"
        },
        {
          "yaw": -1.5052771532693132,
          "pitch": 0.03248091999192937,
          "rotation": 4.71238898038469,
          "target": "29-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bar-close",
      "name": "Bar-close",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9579403807460452,
        "pitch": 0.01259051713285686,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 2.9801304868333363,
          "pitch": -0.014330286734013598,
          "rotation": 0,
          "target": "21-restaurant-room-front"
        },
        {
          "yaw": 1.2314649998247447,
          "pitch": -0.02652699594421648,
          "rotation": 0,
          "target": "28-behind-bar"
        },
        {
          "yaw": 1.6302819992154616,
          "pitch": -0.010951398625831388,
          "rotation": 0,
          "target": "29-kitchen"
        },
        {
          "yaw": -0.19680831904107343,
          "pitch": 0.0369808834826042,
          "rotation": 0,
          "target": "26-shop-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bar-far",
      "name": "Bar-far",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.353641745950009,
        "pitch": 0.11498406895375268,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.9475830950451058,
          "pitch": 0.11837552872957424,
          "rotation": 3.141592653589793,
          "target": "22-bar-close"
        },
        {
          "yaw": -2.288406681050507,
          "pitch": -0.017223552338013093,
          "rotation": 0,
          "target": "24-wc1-bar"
        },
        {
          "yaw": -1.8840559544184128,
          "pitch": -0.02990910065182284,
          "rotation": 0,
          "target": "25-wc2-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-wc1-bar",
      "name": "WC1-bar",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1526964402990174,
        "pitch": 0.20972653694576948,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -3.0211959171956337,
          "pitch": -0.00837658127945673,
          "rotation": 0,
          "target": "23-bar-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-wc2-bar",
      "name": "WC2-bar",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1770539621719731,
        "pitch": 0.38915057095193717,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.559890369638868,
          "pitch": -0.02316155035595102,
          "rotation": 0,
          "target": "23-bar-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-shop-front",
      "name": "Shop-front",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4956861031032522,
        "pitch": 0.22603515960704357,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.2895191300843223,
          "pitch": -0.02838719939150991,
          "rotation": 0,
          "target": "22-bar-close"
        },
        {
          "yaw": 2.052314464253037,
          "pitch": -0.003317444493220023,
          "rotation": 0,
          "target": "27-shop-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-shop-back",
      "name": "Shop-back",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5928784099259357,
        "pitch": 0.1114287442985038,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -1.9436613929683055,
          "pitch": -0.01181734595833106,
          "rotation": 0,
          "target": "26-shop-front"
        },
        {
          "yaw": 2.797317886780217,
          "pitch": -0.015691338124526055,
          "rotation": 0,
          "target": "28-behind-bar"
        },
        {
          "yaw": 0.6120685159140375,
          "pitch": -0.05817136208431606,
          "rotation": 4.71238898038469,
          "target": "31-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-behind-bar",
      "name": "Behind bar",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.953047726161026,
        "pitch": 0.24265833081856059,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 2.9077813136893873,
          "pitch": 0.061712750994539434,
          "rotation": 0,
          "target": "22-bar-close"
        },
        {
          "yaw": -2.029164232375562,
          "pitch": -0.009837599883914194,
          "rotation": 0,
          "target": "27-shop-back"
        },
        {
          "yaw": 1.230153687461657,
          "pitch": -0.05821341233080091,
          "rotation": 0,
          "target": "21-restaurant-room-front"
        },
        {
          "yaw": -0.4878407262553104,
          "pitch": 0.034119755521638595,
          "rotation": 0,
          "target": "29-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5046490415460756,
        "pitch": 0.15511596184797938,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -1.8842284592059748,
          "pitch": -0.028669865361763414,
          "rotation": 0,
          "target": "28-behind-bar"
        },
        {
          "yaw": 2.800761579497781,
          "pitch": -0.06818001647539518,
          "rotation": 0,
          "target": "21-restaurant-room-front"
        },
        {
          "yaw": -0.652240807502686,
          "pitch": 0.004007024105884938,
          "rotation": 0,
          "target": "30-bbqwood-oven"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-bbqwood-oven",
      "name": "bbq+wood oven",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.38649791107425,
        "pitch": 0.20844564770365182,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 2.176719998955421,
          "pitch": 0.010403197345723925,
          "rotation": 0,
          "target": "29-kitchen"
        },
        {
          "yaw": -1.6601490943696362,
          "pitch": -0.07709706402563299,
          "rotation": 0,
          "target": "16-side-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-garage",
      "name": "Garage",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.48472017798877687,
        "pitch": 0.24208895050665014,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.04397905418995052,
          "pitch": 0.011197916149914278,
          "rotation": 0.7853981633974483,
          "target": "27-shop-back"
        },
        {
          "yaw": 2.7017552368924544,
          "pitch": -0.023501785298920552,
          "rotation": 0,
          "target": "18-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-stairs-1st",
      "name": "Stairs-1st",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1907864705872484,
        "pitch": -0.03483729497703969,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.106644281090727,
          "pitch": -0.17962890708809987,
          "rotation": 0,
          "target": "34-patio-entrance"
        },
        {
          "yaw": 2.5102805242148225,
          "pitch": 0.4136816097313698,
          "rotation": 0,
          "target": "18-main-entrance"
        },
        {
          "yaw": 1.6158411630850509,
          "pitch": 0.3139994567984381,
          "rotation": 0,
          "target": "1-street-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-patio-corner",
      "name": "Patio-corner",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.525064746771486,
        "pitch": 0.09245958444315505,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.10515028453894004,
          "pitch": 0.09057684819690337,
          "rotation": 0,
          "target": "34-patio-entrance"
        },
        {
          "yaw": 1.0312233604307472,
          "pitch": 0.037083484196438476,
          "rotation": 0,
          "target": "41-side-flat"
        },
        {
          "yaw": 0.9424851719827956,
          "pitch": -0.19128387894417642,
          "rotation": 0,
          "target": "54-stairs-1st---2nd"
        },
        {
          "yaw": -2.491494536105014,
          "pitch": 0.08307793832762655,
          "rotation": 3.141592653589793,
          "target": "0-street-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-patio-entrance",
      "name": "Patio-entrance",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9691677578678597,
        "pitch": 0.11067226560784604,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.7838537653750617,
          "pitch": 0.11049110776609439,
          "rotation": 0,
          "target": "33-patio-corner"
        },
        {
          "yaw": -1.1720700135216138,
          "pitch": -0.005287810842705909,
          "rotation": 0,
          "target": "36-main-door"
        },
        {
          "yaw": 2.0872173059603254,
          "pitch": 0.6449000767346114,
          "rotation": 0,
          "target": "32-stairs-1st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-sitting-room",
      "name": "Sitting room",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4602235047416565,
        "pitch": 0.11430054385146349,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 3.0129023868764895,
          "pitch": -0.004376335249578034,
          "rotation": 5.497787143782138,
          "target": "44-corridor-1st"
        },
        {
          "yaw": -1.7913255700112618,
          "pitch": 0.054871400792711356,
          "rotation": 0,
          "target": "34-patio-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-main-door",
      "name": "Main door",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7360483993800617,
        "pitch": 0.20410835062764576,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.9453030237504558,
          "pitch": 0.08743110302465773,
          "rotation": 0,
          "target": "34-patio-entrance"
        },
        {
          "yaw": -0.021253145949078345,
          "pitch": 0.03219782610595878,
          "rotation": 0,
          "target": "37-kitchen-1st"
        },
        {
          "yaw": -1.0577083280583572,
          "pitch": 0.07996338216846333,
          "rotation": 0,
          "target": "38-back-kitchen"
        },
        {
          "yaw": -1.6109139537542454,
          "pitch": 0.006005293910078535,
          "rotation": 0,
          "target": "43-storage-1"
        },
        {
          "yaw": -2.659300450767491,
          "pitch": -0.05287943416812446,
          "rotation": 0,
          "target": "44-corridor-1st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-kitchen-1st",
      "name": "Kitchen 1st",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7469226607598607,
        "pitch": 0.2571878002204997,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.9917090419130545,
          "pitch": 0.041226030040190764,
          "rotation": 0,
          "target": "36-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-back-kitchen",
      "name": "Back kitchen",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6047603734480518,
        "pitch": 0.2533373942123447,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.18403036138244744,
          "pitch": -0.005232078977943644,
          "rotation": 0,
          "target": "36-main-door"
        },
        {
          "yaw": -1.415071548116991,
          "pitch": 0.02505077144793333,
          "rotation": 0,
          "target": "41-side-flat"
        },
        {
          "yaw": 2.555793320933719,
          "pitch": 0.489373635303366,
          "rotation": 3.141592653589793,
          "target": "31-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-wc1-1st",
      "name": "WC1-1st",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5033045406891787,
        "pitch": 0.7762388532442532,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.041099947331226,
          "pitch": 0.03998705503898492,
          "rotation": 0,
          "target": "41-side-flat"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-bedroom-1",
      "name": "Bedroom 1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9148935990785487,
        "pitch": 0.29584773675767906,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -1.9099482293527075,
          "pitch": -0.054174799210823466,
          "rotation": 0,
          "target": "41-side-flat"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-side-flat",
      "name": "Side flat",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.515484281637953,
        "pitch": 0.2566874515038009,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.2677109203893835,
          "pitch": 0.013911022254767147,
          "rotation": 0,
          "target": "33-patio-corner"
        },
        {
          "yaw": 1.1514439039532078,
          "pitch": -0.04835708373674663,
          "rotation": 0,
          "target": "39-wc1-1st"
        },
        {
          "yaw": 1.4941682831706524,
          "pitch": -0.09074197201689671,
          "rotation": 0.7853981633974483,
          "target": "40-bedroom-1"
        },
        {
          "yaw": -2.78381544246224,
          "pitch": -0.16492563611619104,
          "rotation": 5.497787143782138,
          "target": "42-bedroom-2"
        },
        {
          "yaw": -0.27985648350009207,
          "pitch": 0.08932827268372634,
          "rotation": 0,
          "target": "38-back-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-bedroom-2",
      "name": "Bedroom 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.712244200082985,
        "pitch": 0.12049820747542128,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.8126788290880498,
          "pitch": 0.025247649521382698,
          "rotation": 0,
          "target": "41-side-flat"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-storage-1",
      "name": "Storage 1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.612270611419474,
        "pitch": 0.09574584581904944,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.1734481114730091,
          "pitch": 0.10308297443887504,
          "rotation": 0,
          "target": "36-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-corridor-1st",
      "name": "Corridor 1st",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8502799788886577,
        "pitch": 0.12245996987998353,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.3775905467320424,
          "pitch": -0.01463166740930788,
          "rotation": 0.7853981633974483,
          "target": "35-sitting-room"
        },
        {
          "yaw": 1.1177836644247492,
          "pitch": 0.0634009756389382,
          "rotation": 0,
          "target": "36-main-door"
        },
        {
          "yaw": -0.578106930345303,
          "pitch": -0.26517326566707133,
          "rotation": 0.7853981633974483,
          "target": "45-bedroom-3"
        },
        {
          "yaw": -2.0166024768213333,
          "pitch": 0.48463510565216517,
          "rotation": 3.141592653589793,
          "target": "47-corridor-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-bedroom-3",
      "name": "Bedroom 3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1168760767824963,
        "pitch": 0.2095426151279689,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.1682190903124194,
          "pitch": -0.042298699143932694,
          "rotation": 0,
          "target": "46-bed3-wc"
        },
        {
          "yaw": -0.2881493083151643,
          "pitch": 0.00202457880526552,
          "rotation": 0,
          "target": "44-corridor-1st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-bed3-wc",
      "name": "Bed3 WC",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9730697598901195,
        "pitch": 0.5123947071318788,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.787588008381821,
          "pitch": -0.21180647950490084,
          "rotation": 0,
          "target": "45-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-corridor-far",
      "name": "Corridor far",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 2.446163283696521,
          "pitch": 0.0401591462526909,
          "rotation": 0,
          "target": "44-corridor-1st"
        },
        {
          "yaw": -0.7423723896404866,
          "pitch": 0.1023707484119889,
          "rotation": 0,
          "target": "49-wc4"
        },
        {
          "yaw": 1.2362634145345517,
          "pitch": -0.09184069838877207,
          "rotation": 0,
          "target": "48-bedroom-4"
        },
        {
          "yaw": -2.0890515007246826,
          "pitch": -0.089191082818882,
          "rotation": 0,
          "target": "50-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-bedroom-4",
      "name": "Bedroom 4",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4804162102740825,
        "pitch": 0.22587061111197926,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 2.27575978014581,
          "pitch": -0.004306657703963879,
          "rotation": 0,
          "target": "47-corridor-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-wc4",
      "name": "WC4",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8040442158169814,
        "pitch": 0.6520688700229087,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.8367305624824155,
          "pitch": -0.08460932500670282,
          "rotation": 0,
          "target": "47-corridor-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-bedroom-5",
      "name": "Bedroom 5",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.449180571126762,
        "pitch": 0.4691578471698925,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.226557056664145,
          "pitch": -0.062404384398083934,
          "rotation": 0,
          "target": "47-corridor-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-2nd-floor-patio-corner",
      "name": "2nd floor patio corner",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0744637805458535,
        "pitch": 0.17416529049597074,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.7285739625762062,
          "pitch": 0.22710970411448983,
          "rotation": 0,
          "target": "54-stairs-1st---2nd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-2nd-floor-house",
      "name": "2nd floor house",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.066685912090076,
        "pitch": 0.11224920913899084,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.6834408815314195,
          "pitch": 0.3534586719843098,
          "rotation": 0,
          "target": "54-stairs-1st---2nd"
        },
        {
          "yaw": -2.1427925183951295,
          "pitch": 0.02932046695742585,
          "rotation": 0,
          "target": "55-corridor-2nd"
        },
        {
          "yaw": 2.9512168894627777,
          "pitch": 0.23407240200791435,
          "rotation": 0,
          "target": "53-2nd-floor-patio-front"
        },
        {
          "yaw": 1.7664496479315188,
          "pitch": 0.45615619082508374,
          "rotation": 2.356194490192345,
          "target": "33-patio-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-2nd-floor-patio-front",
      "name": "2nd floor patio front",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6059002224859746,
        "pitch": 0.10068930856798275,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 0.749569504133623,
          "pitch": 0.17564023143658858,
          "rotation": 0,
          "target": "52-2nd-floor-house"
        },
        {
          "yaw": 2.317082574018979,
          "pitch": 0.46280270464667694,
          "rotation": 0,
          "target": "33-patio-corner"
        },
        {
          "yaw": -1.8948576024919728,
          "pitch": 0.4571320320497563,
          "rotation": 0,
          "target": "1-street-front"
        },
        {
          "yaw": 0.03351472346465556,
          "pitch": 0.049633724884223795,
          "rotation": 4.71238898038469,
          "target": "55-corridor-2nd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-stairs-1st---2nd",
      "name": "Stairs 1st - 2nd",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.352728924525863,
        "pitch": 0.40646814245012663,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -2.056021340821065,
          "pitch": 0.33882064212245666,
          "rotation": 0,
          "target": "33-patio-corner"
        },
        {
          "yaw": 2.1525428001777236,
          "pitch": 0.13380066248510047,
          "rotation": 0,
          "target": "51-2nd-floor-patio-corner"
        },
        {
          "yaw": -0.8207016432702385,
          "pitch": 0.3656900921776334,
          "rotation": 0,
          "target": "52-2nd-floor-house"
        },
        {
          "yaw": -1.2678566476658197,
          "pitch": 0.13891687741206482,
          "rotation": 0,
          "target": "53-2nd-floor-patio-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-corridor-2nd",
      "name": "Corridor 2nd",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5271331935628005,
        "pitch": 0.217706613119951,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.1485358411331461,
          "pitch": 0.06365027258269329,
          "rotation": 4.71238898038469,
          "target": "57-sitting-room"
        },
        {
          "yaw": 2.049011652417077,
          "pitch": -0.20734045763137843,
          "rotation": 0.7853981633974483,
          "target": "56-kitchen"
        },
        {
          "yaw": 0.9407984852183482,
          "pitch": -0.04437058903928914,
          "rotation": 0.7853981633974483,
          "target": "58-bedroom-6"
        },
        {
          "yaw": 0.5323152057634566,
          "pitch": 0.031075489466385164,
          "rotation": 0,
          "target": "59-corridor-2nd-far-end"
        },
        {
          "yaw": -2.53927781074524,
          "pitch": 0.08068558712210638,
          "rotation": 0,
          "target": "52-2nd-floor-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.012209735314019,
        "pitch": 0.1311915185345356,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.1956430866190182,
          "pitch": -0.005422756198413481,
          "rotation": 0,
          "target": "55-corridor-2nd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-sitting-room",
      "name": "Sitting room",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.174550374129831,
        "pitch": 0.3150205221740343,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.21199109299003815,
          "pitch": 0.08255703429543537,
          "rotation": 0,
          "target": "55-corridor-2nd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-bedroom-6",
      "name": "Bedroom 6",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.21610441268666847,
        "pitch": 0.07746010078759724,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.9364708846433025,
          "pitch": -0.01685231168071688,
          "rotation": 0,
          "target": "55-corridor-2nd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-corridor-2nd-far-end",
      "name": "Corridor 2nd far end",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.07915894551422653,
        "pitch": 0.10560433910734446,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": -0.7900264969619162,
          "pitch": 0.2270958433182173,
          "rotation": 9.42477796076938,
          "target": "55-corridor-2nd"
        },
        {
          "yaw": -2.458619431526067,
          "pitch": 0.01873860290220719,
          "rotation": 0,
          "target": "60-bedroom-7"
        },
        {
          "yaw": 2.183471147978416,
          "pitch": 0.10845599341431367,
          "rotation": 0,
          "target": "61-wc5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8378448374204268,
          "pitch": 0.0594895190729563,
          "title": "Bedroom 8",
          "text": "Text"
        }
      ]
    },
    {
      "id": "60-bedroom-7",
      "name": "Bedroom 7",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.158948675150995,
        "pitch": 0.27681491161912675,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.2777046414922566,
          "pitch": 0.08183813827795738,
          "rotation": 0,
          "target": "59-corridor-2nd-far-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-wc5",
      "name": "WC5",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.789708962466367,
        "pitch": 0.5356111785986251,
        "fov": 1.4640769732317893
      },
      "linkHotspots": [
        {
          "yaw": 1.1518724862022296,
          "pitch": 0.19301238862451342,
          "rotation": 0,
          "target": "59-corridor-2nd-far-end"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
