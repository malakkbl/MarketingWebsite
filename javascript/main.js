//Footer date :
document.getElementById("footer-text").textContent =
  "©" + new Date().getFullYear() + " Made by Malak Kably. All rights reserved.";

// Hover for the homepage img :
var image = document.getElementById("home_icon");
var defaultSource = image.src;
var hoverSource = "/img/GroovingBlack.png";
image.addEventListener("mouseover", function () {
  image.src = hoverSource;
});
image.addEventListener("mouseout", function () {
  image.src = defaultSource;
});

// COUNTDOWN :
// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var timeLeft = countDownDate - now;

  // Calculate hours, minutes, and seconds
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in respective elements
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, display some text
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Sign up form :
$(document).ready(function() {
  $('#signupButton').click(function() {
      $('.action-container').hide();
      $('#signupForm').show();
  });

  $('#loginButton').click(function() {
    $('.action-container').hide();
    $('#loginForm').show();
  });

});

