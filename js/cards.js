const cardsList = document.querySelector(".cards-grid");
const elementTemplate = document.getElementById("element-template").content;
const cardName = document.querySelector(".info__title");
const cardDescription = document.querySelector(".description1");
const documentDescription2 = document.querySelector(".description2");
const client = document.querySelector(".client");
const release = document.querySelector(".date");
const typeDetail = document.querySelector(".type");
const linkCard = document.querySelector(".image1");
const linkCard2 = document.querySelector(".image2");
const cardHref = document.querySelector(".card");
const buttonBlue = document.querySelectorAll(".button__blue");

const portfolioCards = [
  {
    id: 1,
    name: "GDAC(지닥)",
    type: "WEB",
    typeDetail: "Web, Mobile",
    description1: "디지털 자산 거래소",
    link: "../img/portfolio/gdac.png",
    href: "./portfolio/gdac.html",
  },
  {
    id: 2,
    name: "CITIC",
    type: "BlockChain, Admin",
    typeDetail: "BlockChain, Web, Mobile",
    description1: "중국중신그룹유한회사",
    link: "../img/portfolio/citic.png",
    href: "./portfolio/citic.html",
  },
  {
    id: 3,
    name: "시그널",
    type: "APP",
    typeDetail: "Web, Mobile, PHP, Java, IAMPORT, Kafka",
    description1: "설명자료 없음",
    link: "../img/portfolio/signal.png",
    href: "./portfolio/signal.html",
  },
  {
    id: 4,
    name: "헬로우톡",
    type: "APP",
    typeDetail: "Web, Mobile, PHP, Java, IAMPORT, Kafka",
    description1: "설명자료 없음",
    link: "../img/portfolio/hellotalk.png",
    href: "./portfolio/hellotalk.html",
  },
  {
    id: 5,
    name: "위쿱",
    type: "WEB",
    typeDetail: "React, Docker, Django, Postgresql, React Native",
    description1: "전문가 매칭 플랫폼",
    link: "../img/portfolio/wecoop.png",
    href: "./portfolio/wecoop.html",
  },
  {
    id: 6,
    name: "소송프로",
    type: "APP",
    typeDetail:
      "Kotlin, Swift, Postgresql, BeautifulSoup, Kafka, Selenium, Nodejs",
    description1: "변호사 전용 사건 관리앱",
    link: "../img/portfolio/sosongpro.png",
    href: "./portfolio/sosongpro.html",
  },
  {
    id: 7,
    name: "타날리시스",
    type: "APP",
    typeDetail:
      "Flask, ElasticSearch, Django, React, BERT, Selenium, Kafka, BeautifulSoup, Postgresql",
    description1: "엔진 및 유사한 특허 검색 엔진",
    link: "../img/portfolio/tanalysis.png",
    href: "./portfolio/tanalysis.html",
  },
  {
    id: 8,
    name: "공공팡",
    type: "APP",
    typeDetail: "React Native, ERC-20, web3, Postgresql, kafka, Flask, Django",
    description1: "공공 와이파이 단말기 접속 보상 어플리케이션",
    link: "../img/portfolio/gonggongpang.png",
    href: "./portfolio/gonggongpang.html",
  },
  {
    id: 9,
    name: "톡닥",
    type: "APP",
    typeDetail: "React Native, Android, Admin web, Mobile",
    link: "../img/portfolio/tokdac.png",
    href: "./portfolio/tokdoc.html",
  },
  {
    id: 10,
    name: "SynoTex",
    type: "APP",
    typeDetail: "iOS, BigData, Android, Ai, AR",
    description1: "국내 최초 AI 마스크 측정 앱",
    link: "../img/portfolio/synotex.png",
    href: "./portfolio/synotex.html",
  },
  {
    id: 11,
    name: "빠소",
    type: "APP",
    typeDetail: "React Native, Android, Admin Web, Mobile",
    description1: "회원과 강사의 센터조회, 상담 및 스케줄 관리 APP",
    link: "../img/portfolio/bbaso.png",
    href: "./portfolio/bbaso.html",
  },
  {
    id: 12,
    name: "건설모모",
    type: "APP",
    typeDetail: "React Native, Android, Web, Admin",
    description1: "무료 일자리, 장비, 노무 자동매치 플랫폼 APP",
    link: "../img/portfolio/momo.png",
    href: "./portfolio/consolmomo.html",
  },
  {
    id: 13,
    name: "홈그라운드",
    type: "WEB",
    typeDetail: "PHP, Java, Iamport, kafka",
    description1: "야구 관련 쇼핑몰 웹",
    link: "../img/portfolio/homeground.png",
    href: "./portfolio/homeground.html",
  },
  {
    id: 14,
    name: "빠소어드민",
    type: "Admin, WEB",
    typeDetail: "React Native, Android, Admin Web, Mobile",
    description1: "빠소 어드민 관리자 웹",
    link: "../img/portfolio/bbaso_admin.png",
    href: "./portfolio/bbasoadmin.html",
  },
  {
    id: 15,
    name: "펜타플랜트",
    type: "BlockChain, Admin",
    typeDetail: "React Native, Web",
    description1: "자동 트레이닝 거래소",
    link: "../img/portfolio/pentaplant.png",
    href: "./portfolio/pentaplant.html",
  },
  {
    id: 16,
    name: "써니사이드",
    type: "APP",
    typeDetail: "React Native, Android",
    description1: "태양광 발전소 관리 및 발전량 예측 APP",
    link: "../img/portfolio/sunnyside.png",
    href: "./portfolio/sunnyside.html",
  },
  {
    id: 17,
    name: "골든블락",
    type: "APP",
    typeDetail: "React Native, Android, Web, Admin",
    description1: "모바일 간편 부동산투자 APP",
    link: "../img/portfolio/goldenblock.png",
    href: "./portfolio/goldblock.html",
  },
  {
    id: 18,
    name: "KSP",
    type: "APP",
    typeDetail: "React Native, Android",
    description1: "Kona Summit Platform 서비스 APP",
    link: "../img/portfolio/ksp.png",
    href: "./portfolio/ksp.html",
  },
  {
    id: 19,
    name: "터치콘",
    type: "APP",
    typeDetail: "React Native, Android, Admin Web, Mobile",
    description1: "디지털 자산 랜덤 리워드 터치콘 APP",
    link: "../img/portfolio/touchcon.png",
    href: "./portfolio/touchkon.html",
  },
  {
    id: 20,
    name: "앙코르챗",
    type: "APP",
    typeDetail: "postgresql, kotlin, swift, kafka, celery, Django, SendBird",
    description1: "캄보디아 전용 메신저 앱",
    link: "../img/portfolio/ankor.png",
    href: "../portfolio_detail/angkor.html",
  },
];

