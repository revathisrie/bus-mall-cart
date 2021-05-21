/* global Cart */
'use strict';



// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

let tbody = document.getElementsByTagName('tbody')[0];
console.log(tbody);


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
console.log(cart.items);
  
  // TODO: Find the table body
  for (let i = 0; i < cart.items.length; i++){
    let trElem = document.createElement('tr');
    tbody.appendChild(trElem);
    
    let deleteTdElem = document.createElement('td');
    trElem.appendChild(deleteTdElem);
    let buttonElem = document.createElement('button');
   
    
    deleteTdElem.appendChild(buttonElem);
    buttonElem.textContent = 'Delete';
    
    let quantityTdElem = document.createElement('td');
    trElem.appendChild(quantityTdElem);
    quantityTdElem.textContent = cart.items[i].quantity;
    
    let nameTdElem = document.createElement('td');
    nameTdElem.textContent = cart.items[i].product;
    trElem.appendChild(nameTdElem);
    
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  console.log(event);
  let remove = event.target
  cart.removeItem(event);

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();

const button = document.getElementsByTagName('button')[3];
/* button.addEventListener('click', removeItemFromCart); */


