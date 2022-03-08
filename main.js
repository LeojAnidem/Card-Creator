import {_, element, deleteChild} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library/domFunctions.js'; 

const addBtn = _('#addProduct');

// Crear objeto card!

class card {
    constructor (color, title, productDetail, options, price){
        this.color = color;
        this.title = title;
        this.productDetail = productDetail;
        this.options = options;
        this.price = price;
    }

    dibujar() {
        //Fondo
        element('body', 'div', 'card');
            element('.card', 'div', 'imgBx');
                element('.imgBx', 'img')

            element('.card', 'div', 'details');
    }
}


addBtn.addEventListener('click', () => {
    addBtn.textContent = 'hola';

    // Aqui dentro debera ir todo el codigo de admin!

});

