// SLIDER
var swiper4 = new Swiper(".swiper-bag-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  // auto
  // autoplay: {
  //     delay: 500,
  //     disableOnInteraction: false,
  // },
  loop: true,
  loopedSlides: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".bag-control-left",
    prevEl: ".bag-control-right",
  },
  speed: 1000,
  breakpoints: {
    // when window width is >= 480px
    120: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    // when window width is >= 640px
    740: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1023: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

const dataReward = [
  {
    text: "A",
    url: "/asset/img/qua/A.png",
  },
  {
    url: "/asset/img/qua/C.png",
    text: "C",
  },
  {
    url: "/asset/img/qua/E.png",
    text: "E",
  },
  {
    url: "/asset/img/qua/H.png",
    text: "H",
  },
  {
    url: "/asset/img/qua/I.png",
    text: "I",
  },
  {
    url: "/asset/img/qua/M.png",
    text: "M",
  },
  {
    url: "/asset/img/qua/N.png",
    text: "N",
  },
  {
    url: "/asset/img/qua/P.png",
    text: "P",
  },
  {
    url: "/asset/img/qua/R.png",
    text: "R",
  },
  {
    url: "/asset/img/qua/S.png",
    text: "S",
  },
  {
    url: "/asset/img/qua/T.png",
    text: "T",
  },
  {
    url: "/asset/img/qua/W.png",
    text: "W",
  },
  {
    url: "/asset/img/qua/Y.png",
    text: "Y",
  },
];

// OPENING
const SCREEN = document.querySelector("#pick-ball");
const AWARD_ANIMATE_ELEMENT = document.querySelector("#award-animate");

const displayAmountAward = (amount) => {
  document.querySelector("#award-value").innerText = amount;
};

const handleOpening = () => {
  SCREEN.classList.add("opening");

  // call api to get award amount token here
  setTimeout(() => {
    // random award to replace call api
    const finalAward = Math.floor(Math.random() * 1000);
    // displayAmountAward(finalAward);

    // call success
    AWARD_ANIMATE_ELEMENT.innerHTML = `
          <p class='size_text_award'>
            Congratulation! You've received the letter "${
              dataReward[finalAward % 13].text
            }"
          </p>
          <img class='qua_awrad' style={{width: 2rem}} src="${
            dataReward[finalAward % 13].url
          }" alt="award" />
      `;
    SCREEN.classList.add("opened");
  }, 1000);
};

const handleClose = () => {
  SCREEN.classList.remove("opening");
  SCREEN.classList.remove("opened");

  // clear open award animate
  AWARD_ANIMATE_ELEMENT.innerHTML = ``;
};
