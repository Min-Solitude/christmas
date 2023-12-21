const bag = document.querySelector(".my-bag");
const closeBag = document.querySelector("#close-bag");
const modal_bag = document.querySelector(".modal_my_bag");

bag.addEventListener("click", () => {
  modal_bag.classList.toggle("show_modal_bag");
});

closeBag.addEventListener("click", () => {
  modal_bag.classList.toggle("show_modal_bag");
});
