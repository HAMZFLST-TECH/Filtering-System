import { categories, products } from "./data.js";

function DisplayProducts(items) {
  const result = document.getElementById(`display`);
  result.innerHTML = "";
  items.forEach(product => {
        result.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h1 class="product-name">${product.name}</h1>
                <h1 class="product-price">$${product.price}</h1>
                <h1 class="product-category${product.category}">${product.category}</h1>
                <button class="buy-now-btn"> BUY NOW </button>
            </div>
        `;
  });
}

DisplayProducts(products);
console.log(products);

function filteritems(category) {
  let filter = products.filter((products) => products.category === category);

  DisplayProducts(filter);
}

document.getElementById(`Clothing`).addEventListener("click", () => {
  filteritems("Clothing");
});
document.getElementById(`Accessories`).addEventListener("click", () => {
  filteritems("Accessories");
});
document.getElementById(`Footwear`).addEventListener("click", () => {
  filteritems("Footwear");
});
document.getElementById(`Sports`).addEventListener("click", () => {
  filteritems("Sports");
});
document.getElementById(`AllProducts`).addEventListener("click", () => {
  DisplayProducts(products);
});
