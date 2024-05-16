var body = document.getElementById('body');
var mudarTemaEscuro = document.querySelectorAll('.mudarTemaEscuro');
var mudarTemaClaro = document.querySelectorAll('.mudarTemaClaro');
var textoLiberdade = document.getElementById('textoLiberdade');
var header = document.querySelector('header');
var botaoNavbar = document.getElementById('botaoNavbar');

// Adicione o event listener a cada ícone do sol para o clique
mudarTemaEscuro.forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Oculta todos os ícones do sol
        mudarTemaEscuro.forEach(function(icon) {
            icon.style.display = 'none';
        });

        // Muda o tema para escuro
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

// Adicione o event listener a cada ícone da lua para o clique
mudarTemaClaro.forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Oculta todos os ícones da lua
        mudarTemaClaro.forEach(function(icon) {
            icon.style.display = 'none';
        });

        // Muda o tema para claro
        body.style.backgroundColor = 'white';
        header.style.backgroundColor = 'rgb(139, 21, 21)';
        mudarTemaEscuro.forEach(function(icon) {
            icon.style.display = 'inline';
        });
        textoLiberdade.style.color = 'black';
    });
});
