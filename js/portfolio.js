$(document).ready(function () {
  /* 포트폴리오 리스트 */
  // var i = 0;
  // for (i; i < portfolio_list.length; i++) {
  //   var portfolioList =
  //     "<a href='javascript:void(0)' class='item'><div class='img_box'><img src='" +
  //     "../img/portfolio/" +
  //     portfolio_list[i].thumbnail +
  //     ".png'/><div class='info'><span>" +
  //     portfolio_list[i].type +
  //     "</span><p>" +
  //     portfolio_list[i].description2 +
  //     "</p></div></div><strong class='title'>" +
  //     portfolio_list[i].name +
  //     "</strong><p class='description'>" +
  //     portfolio_list[i].description1 +
  //     "</p></a>";

  //   /* all */
  //   $(".portfolio .all").append(portfolioList);

  //   /* block chain */
  //   if (portfolio_list[i].type.includes("Block Chain")) {
  //     $(".portfolio .blockchain").append(portfolioList);
  //   }
  //   /* App */
  //   if (portfolio_list[i].type.includes("APP")) {
  //     $(".portfolio .app").append(portfolioList);
  //   }
  //   /* Web */
  //   if (portfolio_list[i].type.includes("WEB")) {
  //     $(".portfolio .web").append(portfolioList);
  //   }
  //   /* Mobile */
  //   if (portfolio_list[i].type.includes("MOBILE")) {
  //     $(".portfolio .mobile").append(portfolioList);
  //   }
  //   /* admin */
  //   if (portfolio_list[i].type.includes("Admin")) {
  //     $(".portfolio .admin").append(portfolioList);
  //   }
  //   /* ai */
  //   if (portfolio_list[i].type.includes("AI")) {
  //     $(".portfolio .ai").append(portfolioList);
  //   }
  //   /* Big Data */
  //   if (portfolio_list[i].type.includes("Big Data")) {
  //     $(".portfolio .bigdata").append(portfolioList);
  //   }
  // }
  var projectType = "All";
  $(".tab_button button").on("click", function () {
    var idx = $(this).index();
    $(".tab_button button, .tab_content > .item").removeClass("on");
    $(this).addClass("on");
    $(".tab_content > .item").eq(idx).addClass("on");
    // if (idx == 1) {
    //   projectType = "Block Chain";
    // } else if (idx == 2) {
    //   projectType = "APP";
    // } else if (idx == 3) {
    //   projectType = "WEB";
    // } else if (idx == 4) {
    //   projectType = "MOBILE";
    // } else if (idx == 5) {
    //   projectType = "Admin";
    // } else if (idx == 6) {
    //   projectType = "AI";
    // } else if (idx == 7) {
    //   projectType = "Big Data";
    // } else {
    //   projectType = "All";
    // }
    // localStorage.setItem("portfolio_type", projectType);
  });

  $(".portfolio .list .item").on("click", function () {
    // var title = $(this).find(".title").text();
    // link(title);
    portfolio_detail(linkName);
  });
  // if (localStorage.getItem("portfolio_type")) {
  //   var projectType = localStorage.getItem("portfolio_type");
  // }
  // if (localStorage.getItem("portfolio_title")) {
  //   var projectTitle = localStorage.getItem("portfolio_title");
  // }

  // /* 포트폴리오 이전버튼 */
  // $(".btn_prev").on("click", function () {
  //   var i = 0;
  //   var projectPrevList = [];

  //   if (projectType == "All") {
  //     console.log("ddd");
  //     var x = 0;
  //     for (x; x < portfolio_list.length; x++) {
  //       if (portfolio_list[x].name == projectTitle) {
  //         projectTitle = portfolio_list[x - 1].name;
  //         $(".portfolio_title").text(portfolio_list[x - 1].name);
  //         $(".right_box > p").text(portfolio_list[x - 1].description3);
  //         $(".right_box .txt p:nth-child(1) span:nth-child(2)").text(
  //           portfolio_list[x - 1].client
  //         );
  //         $(".right_box .txt p:nth-child(2) span:nth-child(2)").text(
  //           portfolio_list[x - 1].release
  //         );
  //         $(".right_box .txt p:nth-child(3) span:nth-child(2)").text(
  //           portfolio_list[x - 1].typeDetail
  //         );
  //         var y = 0;
  //         var imgTag = "";
  //         for (y; y < portfolio_list[y].img.length; y++) {
  //           imgTag +=
  //             "<img src='" +
  //             "../img/portfolio/" +
  //             portfolio_list[x - 1].img[y] +
  //             ".png' style='width: " +
  //             portfolio_list[x - 1].imgSize[y] +
  //             "px; margin-top: " +
  //             portfolio_list[x - 1].marginTop[y] +
  //             "px;' />";
  //         }
  //       }
  //       $(".portfolio_detail .img_box").html(imgTag);
  //     }
  //   }
  //   for (i; i < portfolio_list.length; i++) {
  //     if (portfolio_list[i].type.includes(projectType)) {
  //       projectPrevList.push(portfolio_list[i]);
  //     }
  //   }
  //   var x = 0;
  //   for (x; x < projectPrevList.length; x++) {
  //     if (projectPrevList[x].name == projectTitle) {
  //       projectTitle = projectPrevList[x - 1].name;
  //       $(".portfolio_title").text(projectPrevList[x - 1].name);
  //       $(".right_box > p").text(projectPrevList[x - 1].description3);
  //       $(".right_box .txt p:nth-child(1) span:nth-child(2)").text(
  //         projectPrevList[x - 1].client
  //       );
  //       $(".right_box .txt p:nth-child(2) span:nth-child(2)").text(
  //         projectPrevList[x - 1].release
  //       );
  //       $(".right_box .txt p:nth-child(3) span:nth-child(2)").text(
  //         projectPrevList[x - 1].typeDetail
  //       );
  //       var y = 0;
  //       var imgTag = "";
  //       for (y; y < projectPrevList[y].img.length; y++) {
  //         imgTag +=
  //           "<img src='" +
  //           "../img/portfolio/" +
  //           projectPrevList[x - 1].img[y] +
  //           ".png' style='width: " +
  //           projectPrevList[x - 1].imgSize[y] +
  //           "px; margin-top: " +
  //           projectPrevList[x - 1].marginTop[y] +
  //           "px;' />";
  //       }
  //     }
  //     $(".portfolio_detail .img_box").html(imgTag);
  //   }
  //   window.scrollTo(0, 0);
  // });

  // /* 포트폴리오 다음버튼 */
  // $(".btn_next").on("click", function () {
  //   // console.log(projectTitle);
  //   var i = 0;
  //   var projectNextList = [];
  //   for (i; i < portfolio_list.length; i++) {
  //     if (portfolio_list[i].type.includes(projectType)) {
  //       projectNextList.push(portfolio_list[i]);
  //     }
  //   }
  //   var x = 0;
  //   for (x; x < projectNextList.length; x++) {
  //     console.log(projectNextList[x].name);
  //     console.log("projectTitle", projectTitle);
  //     if (projectNextList[x].name == projectTitle) {
  //       projectTitle = projectNextList[x + 1].name;
  //       $(".portfolio_title").text(projectNextList[x + 1].name);
  //       $(".right_box > p").text(projectNextList[x + 1].description3);
  //       $(".right_box .txt p:nth-child(1) span:nth-child(2)").text(
  //         projectNextList[x + 1].client
  //       );
  //       $(".right_box .txt p:nth-child(2) span:nth-child(2)").text(
  //         projectNextList[x + 1].release
  //       );
  //       $(".right_box .txt p:nth-child(3) span:nth-child(2)").text(
  //         projectNextList[x + 1].typeDetail
  //       );
  //       // var y = 0;
  //       // for (y; y < projectList[y].img.length; y++) {
  //       //   var imgTag =
  //       //     "<img src='" +
  //       //     "../img/portfolio/" +
  //       //     projectList[x - 1].img[y] +
  //       //     ".png' style='width: " +
  //       //     projectList[x - 1].imgSize[y] +
  //       //     "px; margin-top: " +
  //       //     projectList[x - 1].marginTop[y] +
  //       //     "px;' />";
  //       //   $(".portfolio_detail .img_box").html(imgTag);
  //       // }
  //     }
  //   }
  //   window.scrollTo(0, 0);
  // });
});

