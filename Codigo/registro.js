var registrar = document.getElementById('registrar');

registrar.addEventListener('click', function(event){
    event.preventDefault();

    var nome = document.getElementById('exampleFirstName').value.trim();
    var email = document.getElementById('exampleInputEmail').value.trim();
    var senha = document.getElementById('examplePasswordInput').value.trim();

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    var cadastro = {
        "Nome": nome,
        "Email": email,
        "Senha": senha
    };

    // Armazenando os dados do usuário no localStorage
    localStorage.setItem('usuario', JSON.stringify(cadastro));

    alert("Cadastro realizado com sucesso!");

    // Redirecionando para a página de login
    window.location.href = "login.html";
});
