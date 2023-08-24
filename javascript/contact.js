//Footer date :
document.getElementById("footer-text").textContent =
  "©" + new Date().getFullYear() + " Made by Malak Kably. All rights reserved.";

// Contact form :
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    alert("Thanks for reaching out! We'll dance back to you soon.");
    event.target.reset();
});
