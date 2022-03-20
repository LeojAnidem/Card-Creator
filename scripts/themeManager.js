const themeColor = function(){
    const inputLightDark = _('#darkMode');

    inputLightDark.addEventListener('change', function(){

        if(this.checked){
            document.body.style.background = '#272727';
            _('.footer').style.color = '#ebebeb';
            _('.card').style['boxShadow'] = '0 7px 20px rgba(0, 0, 0, 0.377)';
            
        }

        else{
            document.body.style.background = '#ebebeb';
            _('.footer').style.color = '#272727'; 
            _('.card').style['boxShadow'] = '0 5px 15px rgba(0,0,0,0.1)';
        }

    });
}

export {themeColor};