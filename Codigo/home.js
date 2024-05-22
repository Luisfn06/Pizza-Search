var body = document.getElementById('body');
var mudarTemaEscuro = document.querySelectorAll('.mudarTemaEscuro');
var mudarTemaClaro = document.querySelectorAll('.mudarTemaClaro');
var textoLiberdade = document.getElementById('textoLiberdade');
var header = document.querySelector('header');
var botaoNavbar = document.getElementById('botaoNavbar');
var voltarTopoLink = document.getElementById('voltarTopoLink');




mudarTemaEscuro.forEach(function(icon) {
    icon.addEventListener('click', function() {
        mudarTemaEscuro.forEach(function(icon) {
            icon.style.display = 'none';
        });
        
        body.style.backgroundColor = 'black';
        header.style.backgroundColor = 'black';
        mudarTemaClaro.forEach(function(icon) {
            icon.style.display = 'inline';
        });
        textoLiberdade.style.color = 'white';
        body.style.transition = '0.50s ease';
        botaoNavbar.style.backgroundColor = 'white'
    });
});

mudarTemaClaro.forEach(function(icon) {
    icon.addEventListener('click', function() {
        mudarTemaClaro.forEach(function(icon) {
            icon.style.display = 'none';
        });
        botaoNavbar.style.backgroundColor = '';
        body.style.backgroundColor = 'white';
        header.style.backgroundColor = 'rgb(139, 21, 21)';
        mudarTemaEscuro.forEach(function(icon) {
            icon.style.display = 'inline';
           
        });
        textoLiberdade.style.color = 'black';
    });
});

