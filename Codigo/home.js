var body = document.getElementById('body');
var mudarTemaEscuro = document.getElementById('mudarTemaEscuro');
var mudarTemaClaro = document.getElementById('mudarTemaClaro');

mudarTemaClaro.addEventListener('load', function(){
    mudarTemaClaro.style.display = 'none';
})
mudarTemaEscuro.addEventListener('click', function(){
mudarTemaEscuro.style.display = 'none'
body.style.backgroundColor = 'black';
mudarTemaClaro.style.display = 'inline';

});
mudarTemaClaro.addEventListener('click', function(){
    mudarTemaClaro.style.display = 'none'
    body.style.backgroundColor = 'white';
    mudarTemaEscuro.style.display = 'inline';
    
    });


