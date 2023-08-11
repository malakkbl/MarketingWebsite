//Footer date :
document.getElementById("footer-text").textContent =
  "©" + new Date().getFullYear() + " Made by Malak Kably. All rights reserved.";

const items = [
  // Nike items
  {
    title: "AirMax 95",
    img: "../img/nike/nike1.jpg",
    price: "100",
    category: "Nike",
  },
  {
    title: "React Element",
    img: "../img/nike/nike2.jpg",
    price: "120",
    category: "Nike",
  },
  {
    title: "Cortez Classic",
    img: "../img/nike/nike4.jpg",
    price: "90",
    category: "Nike",
  },
  {
    title: "Air Force 1",
    img: "../img/nike/nike5.jpg",
    price: "$110",
    category: "Nike",
  },

  // Adidas items
  {
    title: "Ultraboost",
    img: "../img/adidas/adidas1.jpg",
    price: "$140",
    category: "Adidas",
  },
  {
    title: "Yeezy Boost",
    img: "../img/adidas/adidas2.jpg",
    price: "$250",
    category: "Adidas",
  },
  {
    title: "Stan Smith",
    img: "../img/adidas/adidas4.jpg",
    price: "$80",
    category: "Adidas",
  },
  {
    title: "NMD R1",
    img: "../img/adidas/adidas5.jpg",
    price: "$130",
    category: "Adidas",
  },

  // Balenciaga items
  {
    title: "Triple S",
    img: "../img/Balenciaga/b1.jpg",
    price: "$795",
    category: "Balenciaga",
  },
  {
    title: "Track Trainer",
    img: "../img/Balenciaga/b2.jpg",
    price: "$895",
    category: "Balenciaga",
  },
  {
    title: "Speed Trainer",
    img: "../img/Balenciaga/b3.jpg",
    price: "$770",
    category: "Balenciaga",
  },
  {
    title: "Tyrex Sneaker",
    img: "../img/Balenciaga/b4.jpg",
    price: "$975",
    category: "Balenciaga",
  },

  // Supreme items
  {
    title: "Box Logo Tee",
    img: "../img/Supreme/supreme1.jpg",
    price: "$98",
    category: "Supreme",
  },
  {
    title: "Skateboard Deck",
    img: "../img/Supreme/supreme2.jpg",
    price: "$60",
    category: "Supreme",
  },
  {
    title: "Backpack",
    img: "../img/Supreme/supreme3.jpg",
    price: "$148",
    category: "Supreme",
  },
  {
    title: "Hoodie",
    img: "../img/Supreme/supreme4.jpg",
    price: "$158",
    category: "Supreme",
  },

  // Converse items
  {
    title: "Chuck Taylor All Star",
    img: "../img/Converse/converse1.jpg",
    price: "$55",
    category: "Converse",
  },
  {
    title: "One Star Pro",
    img: "../img/Converse/converse2.jpg",
    price: "$75",
    category: "Converse",
  },
  {
    title: "Jack Purcell Classic",
    img: "../img/Converse/converse3.jpg",
    price: "$65",
    category: "Converse",
  },
  {
    title: "Pro Leather",
    img: "../img/Converse/converse4.jpg",
    price: "$85",
    category: "Converse",
  },
];

const buttonContainer = document.querySelector(".button-container");
const itemsContainer = document.getElementById("items-container");

window.onload = function () {
  const categories = ["all", ...new Set(items.map((item) => item.category))];

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
