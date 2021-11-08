function clickCart() {
  window.location = "cart.html";
}

function clickWishlist() {
  window.location = "wishlist.html";
}

var quantity = 1;
var currentPrice = 50;
var filler = "Memory Foam";
var color = "Morning Haze";
var colorValue = "#ECBDB0";

function clickMemoryFoam() {
  document.getElementById("memoryfoam-button").className =
    "button-filler-selected";
  document.getElementById("duckdown-button").className =
    "button-filler-x-selected";
  document.getElementById("polyblend-button").className =
    "button-filler-x-selected";
  currentPrice = 50;
  filler = "Memory Foam";
  document.getElementById("price").innerText = "$" + currentPrice * quantity;

  checkIfWished();
}
function clickDuckDown() {
  document.getElementById("memoryfoam-button").className =
    "button-filler-x-selected";
  document.getElementById("duckdown-button").className =
    "button-filler-selected";
  document.getElementById("polyblend-button").className =
    "button-filler-x-selected";
  currentPrice = 32;
  filler = "Duck Down";
  document.getElementById("price").innerText = "$" + currentPrice * quantity;

  checkIfWished();
}
function clickPolyblend() {
  document.getElementById("memoryfoam-button").className =
    "button-filler-x-selected";
  document.getElementById("duckdown-button").className =
    "button-filler-x-selected";
  document.getElementById("polyblend-button").className =
    "button-filler-selected";
  currentPrice = 78;
  filler = "Hypoallergenic Poly-blend";
  document.getElementById("price").innerText = "$" + currentPrice * quantity;

  checkIfWished();
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
  document.getElementById("product-img").src =
    "images/product-detail-bed-afterSchool.png";
  color = "After School Special";
  colorValue = "#ECBDB0";
  document.getElementById("color-option-text").innerText = color;
  checkIfWished();
}
function clickColor2() {
  document.getElementById("color-1").className = "product-color-img";
  document.getElementById("color-2").className = "product-color-img-selected";
  document.getElementById("color-3").className = "product-color-img";
  document.getElementById("color-4").className = "product-color-img";
  document.getElementById("product-img").src = "images/product-detail-bed.png";
  color = "Morning Haze";
  colorValue = "#FFF9F1";
  document.getElementById("color-option-text").innerText = "Morning Haze";
  checkIfWished();
}
function clickColor3() {
  document.getElementById("color-1").className = "product-color-img";
  document.getElementById("color-2").className = "product-color-img";
  document.getElementById("color-3").className = "product-color-img-selected";
  document.getElementById("color-4").className = "product-color-img";
  document.getElementById("product-img").src =
    "images/product-detail-bed-denim.png";
  color = "Cozy Denim";
  colorValue = "#4E7CB2";
  document.getElementById("color-option-text").innerText = color;
  checkIfWished();
}
function clickColor4() {
  document.getElementById("color-1").className = "product-color-img";
  document.getElementById("color-2").className = "product-color-img";
  document.getElementById("color-3").className = "product-color-img";
  document.getElementById("color-4").className = "product-color-img-selected";
  document.getElementById("product-img").src =
    "images/product-detail-bed-rainy.png";
  color = "Rainy Day";
  colorValue = "#7F878F";
  document.getElementById("color-option-text").innerText = color;
  checkIfWished();
}

function clickAddToCart() {
  // get cart list value from local storage
  var value = localStorage.getItem("cart");
  var cartList = [];
  var name = "Bed Pillow";
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
      src: "images/product-detail-bed.png",
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

// Carousel

function slideCarouselToRight() {
  const pages = [
    document.getElementById("page0"),
    document.getElementById("page1"),
    document.getElementById("page2"),
  ];

  const leftPage = pages.find((p) => getComputedStyle(p).left === "-1000px");
  const curPage = pages.find((p) => getComputedStyle(p).left === "54px");
  const rightPage = pages.find((p) => getComputedStyle(p).left === "1000px");

  if (!leftPage || !curPage || !rightPage) {
    // do nothing while carousel is moving
    return;
  }

  leftPage.style.transition = "none";
  curPage.style.transition = "left 0.5s";
  rightPage.style.transition = "left 0.5s";

  leftPage.style.left = "1000px";
  curPage.style.left = "-1000px";
  rightPage.style.left = "54px";
}

function slideCarouselToLeft() {
  const pages = [
    document.getElementById("page0"),
    document.getElementById("page1"),
    document.getElementById("page2"),
  ];

  const leftPage = pages.find((p) => getComputedStyle(p).left === "-1000px");
  const curPage = pages.find((p) => getComputedStyle(p).left === "54px");
  const rightPage = pages.find((p) => getComputedStyle(p).left === "1000px");

  if (!leftPage || !curPage || !rightPage) {
    // do nothing while carousel is moving
    return;
  }

  leftPage.style.transition = "left 0.5s";
  curPage.style.transition = "left 0.5s";
  rightPage.style.transition = "none";

  if (leftPage) leftPage.style.left = "54px";
  curPage.style.left = "1000px";
  rightPage.style.left = "-1000px";
}

function checkIfWished() {
  var value = localStorage.getItem("wishlist");
  var wishList = [];

  if (value) {
    // parse the stringified json value to a valid list if possible
    wishList = JSON.parse(value);
  }

  const alreadyExist = wishList.some((item) => {
    return (
      item.name === "Bed Pillow" &&
      item.filler === filler &&
      item.color === color
    );
  });

  if (alreadyExist) {
    fillHeart();
  } else {
    emptyHeart();
  }
}

window.onload = function () {
  setCartBadge();

  checkIfWished();

  setInterval(function () {
    slideCarouselToRight();
  }, 2000);
};

// add to wishlist

function clickAddToWishlist() {
  var value = localStorage.getItem("wishlist");
  var name = "Bed Pillow";
  var wishList = [];
  if (value) {
    // parse the stringified json value to a valid list if possible
    wishList = JSON.parse(value);
  }

  // ignore the same wishlist input

  const index = wishList.findIndex((item) => {
    return item.name === name && item.filler === filler && item.color === color;
  });
  if (index > -1) {
    wishList.splice(index, 1);

    emptyHeart();
  } else {
    var newItem = {
      name,
      filler,
      color,
      colorValue,
      src: "images/product-detail-bed.png",
    };
    wishList.push(newItem);

    fillHeart();
  }

  localStorage.setItem("wishlist", JSON.stringify(wishList));
}

function fillHeart() {
  const elem = document.getElementById("heart");
  elem.classList.remove("deactive");
  if (elem.classList.contains("active")) {
    console.log("contain active");
    return;
  }
  elem.classList.add("active");

  document.getElementById("add-to-wish-text").innerText =
    "Remove from Wishlist";
}

function emptyHeart() {
  const elem = document.getElementById("heart");
  elem.classList.remove("active");
  if (elem.classList.contains("deactivate")) {
    return;
  }
  elem.classList.add("deactive");

  document.getElementById("add-to-wish-text").innerText = "Add to Wishlist";
}
