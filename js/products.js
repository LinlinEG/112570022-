const products = [
  // --- 男鞋 (Men's Shoes) ---
  {
    id: "mens_1",
    name: "AURA 經典奢華手工牛皮德比鞋",
    category: "men",
    price: 4280,
    originalPrice: 5200,
    image: "assets/mens_1.png",
    rating: 4.9,
    reviewsCount: 148,
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["深邃黑", "焦糖棕"],
    description: "精心挑選頂級義大利進口頭層牛皮，由三十年製鞋老匠人全手工縫製。經典德比鞋版型，既適合日常商務辦公，亦能輕鬆駕馭正式晚宴。採用人體工學減壓真皮鞋墊，透氣排汗，讓您長時間穿著依舊舒適從容。",
    specs: {
      "鞋面材質": "頂級頭層進口牛皮",
      "內裡材質": "天然柔軟羊皮",
      "鞋底材質": "高規耐磨橡膠大底",
      "生產地": "台灣手工製造",
      "跟高": "3.0 cm"
    },
    reviews: [
      { author: "張**", rating: 5, content: "皮質非常細緻，手工縫線無懈可擊，穿起來非常大氣！", date: "2026-05-12" },
      { author: "陳**", rating: 4.8, content: "新鞋穿著不咬腳，鞋墊很軟，上班穿一整天腳都不會酸。", date: "2026-05-30" }
    ]
  },
  {
    id: "mens_2",
    name: "VELOCITY 智能避震輕量專業跑鞋",
    category: "men",
    price: 3250,
    originalPrice: 3880,
    image: "assets/mens_2.png",
    rating: 4.8,
    reviewsCount: 210,
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["科技白", "極速藍"],
    description: "專為城市跑者設計的高效能跑鞋。鞋面採用一體成型飛織網布，極致透氣貼合。搭載獨家開發的智能中底避震科技，能完美吸收跑步時的落地衝擊，轉化為向前的推進動能，帶給您無與倫比的跑步體驗。",
    specs: {
      "鞋面材質": "一體成型飛織透氣網布",
      "中底材質": "輕量回彈智能發泡材質",
      "鞋底材質": "耐磨抓地橡膠",
      "單隻重量": "240g (Size 42)",
      "適合路面": "公路、跑道"
    },
    reviews: [
      { author: "林**", rating: 5, content: "非常輕便，回彈力道十足，半馬測試腳感完美！", date: "2026-04-18" },
      { author: "黃**", rating: 4.5, content: "透氣性很好，夏天跑起來完全不悶熱，性價比極高。", date: "2026-05-22" }
    ]
  },
  {
    id: "mens_3",
    name: "TERRAIN-PRO 戶外防水重裝登山靴",
    category: "men",
    price: 5490,
    originalPrice: 6200,
    image: "assets/mens_3.png",
    rating: 4.7,
    reviewsCount: 88,
    sizes: [40, 41, 42, 43, 44, 46],
    colors: ["荒野棕", "探險黑"],
    description: "為極限挑戰而生的重裝登山靴。外層選用頂級防水磨砂皮革，結合專利防水透氣薄膜，即使在泥濘暴雨中也能保持雙腳絕對乾爽。Vibram®黃金大底提供頂級抓地與耐磨性，高筒設計能提供腳踝完美的支撐防護。",
    specs: {
      "鞋面材質": "防水防刮Nubuck皮革 + 橡膠防護片",
      "內裡材質": "防水透氣機能薄膜",
      "大底科技": "Vibram® 黃金抓地大底",
      "防護設計": "腳踝高支撐系統、防撞橡膠鞋頭",
      "淨重": "620g (單隻)"
    },
    reviews: [
      { author: "趙**", rating: 5, content: "去雪山穿這雙，防水性能一流，碎石路走起來腳底很紮實。", date: "2026-03-11" },
      { author: "李**", rating: 4, content: "保防和抓地力確實沒得說，就是新鞋稍微有點硬，需要穿幾天開鞋。", date: "2026-04-05" }
    ]
  },
  {
    id: "mens_4",
    name: "CLASSIC-WHITE 復古極簡全皮革板鞋",
    category: "men",
    price: 2880,
    originalPrice: 3200,
    image: "assets/mens_4.png",
    rating: 4.9,
    reviewsCount: 312,
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["百搭白", "黑白撞色"],
    description: "引領經典潮流的街頭板鞋。鞋身採用全粒面小牛皮打造，柔軟細膩，耐穿易清潔。鞋頭氣孔設計，增強空氣流通。乾淨極簡的線條輪廓，能無縫融入您的每一套日常穿搭，展現俐落率性的時尚態度。",
    specs: {
      "鞋面材質": "細緻全粒面小牛皮",
      "內裡材質": "親膚超細纖維皮",
      "鞋底材質": "耐磨耐壓縫線生膠底",
      "風格": "經典復古街頭風格",
      "保養建議": "使用皮革清潔劑擦拭即可"
    },
    reviews: [
      { author: "劉**", rating: 5, content: "小白鞋界的神器！皮質很軟，完全不累腳，出門必穿。", date: "2026-06-01" },
      { author: "吳**", rating: 4.8, content: "細節做工很好，沒有溢膠。白鞋非常百搭，打算再買一雙送人。", date: "2026-06-10" }
    ]
  },
  {
    id: "mens_5",
    name: "HYDRO-TRAIL 織帶機能水陸兩用涼鞋",
    category: "men",
    price: 2180,
    originalPrice: 2680,
    image: "assets/mens_5.png",
    rating: 4.6,
    reviewsCount: 75,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["戶外綠", "軍武黑"],
    description: "專為水陸戶外探險開發。快乾強韌織帶設計，搭配多點式魔鬼氈調節，完美貼合各種腳型。人體工學足弓支撐鞋床，能有效減緩行走疲勞。高抓地力排水大底，在濕滑溪石上也能穩健前行。",
    specs: {
      "織帶材質": "高強度快乾環保聚酯纖維",
      "中底設計": "人體工學足弓支撐EVA鞋床",
      "鞋底設計": "防滑橡膠加深排水刻紋大底",
      "功能特點": "極速快乾、水陸兩用、超輕量",
      "淨重": "210g"
    },
    reviews: [
      { author: "郭**", rating: 5, content: "溯溪和露營穿超方便，乾得很快，而且鞋底止滑性很棒！", date: "2026-05-18" }
    ]
  },
  {
    id: "mens_6",
    name: "AURA 英倫風尚手工麂皮切爾西靴",
    category: "men",
    price: 4580,
    originalPrice: 5400,
    image: "assets/mens_6.jpg",
    rating: 4.8,
    reviewsCount: 96,
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["英倫焦糖", "雅痞曜黑"],
    description: "精選頂級高質感牛麂皮，經過防潑水工藝處理，質感溫潤優雅。兩側搭配進口高彈性織帶，穿脫流暢自如。高挑流線的鞋型拉長腿部比例，是秋冬季節男士紳裝不可或缺的靈魂單品。",
    specs: {
      "鞋面材質": "防潑水細緻進口牛麂皮",
      "內裡材質": "全真皮羊皮內裡",
      "鞋底材質": "雙色高耐磨木質防滑大底",
      "鞋筒高": "14.0 cm",
      "筒圍": "26.0 cm"
    },
    reviews: [
      { author: "王**", rating: 5, content: "麂皮的顏色太漂亮了，穿著很有質感，配窄管褲簡集完美。", date: "2026-02-15" }
    ]
  },

  // --- 女鞋 (Women's Shoes) ---
  {
    id: "womens_1",
    name: "SCARLET 絕美派對麂皮紅底高跟鞋",
    category: "women",
    price: 3980,
    originalPrice: 4800,
    image: "assets/womens_1.png",
    rating: 4.9,
    reviewsCount: 156,
    sizes: [35, 36, 37, 38, 39, 40],
    colors: ["絕美緋紅", "經典雅黑"],
    description: "極致優雅的派對女王之選。鞋面選用精緻柔軟羊麂皮，帶來絲滑奢華質感。精心設計的優美楦頭線條，搭配經典魅惑紅底，展現性感的足部輪廓。8cm 細高跟設計，走起路來如行雲流水，散發無窮魅力。",
    specs: {
      "鞋面材質": "精緻羊麂皮",
      "內裡材質": "頂級羊皮",
      "鞋底材質": "高質感魅紅耐磨皮革大底",
      "跟高": "8.0 cm (細高跟)",
      "特色": "加厚乳膠記憶海綿掌墊"
    },
    reviews: [
      { author: "徐**", rating: 5, content: "婚宴上穿這雙，簡直驚艷全場，而且前掌加厚墊了，走起來比想像中穩！", date: "2026-05-15" },
      { author: "林**", rating: 4.8, content: "皮質非常親膚，紅底超級性感，包裝也很精美，大推！", date: "2026-06-05" }
    ]
  },
  {
    id: "womens_2",
    name: "ROSE-VELOCITY 輕羽緩震炫彩女跑鞋",
    category: "women",
    price: 3200,
    originalPrice: 3800,
    image: "assets/womens_2.png",
    rating: 4.8,
    reviewsCount: 182,
    sizes: [36, 37, 38, 39, 40],
    colors: ["櫻花粉", "炫光紫"],
    description: "專為女性腳型與步態開發的輕量緩震跑鞋。鞋身輕如羽毛，採用高透氣性提花織紋鞋面，提供貼合腳感的同時兼具優異散熱性。加強足弓支撐，提供穩定舒適的步伐感，是您瑜伽、慢跑與日常運動的完美夥伴。",
    specs: {
      "鞋面材質": "高透氣提花織紋網布",
      "中底科技": "輕羽高緩震回彈中底",
      "鞋墊設計": "抗菌透氣防臭鞋墊",
      "單隻重量": "190g (Size 37)",
      "適用情境": "健身房、戶外路跑、日常走路"
    },
    reviews: [
      { author: "簡**", rating: 5, content: "真的超級輕！顏色也很好看，跑起來感覺腳步非常輕快。", date: "2026-04-20" }
    ]
  },
  {
    id: "womens_3",
    name: "ONYX-SHIELD 時尚經典率性真皮短靴",
    category: "women",
    price: 4880,
    originalPrice: 5600,
    image: "assets/womens_3.png",
    rating: 4.7,
    reviewsCount: 112,
    sizes: [35, 36, 37, 38, 39, 40],
    colors: ["極致黑", "深木棕"],
    description: "率性優雅的城市短靴。採用全粒面厚實牛皮，經久磨損更顯質感。側邊金屬拉鍊設計，搭配粗高跟楦頭，不僅方便穿脫，更提供極佳的站立與行走穩定度。俐落的鞋身設計能完美搭配裙裝或貼身牛仔褲。",
    specs: {
      "鞋面材質": "嚴選厚實真皮牛皮",
      "內裡材質": "透氣保暖細絨內裡",
      "鞋底材質": "防滑耐磨生膠橡膠大底",
      "跟高": "5.5 cm (穩定粗跟)",
      "筒高": "11.5 cm"
    },
    reviews: [
      { author: "施**", rating: 5, content: "皮質好，鞋型秀氣但有個性。穿去旅遊天天走上萬步都OK！", date: "2026-01-20" }
    ]
  },
  {
    id: "womens_4",
    name: "BLOSSOM 輕柔法式羊皮芭蕾平底鞋",
    category: "women",
    price: 2680,
    originalPrice: 3200,
    image: "assets/womens_4.png",
    rating: 4.9,
    reviewsCount: 245,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    colors: ["優雅粉", "燕麥奶"],
    description: "如棉花糖般輕盈柔軟的法式平底鞋。鞋面與內裡皆使用進口頂級超軟羊皮，能完美貼合包覆腳掌，徹底告別咬腳困擾。鞋內鋪設高回彈乳膠記憶鞋墊，柔軟緩震，實現如同赤腳漫步雲端的舒適腳感。",
    specs: {
      "鞋面材質": "嬰兒級柔軟進口羊皮",
      "內裡材質": "親膚透氣羊皮",
      "鞋底材質": "極致柔軟超韌超輕底",
      "跟高": "1.0 cm",
      "特點": "可折疊收納、極輕量"
    },
    reviews: [
      { author: "溫**", rating: 5, content: "這是我穿過最舒服的平底鞋！真的是像踩在棉花上，一次買了兩個顏色！", date: "2026-05-25" },
      { author: "蔡**", rating: 4.8, content: "非常柔軟不咬腳，後跟完全不刮。上班或日常出門的首選。", date: "2026-06-02" }
    ]
  },
  {
    id: "womens_5",
    name: "WAVE 街頭老爹增高厚底潮流女鞋",
    category: "women",
    price: 3380,
    originalPrice: 3980,
    image: "assets/womens_5.png",
    rating: 4.8,
    reviewsCount: 198,
    sizes: [35, 36, 37, 38, 39, 40],
    colors: ["極致白", "冰川灰"],
    description: "街頭潮流焦點，視覺延伸拉長身形神鞋。多層次異材質拼接鞋面（反毛皮、透氣網布、皮革），展現前衛復古質感。5cm 輕量厚底設計，自然增高修飾腿型，巧妙避震且無厚重負擔，穿出率性時髦氣場。",
    specs: {
      "鞋面材質": "真皮牛皮 + 麂皮 + 科技網布多材質拼接",
      "內裡材質": "吸濕網布",
      "中底設計": "輕量避震厚中底 (5.0 cm)",
      "鞋底材質": "耐磨止滑大橡膠底",
      "鞋款風格": "街頭老爹鞋、增高潮流"
    },
    reviews: [
      { author: "高**", rating: 5, content: "視覺增高效果絕佳，而且鞋身很輕巧，不會像有些老爹鞋那麼重。", date: "2026-05-10" }
    ]
  },
  {
    id: "womens_6",
    name: "HORIZON 細帶金屬釦雅緻羅馬涼鞋",
    category: "women",
    price: 2380,
    originalPrice: 2880,
    image: "assets/womens_6.png",
    rating: 4.7,
    reviewsCount: 89,
    sizes: [35, 36, 37, 38, 39, 40],
    colors: ["奢華金", "經典黑"],
    description: "盛夏清涼時尚代表。精緻細窄牛皮帶交叉環繞，完美點綴優美踝部線條。特製抗氧化金屬釦飾，閃耀輕奢光澤。平底設計結合防滑耐磨鞋底，是度假旅遊、沙灘漫步與夏日穿搭的最佳單品。",
    specs: {
      "鞋帶材質": "柔軟牛細帶",
      "五金裝飾": "防鏽耐酸鹼抗氧化電鍍金屬扣",
      "鞋墊材質": "親膚透氣牛皮襯墊",
      "鞋底材質": "耐磨止滑大底",
      "版型": "正常版型"
    },
    reviews: [
      { author: "謝**", rating: 5, content: "細帶穿起來腳看起來非常白又秀氣，金屬釦質感超讚！", date: "2026-06-12" }
    ]
  },

  // --- 其他類 (Others) ---
  {
    id: "others_1",
    name: "APEX 越野極限全地形防水登山鞋",
    category: "others",
    price: 4980,
    originalPrice: 5600,
    image: "assets/others_1.png",
    rating: 4.8,
    reviewsCount: 64,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["戰術綠", "熔岩橘"],
    description: "結合野跑鞋輕盈感與登山鞋防護性的全地形神鞋。鞋底採用防滑仿生顆粒紋設計，提供全方位的泥地與濕滑路面抓地力。整鞋搭配防水防污特種面料，為您的戶外越野與露營提供全天候防護。",
    specs: {
      "鞋面材質": "高強度撕裂防刮防水面料",
      "大底科技": "全地形抓地排水防滑顆粒底",
      "鞋頭防護": "硬質3D橡膠防撞片",
      "單隻重量": "380g (Size 41)",
      "特色": "快抽防鬆束鞋帶系統"
    },
    reviews: [
      { author: "莊**", rating: 5, content: "穿這雙去越野跑和露營，又防水又止滑，鞋帶不用綁很方便！", date: "2026-05-08" }
    ]
  },
  {
    id: "others_2",
    name: "PLAYGROUND 兒童超彈力防撞機能運動鞋",
    category: "others",
    price: 1680,
    originalPrice: 1980,
    image: "assets/others_2.png",
    rating: 4.9,
    reviewsCount: 178,
    sizes: [28, 30, 32, 34, 36],
    colors: ["極致彩虹", "星空藍"],
    description: "專為活潑兒童設計的護足運動鞋。鞋頭加寬防撞硬片，貼心保護幼嫩腳趾。一體式高彈力超輕量中底，能有效舒緩兒童跳躍時的骨骼衝擊。便利魔鬼氈束帶設計，讓孩子自己也能輕鬆穿脫。",
    specs: {
      "鞋面材質": "高彈性三明治透氣網布",
      "防撞設計": "1/3處易彎折、寬楦硬防撞鞋頭",
      "中底材質": "高回彈無毒輕量EVA",
      "固定方式": "強韌雙魔鬼氈設計",
      "特點": "抗菌防蟎防臭鞋墊"
    },
    reviews: [
      { author: "張**", rating: 5, content: "兒子非常喜歡，說像有彈簧一樣。魔鬼氈很牢固，鞋頭防撞設計很讓人放心。", date: "2026-05-14" },
      { author: "江**", rating: 5, content: "透氣性好，小孩子腳汗多穿這雙完全不臭，洗了也乾得快。", date: "2026-05-28" }
    ]
  },
  {
    id: "others_3",
    name: "CLOUD 極致親膚減壓記憶棉居家拖鞋",
    category: "others",
    price: 790,
    originalPrice: 990,
    image: "assets/others_3.png",
    rating: 4.9,
    reviewsCount: 320,
    sizes: [36, 38, 40, 42, 44],
    colors: ["軟綿灰", "晨曦粉"],
    description: "釋放雙腳終極疲勞的秘密武器。鞋床填裝 2cm 超厚頂級慢回彈記憶海綿，完美貼合個人足部曲度，踏上去如同漫步於雲朵之中。外層包裹精選親膚有機毛圈棉織物，柔軟吸汗，鞋底採用靜音防滑EVA，不傷木地板。",
    specs: {
      "鞋面材質": "極致親膚純棉針織毛圈布",
      "填充物": "慢回彈高密度避震記憶海綿 (2cm)",
      "鞋底材質": "靜音防滑輕量EVA",
      "功能特點": "極致靜音、吸汗透氣、可機洗",
      "重量": "110g (單隻)"
    },
    reviews: [
      { author: "沈**", rating: 5, content: "踩上去真的很舒服！而且走木地板完全沒有聲音，真的超靜音。", date: "2026-06-11" },
      { author: "蘇**", rating: 4.8, content: "很厚實，穿起來很放鬆，打算幫全家人都買一雙。", date: "2026-06-15" }
    ]
  },
  {
    id: "others_4",
    name: "SHIELD-PRO 專業頂級鞋類清潔與防護全能套組",
    category: "others",
    price: 980,
    originalPrice: 1200,
    image: "assets/others_4.png",
    rating: 4.7,
    reviewsCount: 145,
    sizes: ["One Size"],
    colors: ["極致奢華裝"],
    description: "您愛鞋的專業守護者。本套組包含：1瓶天然椰子油精華溫和速效清潔噴霧（150ml）、1把頂級天然豬鬃毛拋光木刷、1塊高吸水抗菌超細纖維拋光布。溫和中性配方，不傷皮質、不退色，適用於真皮、麂皮、網布、飛織等各類鞋材。",
    specs: {
      "清潔劑成分": "天然植物活性劑、椰子精油、抗菌防霉劑",
      "刷具材質": "頂級天然豬鬃毛 + 荷木握柄",
      "毛巾規格": "30x30cm 高密度吸水超細纖維布",
      "安全保證": "中性環保配方，不含重金屬，不傷肌膚",
      "適用材質": "全鞋材適用 (皮質、網布、尼龍、麂皮)"
    },
    reviews: [
      { author: "曾**", rating: 5, content: "洗刷效果真的超神奇，那把刷子很軟不傷皮革，拯救了我好幾雙髒球鞋！", date: "2026-05-19" },
      { author: "彭**", rating: 4.6, content: "清潔劑起泡很綿密，去汙速度快，擦乾就乾淨了，不用水沖真的很方便。", date: "2026-05-29" }
    ]
  }
];