function portfolio_detail(projectName) {
  location.href = projectName + ".html";
  console.log(projectType);
}

function link(title) {
  location.href = "portfolio_detail.html";
  localStorage.setItem("portfolio_title", title);
}

function portfolio_setting() {
  if (localStorage.getItem("portfolio_title")) {
    var data = localStorage.getItem("portfolio_title");
  }
  var i = 0;
  for (i; i < portfolio_list.length; i++) {
    if (portfolio_list[i].name == data) {
      $(".portfolio_title").text(portfolio_list[i].name);
      $(".right_box > p").text(portfolio_list[i].description3);
      $(".right_box .txt p:nth-child(1) span:nth-child(2)").text(
        portfolio_list[i].client
      );
      $(".right_box .txt p:nth-child(2) span:nth-child(2)").text(
        portfolio_list[i].release
      );
      $(".right_box .txt p:nth-child(3) span:nth-child(2)").text(
        portfolio_list[i].typeDetail
      );
      var x = 0;
      for (x; x < portfolio_list[i].img.length; x++) {
        var imgTag =
          "<img src='" +
          "../img/portfolio/" +
          portfolio_list[i].img[x] +
          ".png' style='width: " +
          portfolio_list[i].imgSize[x] +
          "px; margin-top: " +
          portfolio_list[i].marginTop[x] +
          "px;' />";

        $(".portfolio_detail .img_box").append(imgTag);
      }
    }
  }
}

