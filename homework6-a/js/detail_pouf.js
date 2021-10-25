var quantity = 1;
var currentPrice = 140;
var filler = "Memory Foam";
var color = "After School Special";
var colorValue = "#ECBDB0";

function clickMemoryFoam() {
  document.getElementById("memoryfoam-button").className =
    "button-filler-selected";
  document.getElementById("duckdown-button").className =
    "button-filler-x-selected";
  document.getElementById("polyblend-button").className =
    "button-filler-x-selected";
  currentPrice = 140;
  filler = "Memory Foam";
  document.getElementById("price").innerText = "$" + currentPrice * quantity;
}
function clickDuckDown() {
  document.getElementById("memoryfoam-button").className =
    "button-filler-x-selected";
  document.getElementById("duckdown-button").className =
    "button-filler-selected";
  document.getElementById("polyblend-button").className =
    "button-filler-x-selected";
  currentPrice = 142;
  filler = "Duck Down";
  document.getElementById("price").innerText = "$" + currentPrice * quantity;
}
function clickPolyblend() {
  document.getElementById("memoryfoam-button").className =
    "button-filler-x-selected";
  document.getElementById("duckdown-button").className =
    "button-filler-x-selected";
  document.getElementById("polyblend-button").className =
    "button-filler-selected";
  currentPrice = 148;
  filler = "Hypoallergenic Poly-blend";
  document.getElementById("price").innerText = "$" + currentPrice * quantity;
}
function clickMinus() {
  if (quantity < 2) return;
  quantity = quantity - 1;
  document.getElementById("quantity-text").innerText = quantity;
  document.getElementById("price").innerText = "$" + currentPrice * quantity;
}
function clickPlus() {
  quantity = quantity + 1;
  document.getElementById("quantity-text").innerText = quantity;
  document.getElementById("price").innerText = "$" + currentPrice * quantity;
}
function clickColor1() {
  document.getElementById("color-1").className = "product-color-img-selected";
  document.getElementById("color-2").className = "product-color-img";
  document.getElementById("color-3").className = "product-color-img";
  document.getElementById("color-4").className = "product-color-img";
  color = "After School Special";
  colorValue = "#ECBDB0";
  document.getElementById("color-option-text").innerText = color;
}
function clickColor2() {
  document.getElementById("color-1").className = "product-color-img";
  document.getElementById("color-2").className = "product-color-img-selected";
  document.getElementById("color-3").className = "product-color-img";
  document.getElementById("color-4").className = "product-color-img";
  color = "Morning Haze";
  colorValue = "#FFF9F1";
  document.getElementById("color-option-text").innerText = "Morning Haze";
}
function clickColor3() {
  document.getElementById("color-1").className = "product-color-img";
  document.getElementById("color-2").className = "product-color-img";
  document.getElementById("color-3").className = "product-color-img-selected";
  document.getElementById("color-4").className = "product-color-img";
  color = "Cozy Denim";
  colorValue = "#4E7CB2";
  document.getElementById("color-option-text").innerText = color;
}
function clickColor4() {
  document.getElementById("color-1").className = "product-color-img";
  document.getElementById("color-2").className = "product-color-img";
  document.getElementById("color-3").className = "product-color-img";
  document.getElementById("color-4").className = "product-color-img-selected";
  color = "Rainy Day";
  colorValue = "#7F878F";
  document.getElementById("color-option-text").innerText = color;
}
function clickCart() {
  window.location = "cart.html";
}
function clickAddToCart() {
  // get cart list value from local storage
  var value = localStorage.getItem("cart");
  var cartList = [];
  var name = "Pouf Pillow";
  if (value) {
    // parse the stringified json value to a valid list if possible
    cartList = JSON.parse(value);
  }
  // find the same product
  const index = cartList.findIndex((item) => {
    return item.name === name && item.filler === filler && item.color === color;
  });
  // if the same product found in the cart, just increase its quantity
  if (index >= 0) {
    cartList[index].quantity += quantity;
  } else {
    // if the product is not found in the cart, add it as a new one
    var newItem = {
      name: name,
      filler: filler,
      quantity: quantity,
      price: currentPrice,
      color: color,
      colorValue: colorValue,
      src: "img/product-detail-pouf.png",
    };
    cartList.push(newItem);
  }

  // set the cart list data to localStorage
  localStorage.setItem("cart", JSON.stringify(cartList));

  // show indicator text
  var addedCount = document.getElementById("added-count");
  addedCount.innerText = String(quantity) + " items added to your cart!";
  addedCount.style.visibility = "visible";

  setCartBadge();
}
var setCartBadge = function () {
  // get cart list data from localStorage
  var value = localStorage.getItem("cart");
  var cartList = [];
  if (value) {
    cartList = JSON.parse(value);
  }
  var cartCount = cartList.reduce((acc, { quantity }) => acc + quantity, 0);

  if (cartCount > 0) {
    var badge = document.getElementById("cart-badge");
    badge.innerText = cartCount;
    badge.style.display = "flex";
  }
};

window.onload = setCartBadge;
