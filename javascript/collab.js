//Footer date :
document.getElementById("footer-text").textContent =
  "©" + new Date().getFullYear() + " Made by Malak Kably. All rights reserved.";

const items = [
  // Nike items
  {
    title: "AirMax 95",
    img: "Image URL Nike 1",
    price: "$100",
    category: "Nike",
  },
  {
    title: "React Element",
    img: "Image URL Nike 2",
    price: "$120",
    category: "Nike",
  },
  {
    title: "Cortez Classic",
    img: "Image URL Nike 3",
    price: "$90",
    category: "Nike",
  },
  {
    title: "Air Force 1",
    img: "Image URL Nike 4",
    price: "$110",
    category: "Nike",
  },

  // Adidas items
  {
    title: "Ultraboost",
    img: "Image URL Adidas 1",
    price: "$140",
    category: "Adidas",
  },
  {
    title: "Yeezy Boost",
    img: "Image URL Adidas 2",
    price: "$250",
    category: "Adidas",
  },
  {
    title: "Stan Smith",
    img: "Image URL Adidas 3",
    price: "$80",
    category: "Adidas",
  },
  {
    title: "NMD R1",
    img: "Image URL Adidas 4",
    price: "$130",
    category: "Adidas",
  },

  // Balenciaga items
  {
    title: "Triple S",
    img: "Image URL Balenciaga 1",
    price: "$795",
    category: "Balenciaga",
  },
  {
    title: "Track Trainer",
    img: "Image URL Balenciaga 2",
    price: "$895",
    category: "Balenciaga",
  },
  {
    title: "Speed Trainer",
    img: "Image URL Balenciaga 3",
    price: "$770",
    category: "Balenciaga",
  },
  {
    title: "Tyrex Sneaker",
    img: "Image URL Balenciaga 4",
    price: "$975",
    category: "Balenciaga",
  },

  // Supreme items
  {
    title: "Box Logo Tee",
    img: "Image URL Supreme 1",
    price: "$98",
    category: "Supreme",
  },
  {
    title: "Skateboard Deck",
    img: "Image URL Supreme 2",
    price: "$60",
    category: "Supreme",
  },
  {
    title: "Backpack",
    img: "Image URL Supreme 3",
    price: "$148",
    category: "Supreme",
  },
  {
    title: "Hoodie",
    img: "Image URL Supreme 4",
    price: "$158",
    category: "Supreme",
  },

  // Converse items
  {
    title: "Chuck Taylor All Star",
    img: "Image URL Converse 1",
    price: "$55",
    category: "Converse",
  },
  {
    title: "One Star Pro",
    img: "Image URL Converse 2",
    price: "$75",
    category: "Converse",
  },
  {
    title: "Jack Purcell Classic",
    img: "Image URL Converse 3",
    price: "$65",
    category: "Converse",
  },
  {
    title: "Pro Leather",
    img: "Image URL Converse 4",
    price: "$85",
    category: "Converse",
  },
];

window.onload = function () {
  const categories = ["all", ...new Set(items.map((item) => item.category))];
  const buttonContainer = document.querySelector(".button-container");
  const itemsContainer = document.getElementById("items-container");

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "btn btn-primary m-2";
    button.textContent = category;
    buttonContainer.appendChild(button);
    button.addEventListener("click", function () {
      itemsContainer.innerHTML = "";
      let itemsToDisplay;
      if (category === "all") {
        itemsToDisplay = items;
      } else {
        itemsToDisplay = items.filter((item) => item.category === category);
      }
      displayItems(itemsToDisplay);
    });
  });

  displayItems(items);
};

function displayItems(itemsToDisplay) {
  itemsToDisplay.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = "card m-3";

    const itemImage = document.createElement("img");
    itemImage.src = item.img;
    itemImage.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const itemTitle = document.createElement("h5");
    itemTitle.textContent = item.title;
    itemTitle.className = "card-title";

    const itemPrice = document.createElement("p");
    itemPrice.textContent = item.price + "DHS";
    itemPrice.className = "card-text text-success";

    const buyButton = document.createElement("button");
    buyButton.textContent = "Grab Yours";
    buyButton.className = "btn btn-primary mt-2";

    cardBody.append(itemTitle, itemPrice, buyButton);
    itemCard.append(itemImage, cardBody);
    itemsContainer.appendChild(itemCard);
  });
}
