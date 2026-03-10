let total = 0;

function addToCart(name,price){

let cart = document.getElementById("cart");

if(cart){

let item = document.createElement("li");

item.innerText = name + " - ₹" + price;

cart.appendChild(item);

total += price;

document.getElementById("total").innerText = total;

}

}
