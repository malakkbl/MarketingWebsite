//Footer date :
document.getElementById("footer-text").textContent =
  "©" + new Date().getFullYear() + " Made by Malak Kably. All rights reserved.";

const items = [
  // Nike items
  {
    title: "Retro Frost",
    img: "../img/nike/nike1.jpg",
    price: "200",
    category: "Nike",
  },
  {
    title: "Azure Step",
    img: "../img/nike/nike2.jpg",
    price: "300",
    category: "Nike",
  },
  {
    title: "Sable Drift",
    img: "../img/nike/nike4.jpg",
    price: "350",
    category: "Nike",
  },
  {
    title: "Winter Whisper",
    img: "../img/nike/nike5.jpg",
    price: "250",
    category: "Nike",
  },

  // Adidas items
  {
    title: "Emerald Echo",
    img: "../img/adidas/adidas1.jpg",
    price: "300",
    category: "Adidas",
  },
  {
    title: "Nautical Nights",
    img: "../img/adidas/adidas2.jpg",
    price: "250",
    category: "Adidas",
  },
  {
    title: "Yin-Yang",
    img: "../img/adidas/adidas4.jpg",
    price: "300",
    category: "Adidas",
  },
  {
    title: "Desert Dusk",
    img: "../img/adidas/adidas5.jpg",
    price: "300",
    category: "Adidas",
  },

  // Balenciaga items
  {
    title: "Rebel Camo",
    img: "../img/Balenciaga/b1.jpg",
    price: "200",
    category: "Balenciaga",
  },
  {
    title: "Greyson Glyph",
    img: "../img/Balenciaga/b2.jpg",
    price: "200",
    category: "Balenciaga",
  },
  {
    title: "Midnight Message",
    img: "../img/Balenciaga/b3.jpg",
    price: "200",
    category: "Balenciaga",
  },
  {
    title: "Noir Narrative",
    img: "../img/Balenciaga/b4.jpg",
    price: "250",
    category: "Balenciaga",
  },

  // Supreme items
  {
    title: "Starshine",
    img: "../img/Supreme/supreme1.jpg",
    price: "600",
    category: "Supreme",
  },
  {
    title: "Bubblegum Bliss",
    img: "../img/Supreme/supreme2.jpg",
    price: "550",
    category: "Supreme",
  },
  {
    title: "Denim Diaries",
    img: "../img/Supreme/supreme3.jpg",
    price: "400",
    category: "Supreme",
  },
  {
    title: "Feathered Script",
    img: "../img/Supreme/supreme4.jpg",
    price: "400",
    category: "Supreme",
  },

  // Converse items
  {
    title: "Shadow Chic",
    img: "../img/Converse/converse1.jpg",
    price: "600",
    category: "Converse",
  },
  {
    title: "Coastal Cruise",
    img: "../img/Converse/converse2.jpg",
    price: "600",
    category: "Converse",
  },
  {
    title: "Skyline",
    img: "../img/Converse/converse3.jpg",
    price: "700",
    category: "Converse",
  },
  {
    title: "Velvet Voyage",
    img: "../img/Converse/converse4.jpg",
    price: "650",
    category: "Converse",
  },
];

// Get the button and items containers from the DOM
const buttonContainer = document.querySelector(".button-container");
const itemsContainer = document.getElementById("items-container");

window.onload = function () {
  // Extract unique categories from the items array, adding an "All" category at the start
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  // Create filter buttons for each category
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "btn btn-secondary btn-lg m-2";
    button.textContent = category;
    buttonContainer.appendChild(button);

    button.addEventListener("click", function () {
      itemsContainer.innerHTML = ""; // Clear current items displayed
      let itemsToDisplay;

      // Decide which items to display based on the selected category
      if (category === "All") {
        itemsToDisplay = items;
      } else {
        itemsToDisplay = items.filter((item) => item.category === category);
      }
      displayItems(itemsToDisplay);
    });
  });

  // Display all items by default on page load
  displayItems(items);
};

// Function to display a given array of items on the page
function displayItems(itemsToDisplay) {
  itemsToDisplay.forEach((item) => {
    // Create DOM elements for each item's properties and structure
    const itemCard = document.createElement("div");
    itemCard.className = "card m-5";

    const itemImage = document.createElement("img");
    itemImage.src = item.img;
    itemImage.className = "card-img-top";
    itemImage.id = "itemImg";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-center";

    const itemTitle = document.createElement("h5");
    itemTitle.textContent = item.title;
    itemTitle.className = "card-title";

    const itemPrice = document.createElement("p");
    itemPrice.textContent = item.price + "DHS";
    itemPrice.className = "card-text text-success";

    const buyButton = document.createElement("button");
    buyButton.textContent = "Grab yours";
    buyButton.className = "btn btn-dark mt-2";

    // Append the individual elements to their respective parents
    cardBody.append(itemTitle, itemPrice, buyButton);
    itemCard.append(itemImage, cardBody);
    itemsContainer.appendChild(itemCard);
  });
}

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
  // Sign up button action :
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

  // Cancel button action :
  $(".cancelbutton").on("click", function (e) {
    $("#signupForm").hide();
    $("#loginForm").hide();
    $(".action-container").show();
  });
});

// Log in button action :
$("#loginFormContent").on("submit", function (e) {
  e.preventDefault();

  alert("Thank you for logging in!");
  $("#loginForm").hide();
});
