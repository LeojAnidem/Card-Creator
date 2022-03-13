import {_, createElement, deleteChild} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library@fabe9c6/domFunctions.js'

let refreshCSS = () => {
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'stylesheet') {
            let href = links[i].getAttribute('href')
                                    .split('?')[0];
              
            let newHref = href + '?version=' 
                        + new Date().getMilliseconds();
              
            links[i].setAttribute('href', newHref);
        }
    }
}

const addBtn = _('#addProduct');
const inputLightDark = _('#darkMode');

// Crear objeto card!

class Img {
    constructor (src, alt){
        this.src = src;
        this.alt = alt;
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
        createElement('.encapsulado .swiper-wrapper', 'div', `swiper-slide ${this.id}`);
            createElement(`.${this.id}`, 'div', `card`);
                createElement(`.${this.id} .card`, 'div', 'imgBx');
                    createElement(`.${this.id} .imgBx`, 'img', this.img.src, this.img.alt);

                createElement(`.${this.id} .card`, 'div', 'details');
                    createElement(`.${this.id} .details`, 'div', 'title');
                        createElement(`.${this.id} .title`, 'h1', '', this.name);
                        createElement(`.${this.id} .title`, 'p', '', this.category);

                    createElement(`.${this.id} .details`, 'div', 'productDetails');
                        createElement(`.${this.id} .productDetails`, 'h5', '', 'PRODUCT DETAILS');
                        createElement(`.${this.id} .productDetails`, 'P', '', this.details);

                    createElement(`.${this.id} .details`, 'form', 'cardOptions');
                        createElement(`.${this.id} .cardOptions`, 'div', 'size');
                            createElement(`.${this.id} .size`, 'h5', '', 'SIZE');
                            createElement(`.${this.id} .size`, 'div', 'selector');

                                for(let i = 0; i < this.options.length; i++){
                                    createElement(`.${this.id} .selector`, 'div', `selectorItem i${i+1}`);
                                        createElement(`.${this.id} .i${i+1}`, 'input', 'radio', `${this.id}Item${i+1}`, 'option', true);
                                        createElement(`.${this.id} .i${i+1}`, 'label', this.options[i], `${this.id}Item${i+1}`);
                                }
                        
                        createElement(`.${this.id} .cardOptions`, 'div', 'addCart');
                            createElement(`.${this.id} .addCart`, 'div', 'price');
                                createElement(`.${this.id} .price`, 'h2', '', '$');
                                createElement(`.${this.id} .price`, 'h1', '', this.price);
                                createElement(`.${this.id} .price`, 'h3', '', '.99');
                            
                            createElement(`.${this.id} .addCart`, 'button', '', 'Add to cart');
    }
}

class Card {
    constructor (color, product){
        this.color = color;
        this.product = product;
    }

    applyColor(id){

        let css = `   
                    .${id} .details{
                        background: ${this.color};
                    }

                    .${id} .selectorItem:hover{
                        color: ${this.color} ;
                    }

                    .${id} .selectorItem input:checked + label{
                        color: ${this.color};
                    }

                    .${id} .addCart button{
                        color: ${this.color};
                    }

                    .${id} .addCart button:hover{
                        background: ${this.color};
                        color: #ffffff;
                    }
                    
                `;

        let style = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    dibujar() {
        //Fondo
        this.product.drawProduct();
                          
    }
}

let srcImg1 = 'https://www.vans.com.co/arquivos/e-style-banner-4.png';
let details1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let options1 = [36,38,40,42,44];

const img1 = new Img(srcImg1, 'Tennis-vans');

let num = 0;
let id;

addBtn.addEventListener('click', () => {

    // Aqui dentro debera ir todo el codigo de admin!

    id = `card${num}`;
    const product1 = new Product(id ,img1, 'Vans MaxQ+', `Men's Shoes`, details1, options1, '159');

    const card1 = new Card('#016fff', product1);
    card1.dibujar();
    card1.applyColor(id);

    refreshCSS();

    num++;
});

inputLightDark.addEventListener('change', function(){

    if(this.checked){
        document.body.style.background = '#272727';
        _('.footer').style.color = '#ebebeb';
        _('.card').style['boxShadow'] = '0 7px 20px rgba(0, 0, 0, 0.377);';
    }

    else{
        document.body.style.background = '#ebebeb';
        _('.footer').style.color = '#272727';
        _('.card').style['boxShadow'] = '0 5px 15px rgba(0,0,0,0.1)';
    }

});

