let cart = document.querySelector('.cart');
let modal = document.querySelector('.modal-cart');

cart.addEventListener('click', function(){
    modal.classList.toggle('sumir')
    modal.classList.toggle('aparecer')
})

let menos = document.getElementById('menos');
let mais = document.getElementById('mais');
let input = document.getElementById('numbers-products');

menos.addEventListener('click', function(){
    let input_value = parseInt(input.value) - 1;
    input.value = input_value;
    if(input_value < 0){
        input.value = 0;
    }
});

mais.addEventListener('click', function(){
    let input_value = parseInt(input.value) + 1;
    input.value = input_value;
});
