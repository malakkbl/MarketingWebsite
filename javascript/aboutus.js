//Footer date :
document.getElementById("footer-text").textContent =
  "©" + new Date().getFullYear() + " Made by Malak Kably. All rights reserved.";

  // Welcome modal :
$(document).ready(function () {
  $("#signupButton").click(function () {
    $(".action-container").hide();
    $("#signupForm").show();
  });

  $("#loginButton").click(function () {
    $(".action-container").hide();
    $("#loginForm").show();
  });
});

// Sign up and log in forms :

$(document).ready(function () {
  $("#signupbutton").on("click", function (e) {
    var form = $("#signupbutton").closest("form"); 

    if (!form[0].checkValidity()) {
      form[0].reportValidity(); 
      return;
    }

    var pwd = $('[name="psw"]').val();
    var repeatPwd = $('[name="psw-repeat"]').val();

    // Check if passwords match
    if (pwd !== repeatPwd) {
      alert("Passwords do not match!");
      return false;
    } else {
      e.preventDefault(); 
      alert("Thank you for signing up!");
      $("#signupForm").hide();
    }
  });

  $(".cancelbutton").on("click", function (e) {
    $("#signupForm").hide();
    $("#loginForm").hide();
    $(".action-container").show();
  });
});

$("#loginFormContent").on("submit", function (e) {
  e.preventDefault();

  alert("Thank you for logging in!");
  $("#loginForm").hide();
});
