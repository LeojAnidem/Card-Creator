import {_, createElement, imgPreview, getContrast} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library/domFunctions.js';

const createPanel = function(){
    const editChk = _('#edit'),
        addItem = _('.creatorCard .add'),
        removeItem = _('.creatorCard .delete');

    let numId = 0;

    imgPreview('#imgHolder', '#imgPreview');

    // Desactivamos o activamos la edicion de la informacion
    editChk.addEventListener('change', function() {
        let otp = document.querySelectorAll('#otp');

        if(editChk.checked){
            otp.forEach(e => {
                e.removeAttribute('disabled');
                e.classList.remove('disabled');
            });
        }

        else{
            otp.forEach(e => {
                e.setAttribute('disabled', 'true');
                e.className += ' disabled';
            });
        }
    });

    // Agregamos opciones de size
    addItem.addEventListener('click', function(){
    
        let itemId = `item${numId}`;

        if (numId === 0){
            removeItem.classList.remove('hidden');
        }

        if (numId === 3){
            addItem.className += ' hidden';
        }

        createElement('.creatorCard .items', 'div' , `item ${itemId}`);
        createElement(`.creatorCard .${itemId}`, 'input', 'text', '', '32');

        let item = _(`.creatorCard .items .${itemId} input`);
        item.setAttribute('pattern', '\\d*');
        item.setAttribute('maxLength', '2')
        item.setAttribute('id', 'otp'); 

        numId++;
    });
    
    // Eliminamos opciones de size
    removeItem.addEventListener('click', function(){
        let lastItem = _('.creatorCard .items').lastChild;
        lastItem.remove();
        
        console.log(numId);
        
        if(numId === 1){
            removeItem.className += ' hidden';
        }

        if(numId === 4){
            addItem.classList.remove('hidden');
        }

        numId--;
    });

}

export {createPanel};
