define({ "api": [
  {
    "type": "get",
    "url": "/baslik/:slug",
    "title": "tekil başlık GETir.",
    "name": "GetBaslik",
    "group": "başlık",
    "version": "1.0.0",
    "description": "<p>Spesifik başlığı entry'leri ile birlikte getiren endpoint. Gönül isterdi ki basliklari id'si sayesinde getirebilelim ama hayat işte, ey ssg duy sesimizi. endpoint sonlarındaki querystringler aynı ekşideki gibi çalışır. örneğin şükela modu için endpointin sonuna şunu ekleyebilirsiniz: ?a=nice</p> <p>not: slug yerine basliğin kendisini birebir yazarsaniz da calisir: örneğin:</p> <p>http://localhost:3000/api/baslik/veda ederken 2020'ye bir not bırak</p> <p>/baslik/pena--31782</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>baslik slug'ı. pena--31782 gibi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>başlik id'si.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>başlığın kendisi.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>başlığın slug'ı.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_page",
            "description": "<p>başlığın sahip olduğu sayfa sayısı.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "current_page",
            "description": "<p>bulunulan sayfa numarası.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>başlığın kanalları.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "entries",
            "description": "<p>başlığın entry'leri.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"31782\",\n  \"title\": \"pena\",\n  \"slug\": \"pena--31782\",\n  \"total_page\": 89,\n  \"current_page\": 1,\n  \"tags\": [\n    \"ekşi-sözlük\",\n    \"müzik\"\n  ],\n  \"entries\": [\n    {\n      \"id\": \"1\",\n      \"body\": \"gitar calmak icin kullanilan minik plastik garip nesne.\",\n      \"author\": \"ssg\",\n      \"created_at\": \"15.02.1999\",\n      \"updated_at\": null\n    },\n    {\n      \"id\": \"69759\",\n      \"body\": \"en iyi pena ayak başparmaklarınızdan elde edeceğiniz tırnaklardan... hassas penadır.\",\n      \"author\": \"otisabi\",\n      \"created_at\": \"13.12.1999 02:23\",\n      \"updated_at\": null\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/doc.js",
    "groupTitle": "başlık"
  },
  {
    "type": "get",
    "url": "/basliklar/",
    "title": "başlıkları GETir.",
    "name": "GetEntry",
    "group": "başlık",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example curl:",
        "content": "curl -i http://localhost:3000/api/basliklar",
        "type": "curl"
      },
      {
        "title": "Example python:",
        "content": "import requests as r\nreq = r.get(\"http://localhost:3000/api/basliklar\")",
        "type": "python"
      },
      {
        "title": "Example axios(js):",
        "content": "req = axios.get(\"http://localhost:3000/api/basliklar\").then(...)",
        "type": "javascript"
      }
    ],
    "description": "<p>gündemdeki başlıkları getiren endpoint. efendim tabii isterseniz kanallardaki başlıkları da çekebilirsiniz. bunu yapmak fevkalade basit. Istek yapabilmek için gerekli endpointler:</p> <p>/basliklar/</p> <p>/basliklar/kanal/spor</p> <p>başlıkları sayfa sayfa görüntülemek için endpoint'in sonuna şunu koyabilirsiniz: ?p=2</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "baslik",
            "description": "<p>başlık objelerinin arrayi.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>başlik id'si.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>başlığın kendisi.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>başlığın eksisozluk.com'daki url adresi.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entry_count",
            "description": "<p>başlıktaki entry sayısı.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n    \"id\": 6303813,\n    \"title\": \"9 kere leyla\",\n    \"slug\": \"/9-kere-leyla--6303813?a=popular\",\n    \"entry_count\": \"498\"\n  },\n  {\n    \"id\": 6254224,\n    \"title\": \"veda ederken 2020'ye bir not bırak\",\n    \"slug\": \"/veda-ederken-2020ye-bir-not-birak--6254224?a=popular\",\n    \"entry_count\": \"109\"\n  },\n ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/doc.js",
    "groupTitle": "başlık"
  },
  {
    "type": "get",
    "url": "/api/debe/",
    "title": "debe GETir.",
    "name": "DEBEGet",
    "group": "debe",
    "version": "1.0.0",
    "description": "<p>debeleri getiren endpoint. debe'deki tüm entry'leri tek tek çekerek getirdiği için getirmesi zaman alır ama bir şekilde getirir. o debe buraya gelecek.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>debe tarihi.</p>"
          },
          {
            "group": "Success 200",
            "type": "[Entry]",
            "optional": false,
            "field": "array",
            "description": "<p>dünün en beğenilen entry objeleri.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  \"date\": \"2020-12-04\",\n {\n   \"title\": \"pena\",\n   \"body\": \"gitar calmak icin kullanilan minik plastik garip nesne.\",\n   \"author\": \"ssg\",\n   \"fav_count\": \"12021\",\n   \"created_at\": \"15.02.1999\",\n   \"updated_at\": null\n },\n { ... },\n...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/doc.js",
    "groupTitle": "debe"
  },
  {
    "type": "get",
    "url": "/api/entry/:id",
    "title": "tekil entry GETir.",
    "name": "GetEntry",
    "group": "entry",
    "description": "<p>entry no'su ile entry getiren endpoint.</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>entry no'su.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>entry id'si.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>entry başlığı.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>entry içeriği.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>entry yazarı.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fav_count",
            "description": "<p>entry favori sayısı.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>entry oluşturulma tarihi.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>entry editlenme tarihi (varsa).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"id\": 1,\n \"title\": \"pena\",\n \"body\": \"gitar calmak icin kullanilan minik plastik garip nesne.\",\n \"author\": \"ssg\",\n \"fav_count\": \"12021\",\n \"created_at\": \"15.02.1999\",\n \"updated_at\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EntryNotFound",
            "description": "<p>Entry bulunamadı hatası.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Request failed with status code 404\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/doc.js",
    "groupTitle": "entry"
  },
  {
    "type": "get",
    "url": "/api/ara/:query",
    "title": "aram sonucunu GETir.",
    "name": "GetSearch",
    "group": "search",
    "description": "<p>site içi arama yapan endpoint.</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>arama kelimesi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thread_count",
            "description": "<p>başlık sayısı</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "threads",
            "description": "<p>başlık array'i.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"thread_count\": \"230 başlık\",\n  \"threads\": [\n    {\n      \"id\": 6254224,\n      \"title\": \"veda ederken 2020'ye bir not bırak\",\n      \"slug\": \"https://eksisozluk.com/veda-ederken-2020ye-bir-not-birak--6254224?a=popular\",\n      \"entry_count_total\": \"182\"\n    },\n    {\n      \"id\": 6303813,\n      \"title\": \"9 kere leyla\",\n      \"slug\": \"https://eksisozluk.com/9-kere-leyla--6303813?a=popular\",\n      \"entry_count_total\": \"535\"\n    },\n    {\n      \"id\": 6754548,\n      \"title\": \"5 aralık 2020 çin'in ay'a bayrak dikmesi\",\n      \"slug\": \"https://eksisozluk.com/5-aralik-2020-cinin-aya-bayrak-dikmesi--6754548?a=popular\",\n      \"entry_count_total\": \"28\"\n    },",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\"error\":\"Request failed with status code 404\"}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/doc.js",
    "groupTitle": "search"
  },
  {
    "type": "get",
    "url": "/api/autocomplete/:query",
    "title": "autoComplete.",
    "name": "autoComplete",
    "group": "search",
    "description": "<p>Otomatik tamamlama sağlayan endpoint.</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>kullanıcı nick'i</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Titles\": [\n    \"pena\",\n    \"pena (video kanalı)\",\n    \"pena'daki aldatan sevgili entry canlandırması\",\n    \"pena olmayınca kullanılanlar\",\n    \"ekşi sözlük logosundaki pena\",\n    \"pena ile bas gitar çalmak\",\n    \"trista pena\",\n    \"20 ağustos 2018 pena butonunun gelmesi\"\n  ],\n  \"Query\": \"pena\",\n  \"Nicks\": [\n    \"pena\",\n    \"pena gibi kaybolsam\",\n    \"pena minik plastik garip nesne\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/doc.js",
    "groupTitle": "search"
  },
  {
    "type": "get",
    "url": "/api/biri/:nick",
    "title": "tekil kullanıcı GETir.",
    "name": "GetUser",
    "group": "user",
    "description": "<p>nick ile kullanıcı bilgisi getiren endpoint.</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>kullanıcı nick'i</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>kullanıcı nick'i</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry_count_total",
            "description": "<p>kullanıcının toplam entry sayısı.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry_count_lastmonth",
            "description": "<p>son ay entry sayısı.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry_count_lastweek",
            "description": "<p>son hafta entry sayısı.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry_count_today",
            "description": "<p>bugünkü entry sayısı.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_entry_time",
            "description": "<p>son entry girme zamanı.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"nick\": \"ssg\",\n  \"entry_count_total\": \"50048\",\n  \"entry_count_lastmonth\": \"67\",\n  \"entry_count_lastweek\": \"25\",\n  \"entry_count_today\": \"0\",\n  \"last_entry_time\": \"evvelsi gün\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\"error\":\"Request failed with status code 404\"}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc/doc.js",
    "groupTitle": "user"
  }
] });
