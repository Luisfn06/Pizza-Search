function validarLogin(event) {
    event.preventDefault(); 
    var email = document.getElementById('exampleInputEmail').value.trim();
    var senha = document.getElementById('exampleInputPassword').value.trim();

    var usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

    if (!usuarioSalvo) {
        alert("Nenhum usuário cadastrado. Por favor, registre-se primeiro.");
        return;
    }

    if (email == usuarioSalvo.Email && senha == usuarioSalvo.Senha) {
        alert("Login bem-sucedido!");
        window.location.href = "profile.html";
    } else {
        alert("Credenciais inválidas. Por favor, tente novamente.");
    }
}
var formLogin = document.querySelector('.user');

formLogin.addEventListener('submit', validarLogin);
