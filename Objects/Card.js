import {_, createElement, getContrast} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library@fabe9c6/domFunctions.js'

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
        this.product.drawProduct();
        this.applyColor(this.product.id);
        refreshCSS();      
    }
}

export {Card};