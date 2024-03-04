// INICIO - login/register
let btn_cadastrar = document.querySelector('.btn-register');
let btn_login = document.querySelector('.btn-login');

let container_login = document.querySelector('.container-login');
let container_register = document.querySelector('.container-register');

btn_cadastrar.addEventListener('click', function(){
    container_register.classList.remove('sumir')
    container_login.classList.add('sumir')
});
btn_login.addEventListener('click', function(){
    container_register.classList.add('sumir')
    container_login.classList.remove('sumir')
})
// FIM - login/register

// INICIO - carrinho de compras
let cart = document.querySelector('.cart');
let modal_cart = document.querySelector('.modal-cart');

cart.addEventListener('click', function(){
    modal_cart.classList.add('aparecer')
})
// FIM - carrinho de compras