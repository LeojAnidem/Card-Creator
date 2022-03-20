// DomElement Library
import {_, createElement, getContrast} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library@fabe9c6/domFunctions.js'

// Scripts
import { createPanel } from './scripts/creatorPanel';
import {themeColor} from './scripts/themeManager';

// Object
import {Img} from './Objects/Img';
import {Product} from './Objects/Product';
import {Card} from './Objects/Card';


createPanel();
themeColor();


let num = 0,
    id = '',
    products = [],
    cards = [];

const addBtn = _('.createCard');

addBtn.addEventListener('click', (e) => {

    e.preventDefault();
    id = `card${num}`;
    
    let src = _('#imgPreview').src;
    let productName = _('.nameProduct').value;
    let alt = `${productName}`;
    let color = _('#colorSelector').value;
    let category = _('.categoryProduct').value;
    let detail = _('.detailProduct').value;
    let optionSelect = document.querySelectorAll('.creatorCard .item');

    let options = [];
    let childValue;

    optionSelect.forEach(e => {
        childValue = e.lastChild.previousSibling;
        options.push(childValue.value);
    });

    let price = _('.creatorCard .addCard .priceDetail input').value;

    products.push(new Product(id, new Img(src, alt), productName, category, detail, options, price));
    cards.push(new Card(color, products[products.length - 1]))
    
    const lastCard = cards[cards.length - 1];
    lastCard.dibujar();

    num++;
});