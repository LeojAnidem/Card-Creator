import {_, createElement} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library/domFunctions.js'

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
        
        if(_('.encapsulado').style.display != 'block'){
            _('.encapsulado').style.display = 'block';
        }
        
    }
}

export {Product};