const btn_reward_chirstmas = document.querySelector("#btn_reward");
const btn_reward_happyNewYear = document.querySelector("#btn_happyNewYear");
const btn_reward_chirstmas_newYear = document.querySelector(
  "#btn_newYearandChrismast"
);

const popup = document.querySelector(".popup");

const popup_confirm = document.querySelector("#popup_confirm");
const popyp_success = document.querySelector("#popup_success");
const popup_title = document.querySelector(".popup_title");

const btn_popup_cancel = document.querySelector("#btn_cancel_popup");
const btn_popup_reward = document.querySelector("#btn_reward_popup");

btn_reward_chirstmas.addEventListener("click", () => {
  // Xu ly dieu

  popup.classList.add("popup_active");

  popup_title.innerHTML =
    "Confirm changing the phrase 'Merry Christmas' to get $500.";
});

btn_reward_happyNewYear.addEventListener("click", () => {
  // Xu ly dieu

  popup.classList.add("popup_active");

  popup_title.innerHTML =
    "Confirm changing the phrase 'Happy New Year' to get $500.";
});

btn_reward_chirstmas_newYear.addEventListener("click", () => {
  // Xu ly dieu

  popup.classList.add("popup_active");

  popup_title.innerHTML =
    "Confirm changing the phrase 'Merry Christmas' and 'Happy New Year' to get $1000.";
});

// Cancel popup
btn_popup_cancel.addEventListener("click", () => {
  popup.classList.remove("popup_active");
});

// Reward
btn_popup_reward.addEventListener("click", () => {
  // display none
  popup_confirm.style.display = "none";

  // display block
  popyp_success.style.display = "flex";
});
