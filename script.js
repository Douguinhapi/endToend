// script.js
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;
    const mensagem = document.getElementById('mensagem');

    mensagem.className = 'mensagem'; // Resetando a classe

    if (!nome || !email || !senha || !confirmacaoSenha) {
        mensagem.textContent = 'Todos os campos são obrigatórios.';
        return;
    }

    if (senha !== confirmacaoSenha) {
        mensagem.textContent = 'As senhas não correspondem.';
        return;
    }

    // Cadastro bem-sucedido
    mensagem.className += ' sucesso';
    mensagem.textContent = 'Cadastro realizado com sucesso!';

    // Limpa os campos
    document.getElementById('cadastroForm').reset();
});
