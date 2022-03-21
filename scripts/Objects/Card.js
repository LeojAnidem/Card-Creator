import {_, createElement, refreshCSS, getContrast} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library/domFunctions.js'

class Card {
    constructor (color, product){
        this.color = color;
        this.product = product;
    }

    applyColor(id){
        let colorLetter = getContrast(this.color),
            style = document.createElement('style');

        let css = `                          
                    .${id} .card{
                        background: ${colorLetter};
                    }
                    
                    .${id} .imgBx{
                        background: ${colorLetter};
                    }

                    .${id} .details{
                        background: ${this.color};
                        color: ${colorLetter};
                    }

                    .${id} .details::before{
                        border-left: 10px solid ${colorLetter};
                    }

                    .${id} .selectorItem{
                        border: 1px solid ${colorLetter};
                    }

                    .${id} .selectorItem:hover{
                        color: ${this.color};
                        background: ${colorLetter};
                    }

                    .${id} .selectorItem input:checked + label{
                        color: ${this.color};
                        background: ${colorLetter};
                    }

                    .${id} .addCart button{
                        color: ${this.color};
                        background: ${colorLetter};
                    }

                    .${id} .addCart button:hover{
                        background: ${this.color};
                        color: ${colorLetter};
                        border: 2px solid ${colorLetter};
                    }
                    
                `;

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