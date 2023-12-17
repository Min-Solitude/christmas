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
    displayAmountAward(finalAward);

    // call success
    AWARD_ANIMATE_ELEMENT.innerHTML = `
          <img src="/asset/gif/Snowflake.gif" alt="">
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
