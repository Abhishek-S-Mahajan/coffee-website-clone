// navbar list icon
let navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItemContainer.classList.remove('active');
});

// search form
let searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', function () {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItemContainer.classList.remove('active');
});

// cart list icon
let cartItemContainer = document.querySelector('.cart-items-container');
const cartBtn = document.querySelector('#cart-btn');

cartBtn.addEventListener('click', function () {
    cartItemContainer.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItemContainer.classList.remove('active');
}