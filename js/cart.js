/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let arr = [];

function showCart() {

    // TODO: Find the table body
    // let bodyElement = document.createElement('tbody');

    // TODO: Iterate over the items in the cart
    // for (let i = 0; i < Product.allProducts.length; i++) {
    //     arr = Product.allProducts[i];
    // }
    // TODO: Create a TR
    // let rowElement = document.createElement('tr');

    // TODO: Create a TD for the delete link, quantity,  and the item
    // let tableElement = document.createElement('td');
    // for (let i = 0; i < Product.allProducts.length; i++) {
    //     tableElement.textContent = Product.allProducts[i].name;
    // }
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    // bodyElement.appendChild(rowElement);
    // rowElement.appendChild(tableElement);
}

function removeItemFromCart(event) {

    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

    // TODO: Save the cart back to local storage
    cart.event.saveToLocalStorage();
    // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();