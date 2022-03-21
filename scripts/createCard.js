// DomElement Library
import {_} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library/domFunctions.js'

// Object
import {Img} from './Objects/Img.js';
import {Product} from './Objects/Product.js';
import {Card} from './Objects/Card.js';

let firstclick = false;

//Funcion creadora
const createCard = function(){
    // Declaracion de variables
    const addCard = _('.createCard');

    let num = 0,
        id = '',
        cards = [];
    
    // Detectar evento click
    addCard.addEventListener('click', (e) => {
        // Prevenimos una recarga de la pagina
        e.preventDefault();
        
        // Creamos Variables y recogemos valor
        id = `card${num}`;
        
        let src = _('#imgPreview').src,
            productName = _('.nameProduct').value,
            alt = `${productName}`,
            color = _('#colorSelector').value,
            category = _('.categoryProduct').value,
            detail = _('.detailProduct').value,
            optionSelect = document.querySelectorAll('.creatorCard .item'),
            options = [],
            price = _('.priceProduct').value;

        // Validamos los casos en los que no se ingrese ningun valor
        (src === '') ? src = 'https://www.vans.com.co/arquivos/e-style-banner-4.png' : null;
        (productName === '') ? productName = _('.nameProduct').placeholder : null;
        (alt === '') ? alt = 'Vans MaxQ+' : null;
        (category === '') ? category = _('.categoryProduct').placeholder : null;
        (detail === '') ? detail = _('.detailProduct').placeholder : null;
        (price === '') ? price = _('.priceProduct').placeholder : null;

        // Obtenemos el valor de las opciones de size
        let childValue = '',
            iterator = 0;

        optionSelect.forEach(e => {
            if (iterator === 0 && firstclick != true){
                childValue = e.childNodes[1].value;
            }
            else{childValue = e.lastChild.value;}

            if(childValue === ''){childValue = _('.creatorCard .item input').placeholder;}

            options.push(childValue);

            iterator++;
        });

        // Creamos objetos
        let img = new Img(src, alt),
            product = new Product(id, img, productName, category, detail, options, price),
            card = new Card(color, product);
        
        card.dibujar();
        
        // Guardamos los productos y cartas en arreglos
        cards.push(card);

        // reseteamos el form
        _('#imgPreview').removeAttribute('src');
        _('.nameProduct').value = '';
        _('.categoryProduct').value = `Men's Shoes`;
        _('.detailProduct').value = '';
        _('.priceProduct').value = '';

        let opcFather = _('.creatorCard .items');
        
        for(let i = 0; i < optionSelect.length; i++){
            let numOptions =  document.querySelectorAll('.creatorCard .item');

            if (numOptions.length != 1){
                opcFather.removeChild(opcFather.firstChild);
            } 
        }

        let removeItem = _('.creatorCard .delete'),
            panel = _('#panelCreate');

        removeItem.className += ' hidden';
        panel.checked = false;

        // Aumentamos el iterador
        num++;
        firstclick = true;

        // Mostramos el objeto card
        console.log(cards);
    });
}

export {createCard};