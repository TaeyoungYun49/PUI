function clickCart() {
  window.location = "cart.html";
}

function clickWishlist() {
  window.location = "wishlist.html";
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

const loadWishList = function () {
  // get wishlist list data from localStorage
  var value = localStorage.getItem("wishlist");
  var wishlistList = [];
  if (value) {
    wishlistList = JSON.parse(value);
  }
  var wishlistCount = wishlistList.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );

  if (wishlistCount > 0) {
    var badge = document.getElementById("wishlist-badge");
    badge.innerText = wishlistCount;
    badge.style.display = "flex";
  }

  if (wishlistList.length === 0) {
    // show wishlist-is-empty-indicating UI
    document.getElementById("if-wishlist-list-empty").style.display = "flex";
    document.getElementById("if-wishlist-list-not-empty").style.display =
      "none";
    return;
  }

  var wishlistListBox = document.getElementById("wishlist-list-box");
  // remove all previous children of wishlist list to re-draw
  wishlistListBox.innerHTML = "";

  // iterate the wishlist list and create wishlist element
  for (let i = 0; i < wishlistList.length; i++) {
    const wishlistData = wishlistList[i];

    const elem = document.createElement("div");
    elem.className = "row wishlist-item-box";

    const img = document.createElement("img");
    img.src = wishlistData.src;
    img.width = 121;
    img.height = 159;
    elem.appendChild(img);

    const rightBox = document.createElement("div");
    rightBox.className = "column wishlist-item-right-box";
    elem.appendChild(rightBox);

    const topTextBox = document.createElement("div");
    topTextBox.className = "row justify-space-between";
    topTextBox.style.marginBottom = "8px";
    rightBox.appendChild(topTextBox);

    const productName = document.createElement("span");
    productName.className = "wishlist-product-name";
    productName.innerText = wishlistData.name;
    topTextBox.appendChild(productName);

    const fillerText = document.createElement("div");
    fillerText.className = "wishlist-item-desc-text";
    fillerText.innerText = wishlistData.filler;
    rightBox.appendChild(fillerText);

    const colorTextBox = document.createElement("div");
    colorTextBox.className = "row align-center";
    colorTextBox.style.marginBottom = "6px";
    rightBox.appendChild(colorTextBox);

    const colorText = document.createElement("span");
    colorText.className = "wishlist-item-desc-text";
    colorText.innerText = wishlistData.color;
    colorTextBox.appendChild(colorText);

    const colorIndicator = document.createElement("div");
    colorIndicator.className = "wishlist-item-color-indicator";
    colorIndicator.style.background = wishlistData.colorValue;
    colorTextBox.appendChild(colorIndicator);

    const bottomBox = document.createElement("div");
    bottomBox.className = "row justify-space-between wishlist-item-bottom-box";
    rightBox.appendChild(bottomBox);

    const actionsBox = document.createElement("div");
    actionsBox.className = "row";
    bottomBox.appendChild(actionsBox);

    const removeButton = document.createElement("button");
    removeButton.className = "wishlist-item-action-button";
    removeButton.innerText = "Remove";
    removeButton.style.marginRight = "12px";
    removeButton.onclick = function () {
      // discard i'th element from the wishlist list
      const newwishlistList = [
        ...wishlistList.slice(0, i),
        ...wishlistList.slice(i + 1, wishlistList.length),
      ];
      localStorage.setItem("wishlist", JSON.stringify(newwishlistList));
      loadWishList();
    };
    actionsBox.appendChild(removeButton);

    const wishListButton = document.createElement("button");
    wishListButton.className = "wishlist-item-action-button";
    wishListButton.innerText = "Move to cart";
    actionsBox.appendChild(wishListButton);

    wishlistListBox.appendChild(elem);
  }
};

function clickEmptyText() {
  window.location = "index.html";
}

window.onload = function () {
  loadWishList();
  setCartBadge();
};
