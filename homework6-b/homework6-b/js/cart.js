const loadCartList = function () {
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

  if (cartList.length === 0) {
    // show cart-is-empty-indicating UI
    document.getElementById("if-cart-list-empty").style.display = "flex";
    document.getElementById("if-cart-list-not-empty").style.display = "none";
    return;
  }

  var cartListBox = document.getElementById("cart-list-box");
  // remove all previous children of cart list to re-draw
  cartListBox.innerHTML = "";

  var totalPrice = 0;

  // iterate the cart list and create cart element
  for (let i = 0; i < cartList.length; i++) {
    const cartData = cartList[i];

    totalPrice += cartData.price * cartData.quantity;

    const elem = document.createElement("div");
    elem.className = "row cart-item-box";

    const img = document.createElement("img");
    img.src = cartData.src;
    img.width = 121;
    img.height = 159;
    elem.appendChild(img);

    const rightBox = document.createElement("div");
    rightBox.className = "column cart-item-right-box";
    elem.appendChild(rightBox);

    const topTextBox = document.createElement("div");
    topTextBox.className = "row justify-space-between";
    topTextBox.style.marginBottom = "8px";
    rightBox.appendChild(topTextBox);

    const productName = document.createElement("span");
    productName.className = "cart-product-name";
    productName.innerText = cartData.name;
    topTextBox.appendChild(productName);

    const priceText = document.createElement("span");
    priceText.className = "cart-product-name";
    priceText.innerText = "$" + cartData.price * cartData.quantity;
    topTextBox.appendChild(priceText);

    const fillerText = document.createElement("div");
    fillerText.className = "cart-item-desc-text";
    fillerText.innerText = cartData.filler;
    rightBox.appendChild(fillerText);

    const colorTextBox = document.createElement("div");
    colorTextBox.className = "row align-center";
    colorTextBox.style.marginBottom = "6px";
    rightBox.appendChild(colorTextBox);

    const colorText = document.createElement("span");
    colorText.className = "cart-item-desc-text";
    colorText.innerText = cartData.color;
    colorTextBox.appendChild(colorText);

    const colorIndicator = document.createElement("div");
    colorIndicator.className = "cart-item-color-indicator";
    colorIndicator.style.background = cartData.colorValue;
    colorTextBox.appendChild(colorIndicator);

    const bottomBox = document.createElement("div");
    bottomBox.className = "row justify-space-between cart-item-bottom-box";
    rightBox.appendChild(bottomBox);

    const quantityInputBox = document.createElement("div");
    quantityInputBox.className = "quantity-input-box";
    bottomBox.appendChild(quantityInputBox);

    const minusButton = document.createElement("button");
    minusButton.className = "quantity-input-left-button";
    minusButton.onclick = function () {
      if (cartData.quantity < 2) return;
      cartList[i].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cartList));
      loadCartList();
    };
    quantityInputBox.appendChild(minusButton);

    const minusIcon = document.createElement("img");
    minusIcon.src = "icons/ico-minus.png";
    minusButton.appendChild(minusIcon);

    const quantityText = document.createElement("div");
    quantityText.className = "quantity-input-text";
    quantityText.innerText = cartData.quantity;
    quantityInputBox.appendChild(quantityText);

    const plusButton = document.createElement("button");
    plusButton.className = "quantity-input-right-button";
    plusButton.onclick = function () {
      cartList[i].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cartList));
      loadCartList();
    };
    quantityInputBox.appendChild(plusButton);

    const plusIcon = document.createElement("img");
    plusIcon.src = "icons/ico-plus.png";
    plusButton.appendChild(plusIcon);

    const actionsBox = document.createElement("div");
    actionsBox.className = "row";
    bottomBox.appendChild(actionsBox);

    const removeButton = document.createElement("button");
    removeButton.className = "cart-item-action-button";
    removeButton.innerText = "Remove";
    removeButton.style.marginRight = "12px";
    removeButton.onclick = function () {
      // discard i'th element from the cart list
      const newCartList = [
        ...cartList.slice(0, i),
        ...cartList.slice(i + 1, cartList.length),
      ];
      localStorage.setItem("cart", JSON.stringify(newCartList));
      loadCartList();
    };
    actionsBox.appendChild(removeButton);

    const wishListButton = document.createElement("button");
    wishListButton.className = "cart-item-action-button";
    wishListButton.innerText = "Move to Wishlist";
    actionsBox.appendChild(wishListButton);

    cartListBox.appendChild(elem);
  }

  document.getElementById("cart-total-price").innerText = "$" + totalPrice;
};

function clickEmptyText() {
  window.location = "index.html";
}

window.onload = loadCartList;

function clickWishlist() {
  window.location = "wishlist.html";
}