var portfolio_list = [
  {
    id: 1,
    name: "GDAC(지닥)",
    type: "WEB",
    typeDetail: "Web, Mobile",
    description1: "디지털 자산 거래소",
    description2: "ISMS인증 FIU인증 거래소 시스템 설계 및 구축",
    description3:
      "디지털 자산 거래소 iSMS인증 FIU인증 거래소 시스템 설계 및 구축, AWS 기반 거래소 서비스 구축,  AWS 서버 프레임 워크 풀스택 개발",
    client: "GDAC 지닥",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_gdac",
    img: ["portfolio_detail_gdac1", "portfolio_detail_gdac2"],
    imgSize: [1000, 1000],
    marginTop: [0, 80],
    link: "gdac",
  },
  {
    id: 2,
    name: "CITIC",
    type: "Block Chain, Admin",
    typeDetail: "Block Chain, Web, Mobile",
    description1: "중국중신그룹유한회사",
    description2: "중국 중신은행 하이퍼렛저 CDBC발행 관련 블록체인 시스템",
    description3:
      "중국중신그룹유한회사 중국 중신은행 하이퍼렛저 CDBC 발행 관련 블록체인 시스템도입 factor 블록체인 메인넷 형성 및 제작",
    client: "CITIC",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_citic",
    img: ["portfolio_detail_citic1", "portfolio_detail_citic2"],
    imgSize: [1000, 1000],
    marginTop: [0, 80, 64, 64],
    link: "citic",
  },
  {
    id: 3,
    name: "시그널",
    type: "APP",
    typeDetail: "Web, Mobile, PHP, Java, IAMPORT, Kafka",
    description1: "설명자료 없음",
    description2: "중국 중신은행 하이퍼렛저 CDBC발행 관련 블록체인 시스템",
    description3:
      "야구 관련 쇼핑몰 웹 야구 장비 판매 쇼핑몰 웹 및 야구 관련 이벤트 일정 및 뉴스 알림 웹",
    client: "시그널",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_signal",
    img: [
      "portfolio_detail_signal1",
      "portfolio_detail_signal2",
      "portfolio_detail_signal3",
    ],
    imgSize: [1000, 1000, 1000],
    marginTop: [0, 104, 104],
    link: "app",
  },
  {
    id: 4,
    name: "헬로우톡",
    type: "APP",
    typeDetail: "Web, Mobile, PHP, Java, IAMPORT, Kafka",
    description1: "설명자료 없음",
    description2: "중국 중신은행 하이퍼렛저 CDBC발행 관련 블록체인 시스템",
    description3:
      "디지털 자산 거래소 iSMS인증 FIU인증 거래소 시스템 설계 및 구축, AWS 기반 거래소 서비스 구축,  AWS 서버 프레임 워크 풀스택 개발",
    client: "헬로우톡",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_hellotalk",
    img: ["portfolio_detail_hellotalk1", "portfolio_detail_hellotalk2"],
    imgSize: [600, 600],
    marginTop: [0, 0],
    link: "hellotalk",
  },
  {
    id: 5,
    name: "위쿱",
    type: "WEB",
    typeDetail: "React, Docker, Django, Postgresql, React Native",
    description1: "전문가 매칭 플랫폼",
    description2: "여러분야의 프리랜서 및 전문가 매칭 플랫폼",
    description3:
      "전문가 매칭 플랫폼 크*을 벤치마킹하여 개발된 플랫폼으로서 여러 프리랜서들과 전문가들의 여러 분야에서 매칭 가능하도록 개발된 플랫폼",
    client: "위쿱",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_wecoop",
    img: ["portfolio_detail_wecoop1", "portfolio_detail_wecoop2"],
    imgSize: [1000, 1000],
    marginTop: [0, 80],
    link: "wecoop",
  },
  {
    id: 6,
    name: "소송프로",
    type: "APP",
    typeDetail:
      "Kotlin, Swift, Postgresql, BeautifulSoup, Kafka, Selenium, Nodejs",
    description1: "변호사 전용 사건 관리앱",
    description2:
      "대법원 사이트에서 웹 크롤링한 데이터 기반, 사건 관리 및 일정관리",
    description3:
      "변호사 전용 사건 관리앱 변호사들 전용 대법원 사이트에서 웹 크롤링 해온 데이터들을 기반으로 사건 관리 및 일정 관리 리액트 네이티브 엎르리케이션",
    client: "소송프로",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_sosongpro",
    img: ["portfolio_detail_sosongpro1", "portfolio_detail_sosongpro2"],
    imgSize: [1000, 830],
    marginTop: [0, 90],
    link: "sosongpro",
  },
  {
    id: 7,
    name: "타날리시스",
    type: "APP",
    typeDetail:
      "Flask, ElasticSearch, Django, React, BERT, Selenium, Kafka, BeautifulSoup, Postgresql",
    description1: "엔진 및 유사한 특허 검색 엔진",
    description2: "중국 중신은행 하이퍼렛저 CDBC발행 관련 블록체인 시스템",
    description3:
      "미국 특허 유사도 판단 검색엔진 미국의 모든 특허 데이터들을 기반으로 BERT 기반 보델을 학습하여 미국 특허 검색 엔진 및 유사한 특허 검색 엔진",
    client: "타날리시스",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_tanalysis",
    img: [
      "portfolio_detail_tanalysis1",
      "portfolio_detail_tanalysis2",
      "portfolio_detail_tanalysis3",
      "portfolio_detail_tanalysis4",
      "portfolio_detail_tanalysis5",
    ],
    imgSize: [1000, 1000, 1000, 1000, 1000],
    marginTop: [0, 80, 64, 64, 40],
    link: "tanlysis",
  },
  {
    id: 8,
    name: "공공팡",
    type: "APP",
    typeDetail: "React Native, ERC-20, web3, Postgresql, kafka, Flask, Django",
    description1: "공공 와이파이 단말기 접속 보상 어플리케이션",
    description2: "전국에 배치된 공공 와이파이를 통한 접속 보상 어플리케이션",
    description3:
      "공공 와이파이 단말기 접속 보상 어플리케이션 전국에 배치된 공공 와이파이 단말기에  접속, 캡티브 포탈에서 나오는 쿠폰을 공공팡 어플리케이션에 등록후 보상을 지급받는 리액트 네이티브 어플리케이션",
    client: "공공팡",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_gonggongpang",
    img: ["portfolio_detail_gonggongpang1", "portfolio_detail_gonggongpang2"],
    imgSize: [1000, 830],
    marginTop: [0, 64],
    link: "gonggongpang",
  },
  {
    id: 9,
    name: "톡닥",
    type: "APP",
    typeDetail: "React Native, Android, Admin web, Mobile",
    description1: "설명자료 없음",
    description2: "설명자료없음",
    description3: "메디서브 어플 간단하게 한줄 소개 부탁드립니다. 내용없음.",
    client: "톡닥 TokDoc",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_tokdoc",
    img: ["portfolio_detail_tokdoc1", "portfolio_detail_tokdoc2"],
    imgSize: [1000, 830],
    marginTop: [0, 64],
    link: "tokdoc",
  },
  {
    id: 10,
    name: "SynoTex",
    type: "APP",
    typeDetail: "iOS, BigData, Android, Ai, AR",
    description1: "국내 최초 AI 마스크 측정 앱",
    description2: "인공지능융합기술 국내 최고의 마스크 제조업 AI 앱",
    description3:
      "국내 최초 AI 마스크 측정 앱 인공지능 융합기술 국내 최고의 마스크 제조업 AI 앱",
    client: "SynoTex",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_synotex",
    img: ["portfolio_detail_synotex1", "portfolio_detail_synotex2"],
    imgSize: [1000, 830],
    marginTop: [0, 80],
    link: "synotex",
  },
  {
    id: 11,
    name: "빠소",
    type: "APP",
    typeDetail: "React Native, Android, Admin Web, Mobile",
    description1: "회원과 강사의 센터조회, 상담 및 스케줄 관리 APP",
    description2: "저렴한 가격의 여러 운동센터를 알수있는 어플리케이션",
    description3: "저렴한 가격으로 여러 운동센터를 알 수 있는 APP",
    client: "빠소",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_bbaso",
    img: ["portfolio_detail_bbaso1", "portfolio_detail_bbaso2"],
    imgSize: [1000, 830],
    marginTop: [0, 80],
    link: "bbaso",
  },
  {
    id: 12,
    name: "건설모모",
    type: "APP",
    typeDetail: "React Native, Android, Web, Admin",
    description1: "무료 일자리, 장비, 노무 자동매치 플랫폼 APP",
    description2: "무료일자리, 장비, 노무 자동매치 플랫폼 어플리케이션",
    description3: "무료 일자리, 장비, 노무 자동매치 플랫폼 APP",
    client: "건설모모",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_momo",
    img: ["portfolio_detail_momo1", "portfolio_detail_momo2"],
    imgSize: [1000, 830, 1000],
    marginTop: [0, 104, 80],
    link: "momo",
  },
  {
    id: 13,
    name: "홈그라운드",
    type: "WEB",
    typeDetail: "PHP, Java, Iamport, kafka",
    description1: "야구 관련 쇼핑몰 웹",
    description2: "야구장비 판매 및 쇼핑몰 웹 관련 이벤트 일정 뉴스 알림 웹",
    description3:
      "야구 관련 쇼핑몰 웹 야구 장비 판매 쇼핑몰 웹 및 야구 관련 이벤트 일정 및 뉴스 알림 앱",
    client: "홈그라운드",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_homeground",
    img: ["portfolio_detail_homeground1", "portfolio_detail_homeground2"],
    imgSize: [1000, 1000],
    marginTop: [0, 80],
    link: "homeground",
  },
  {
    id: 14,
    name: "빠소어드민",
    type: "Admin, WEB",
    typeDetail: "React Native, Android, Admin Web, Mobile",
    description1: "빠소 어드민 관리자 웹",
    description2: "빠소 어플리케이션 관리자 웹",
    description3: "빠소 어드민 관리자 웹",
    client: "빠소어드민",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_bbaso_admin",
    img: [
      "portfolio_detail_bbaso_admin1",
      "portfolio_detail_bbaso_admin2",
      "portfolio_detail_bbaso_admin3",
      "portfolio_detail_bbaso_admin4",
    ],
    imgSize: [1000, 1000, 1000, 1000],
    marginTop: [0, 80, 80, 80],
    link: "bbaso_admin",
  },
  {
    id: 15,
    name: "펜타플랜트",
    type: "Block Chain, Admin",
    typeDetail: "React Native, Web",
    description1: "자동 트레이닝 거래소",
    description2: "자동트레이닝 거래소",
    description3: "자동트레이닝거래소",
    client: "펜타플랜트",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_pentaplant",
    img: [
      "portfolio_detail_pentaplant1",
      "portfolio_detail_pentaplant2",
      "portfolio_detail_pentaplant3",
    ],
    imgSize: [1000, 1000, 1000],
    marginTop: [0, 80, 80],
    link: "pentaplant",
  },
  {
    id: 16,
    name: "써니사이드",
    type: "APP",
    typeDetail: "React Native, Android",
    description1: "태양광 발전소 관리 및 발전량 예측 APP",
    description2: "태양광 발전소 관리 및 발전량 예측 어플리케이션",
    description3: "태양광 발전소 관리 및 발전량 예측 APP",
    client: "써니사이드",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_sunnyside",
    img: ["portfolio_detail_sunnyside1", "portfolio_detail_sunnyside2"],
    imgSize: [1000, 830],
    marginTop: [0, 80],
    link: "sunnyside",
  },
  {
    id: 17,
    name: "골든블락",
    type: "APP",
    typeDetail: "React Native, Android, Web, Admin",
    description1: "모바일 간편 부동산투자 APP",
    description2: "모바일 간편 부동산투자 어플리케이션",
    description3: "모바일 간편 부동산투자 App",
    client: "골든블락",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_goldenblock",
    img: ["portfolio_detail_goldenblock1", "portfolio_detail_goldenblock2"],
    imgSize: [1000, 830],
    marginTop: [0, 80],
    link: "goldenblock",
  },
  {
    id: 18,
    name: "KSP",
    type: "APP",
    typeDetail: "React Native, Android",
    description1: "Kona Summit Platform 서비스 APP",
    description2: "Kona Summit Platform 서비스 APP",
    description3:
      "디지털 자산 거래소 iSMS인증 FIU인증 거래소 시스템 설계 및 구축, AWS 기반 거래소 서비스 구축,  AWS 서버 프레임 워크 풀스택 개발",
    client: "KSP",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_ksp",
    img: ["portfolio_detail_ksp1", "portfolio_detail_ksp2"],
    imgSize: [1000, 830],
    marginTop: [0, 80],
    link: "ksp",
  },
  {
    id: 19,
    name: "터치콘",
    type: "APP",
    typeDetail: "React Native, Android, Admin Web, Mobile",
    description1: "디지털 자산 랜덤 리워드 터치콘 APP",
    description2: "디지털 자산 랜덤 리워드 터치콘 어플리케이션",
    description3: "디지털 자산 랜덤 리워드 터치콘 APP",
    client: "터치콘",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_touchcon",
    img: ["portfolio_detail_touchcon1", "portfolio_detail_touchcon2"],
    imgSize: [1000, 830],
    marginTop: [0, 80],
    link: "touchcon",
  },
  {
    id: 20,
    name: "앙코르챗",
    type: "APP",
    typeDetail: "postgresql, kotlin, swift, kafka, celery, Django, SendBird",
    description1: "캄보디아 전용 메신저 앱",
    description2: "캄보디아 전용 메신저 어플리케이션",
    description3:
      "캄보디아 전용 메신저 앱 대용량 트래픽 처리가 가능한 캄보디아 전용 메신저 앱으로 QR 기반 페이 기능도 도입된 메신저 앱",
    client: "앙코르챗",
    release: "2021.10",
    thumbnail: "portfolio_thumbnail_ankor",
    img: ["portfolio_detail_ankor1", "portfolio_detail_ankor2"],
    imgSize: [1000, 830],
    marginTop: [0, 80],
    link: "ankor",
  },
];
