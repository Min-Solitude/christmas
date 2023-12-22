// COUNTDOWN
var chiristmasDate = new Date("Dec 25, 2023 00:00:00").getTime();

var getChristmasCountdownTime = setInterval(function () {
  var now = new Date().getTime();
  var timeLeft = chiristmasDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.querySelector("#days").innerText = days + "d";
  document.querySelector("#hours").innerText = hours + "h";
  document.querySelector("#minutes").innerText = minutes + "m";
  document.querySelector("#seconds").innerText = seconds + "s";
}, 1000);

console.log("1");
