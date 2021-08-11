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
let cartTableBody = document.createElement('tbody');
table.appendChild(cartTableBody);

function clearCart() {
    table.removeChild(cartTableBody);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let arr = [];

function showCart() {

    // TODO: Find the table body




    // TODO: Iterate over the items in the cart
    let array = JSON.parse(localStorage.cart);
    console.log(array.length);
    // TODO: Create a TR
    let rowElement = document.createElement('tr');
    removeItemFromCart(Event);
    // TODO: Create a TD for the delete link, quantity,  and the item
    let tableElement = document.createElement('td');
    for (let i = 0; i < array.length; i++) {
        tableElement.textContent = array[i].quantity;
        console.log(tableElement)

    }
    for (let i = 0; i < array.length; i++) {
        tableElement.textContent = array[i].product;
    }

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    cartTableBody.appendChild(rowElement);

}

function removeItemFromCart(event) {

    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    cart.removeItem(event);

    // TODO: Save the cart back to local storage




    // TODO: Save the cart back to local storage
    // cart.event.saveToLocalStorage();


    // TODO: Save the cart back to local storage
    // cart.event.saveToLocalStorage();

    // TODO: Re-draw the cart table



}

// This will initialize the page and draw the cart on screen
renderCart();