//Footer date :
document.getElementById('footer-text').textContent = '©' + new Date().getFullYear() + ' Made by Malak Kably. All rights reserved.';

const items = [
    {
      title: "BARAKA",
      img: "Some Item",
      price: "$100",
      category:"Nike",
    },
    {
        title: "BARAKA",
        img: "Some Item",
        price: "$100",
        category:"Nike",
      },
      {
        title: "BARAKA",
        img: "Some Item",
        price: "$100",
        category:"Nike",
      },
      {
        title: "BARAKA",
        img: "Some Item",
        price: "$100",
        category:"Nike",
      },
      {
        title: "BARAKA",
        img: "Some Item",
        price: "$100",
        category:"Nike",
      },
      {
        title: "BARAKA",
        img: "Some Item",
        price: "$100",
        category:"Adidas",
      },
      {
        title: "BARAKA",
        img: "Some Item",
        price: "$100",
        category:"Adidas",
      },
      {
        title: "BARAKA",
        img: "Some Item",
        price: "$100",
        category:"Adidas",
      },
      {
        title: "BARAKA",
        img: "Some Item",
        price: "$100",
        category:"Adidas",
      },
  ];

  
window.onload = function () {
    const categories = ["all", ...new Set(items.map((item) => item.category))];
    const buttonContainer = document.querySelector(".button-container");
    const itemsContainer = document.getElementById("items-container");

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600";
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
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
        itemCard.className = "bg-white p-4 shadow-lg rounded";

        const itemImage = document.createElement("img");
        itemImage.src = item.img;
        itemImage.className = "w-full h-48 object-cover mb-4 rounded";

        const itemTitle = document.createElement("h6");
        itemTitle.textContent = item.title;
        itemTitle.className = "font-bold text-xl mb-2";

        const itemPrice = document.createElement("p");
        itemPrice.textContent = "$" + item.price;
        itemPrice.className = "text-lg font-bold text-green-500";

        itemCard.append(itemImage, itemTitle, itemPrice);
        itemsContainer.appendChild(itemCard);
    });
}
