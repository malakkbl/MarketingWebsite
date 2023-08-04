//Footer date :
document.getElementById('footer-text').textContent = '©' + new Date().getFullYear() + ' Made by Malak Kably. All rights reserved.';

// Hover for the homepage img :
var image = document.getElementById('home_icon');
var defaultSource = image.src;
var hoverSource = "/img/GroovingBlack.png";
image.addEventListener('mouseover', function() {
    image.src = hoverSource;
});
image.addEventListener('mouseout', function() {
    image.src = defaultSource;
});
