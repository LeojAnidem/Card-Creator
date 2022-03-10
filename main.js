import {_, createElement, deleteChild} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library@fabe9c6/domFunctions.js'



const addBtn = _('#addProduct');



// Crear objeto card!

class Img {
    constructor (src, alt){
        this.src = src;
        this.alt = alt;
    }
}

class Options {
    constructor(textOptions){
        this.textOptions = textOptions; //TextOptions es un array
    }
}

class Product {
    constructor (id, img, name, category, details, options, price){
        this.id = id;
        this.img = img;
        this.name = name;
        this.category = category;
        this.details = details;
        this.options = options;
        this.price = price;
    }

    drawProduct(){

        createElement('body', 'div', `card ${this.id}`);
            createElement(`.${this.id}`, 'div', 'imgBx');
                createElement(`.${this.id} .imgBx`, 'img', this.img.src, this.img.alt);

            createElement(`.${this.id}`, 'div', 'details');
                createElement(`.${this.id} .details`, 'div', 'title');
                    createElement(`.${this.id} .details .title`, 'h1', '', this.name);
                    createElement(`.${this.id} .details .title`, 'p', '', this.category);

                createElement(`.${this.id} .details`, 'div', 'productDetails');
                    createElement(`.${this.id} .details .productDetails`, 'h5', '', 'PRODUCT DETAILS');
                    createElement(`.${this.id} .details .productDetails`, 'P', '', this.details);

                createElement(`.${this.id} .details`, 'form', 'cardOptions');
                    createElement(`.${this.id} .details .cardOptions`, 'div', 'size');
                        createElement(`.${this.id} .cardOptions .size`, 'h5', '', 'SIZE');
                        createElement(`.${this.id} .cardOptions .size`, 'div', 'selector');

                            for(let i = 0; i < this.options.textOptions.length; i++){
                                createElement(`.${this.id} .size .selector`, 'div', `selectorItem i${i+1}`);
                                    createElement(`.${this.id} .selector .i${i+1}`, 'input', 'radio', `${this.id}Item${i+1}`, 'option', true);
                                    createElement(`.${this.id} .selector .i${i+1}`, 'label', this.options.textOptions[i], `${this.id}Item${i+1}`);
                            }
                    
                    createElement(`.${this.id} .details .cardOptions`, 'div', 'addCart');
                        createElement(`.${this.id} .cardOptions .addCart`, 'div', 'price');
                            createElement(`.${this.id} .addCart .price`, 'h2', '', '$');
                            createElement(`.${this.id} .addCart .price`, 'h1', '', this.price);
                            createElement(`.${this.id} .addCart .price`, 'h3', '', '.99');
                        
                        createElement(`.${this.id} .cardOptions .addCart`, 'button', '', 'Add to cart');
    }
}

class Card {
    constructor (color, product){
        this.color = color;
        this.product = product;
    }

    dibujar() {
        //Fondo
        this.product.drawProduct();                    
    }
}

let srcImg1 = 'https://www.vans.com.co/arquivos/e-style-banner-4.png';
let details1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let textOptions1 = [36,38,40,42,44];

const options1 = new Options(textOptions1);
const img1 = new Img(srcImg1, 'Tennis-vans');

let num = 0;

addBtn.addEventListener('click', () => {
    addBtn.textContent = 'hola';

    // Aqui dentro debera ir todo el codigo de admin!

    
    let id = `card${num}`;
    const product1 = new Product(id ,img1, 'Vans MaxQ+', `Men's Shoes`, details1, options1, '159');

    const card1 = new Card('rojo', product1);
    card1.dibujar();
    createElement('body', 'div', 'space');
    num++;

});

