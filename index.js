var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {};
  var min = Math.ceil(0);
  var max = Math.floor(100);
  var price = Math.floor(Math.random() * (max - min + 1)) + min;
  obj[item] = price;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    return 'Your shopping cart is empty.';
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