//All//
const all = portfolioCards;
const allButton = document.querySelector(".all");
//BlockChain//

const blockChain = portfolioCards.filter((item) =>
  item.type.includes("BlockChain")
);
const blockChainButton = document.querySelector(".blockchain");

//App//

const app = portfolioCards.filter((item) => item.type.includes("APP"));
const appButton = document.querySelector(".app");

//web//

const web = portfolioCards.filter((item) => item.type.includes("WEB"));
const webButton = document.querySelector(".web");

//mobile//

const mobile = portfolioCards.filter((item) =>
  item.typeDetail.includes("Mobile")
);
const mobileButton = document.querySelector(".mobile");

//Admin//

const admin = portfolioCards.filter((item) =>
  item.typeDetail.includes("Admin")
);
const adminButton = document.querySelector(".admin");

//AI//

const ai = portfolioCards.filter((item) => item.typeDetail.includes("Ai"));
const aiButton = document.querySelector(".ai");

//bigData//

const bigData = portfolioCards.filter((item) =>
  item.typeDetail.includes("BigData")
);
const bigDataButton = document.querySelector(".bigdata");

//button-back//
for (var i = 0; i < buttonBlue.length; i++) {
  buttonBlue[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
// render //

function render(cards) {
  cardsList.replaceChildren(...cards.map((item) => createCard(item)));
}

// create//

const createCard = ({ link, name, description1 }) => {
  const placeElement = elementTemplate
    .querySelector(".element")
    .cloneNode(true);

  placeElement.querySelector(".card__title").textContent = name;
  placeElement.querySelector(".card__image").src = link;
  placeElement.querySelector(".card__description").textContent = description1;

  placeElement.src = link;
  placeElement.alt = link;

  const cardImage = placeElement.querySelector(".card__image");
  cardImage.addEventListener("click", () => {
    if (name === "GDAC(지닥)") {
      cardHref = document.location = "./portfolio_detail/gdac.html";
    }
    if (name === "CITIC") {
      cardHref = document.location = "./portfolio_detail/citic.html";
    }
    if (name === "시그널") {
      cardHref = document.location = "./portfolio_detail/signal.html";
    }
    if (name === "헬로우톡") {
      cardHref = document.location = "./portfolio_detail/hellotalk.html";
    }
    if (name === "위쿱") {
      cardHref = document.location = "./portfolio_detail/wecoop.html";
    }
    if (name === "소송프로") {
      cardHref = document.location = "./portfolio_detail/sosongpro.html";
    }
    if (name === "타날리시스") {
      cardHref = document.location = "./portfolio_detail/tanalysis.html";
    }
    if (name === "공공팡") {
      cardHref = document.location = "./portfolio_detail/gonggongpang.html";
    }
    if (name === "톡닥") {
      cardHref = document.location = "./portfolio_detail/tokdoc.html";
    }
    if (name === "SynoTex") {
      cardHref = document.location = "./portfolio_detail/synotex.html";
    }
    if (name === "빠소") {
      cardHref = document.location = "./portfolio_detail/bbaso.html";
    }
    if (name === "건설모모") {
      cardHref = document.location = "./portfolio_detail/momo.html";
    }
    if (name === "홈그라운드") {
      cardHref = document.location = "./portfolio_detail/homeground.html";
    }
    if (name === "빠소어드민") {
      cardHref = document.location = "./portfolio_detail/bbaso_admin.html";
    }
    if (name === "펜타플랜트") {
      cardHref = document.location = "./portfolio_detail/pentaplant.html";
    }
    if (name === "써니사이드") {
      cardHref = document.location = "./portfolio_detail/sunnyside.html";
    }
    if (name === "골든블락") {
      cardHref = document.location = "./portfolio_detail/goldenblock.html";
    }
    if (name === "KSP") {
      cardHref = document.location = "./portfolio_detail/ksp.html";
    }
    if (name === "터치콘") {
      cardHref = document.location = "./portfolio_detail/touchcon.html";
    }
    if (name === "앙코르챗") {
      cardHref = document.location = "./portfolio_detail/ankor.html";
    }
  });
  return placeElement;
};
render(portfolioCards);

allButton.addEventListener("click", () => render(all));
blockChainButton.addEventListener("click", () => render(blockChain));
appButton.addEventListener("click", () => render(app));
webButton.addEventListener("click", () => render(web));
mobileButton.addEventListener("click", () => render(mobile));
adminButton.addEventListener("click", () => render(admin));
aiButton.addEventListener("click", () => render(ai));
bigDataButton.addEventListener("click", () => render(bigData));
