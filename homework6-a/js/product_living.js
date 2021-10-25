function clickBedroom() {
  window.location = "product_bedroom.html";
}
function clickCart() {
  window.location = "cart.html";
}
window.onload = function () {
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
