var body = document.getElementById('body');
var mudarTemaEscuro = document.getElementById('mudarTemaEscuro');
var mudarTemaClaro = document.getElementById('mudarTemaClaro');
var textoLiberdade = document.getElementById('textoLiberdade');

mudarTemaClaro.addEventListener('load', function(){
    mudarTemaClaro.style.display = 'none';
})
mudarTemaEscuro.addEventListener('click', function(){
mudarTemaEscuro.style.display = 'none'
body.style.backgroundColor = 'black';
body.style.transition = ' 0.50s ease';
mudarTemaClaro.style.display = 'inline';
textoLiberdade.style.color = 'white'


});
mudarTemaClaro.addEventListener('click', function(){
    mudarTemaClaro.style.display = 'none'
    body.style.backgroundColor = 'white';
    mudarTemaEscuro.style.display = 'inline';
    textoLiberdade.style.color = 'black'

    });


