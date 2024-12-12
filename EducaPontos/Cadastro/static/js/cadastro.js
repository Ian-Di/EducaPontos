// Obtendo o formulário pelo ID
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Previndo o envio padrão do formulário

    // Obtendo os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Função para verificar se o usuário é professor ou aluno (a ser implementada)
    const userType = checkUserType(username, password);

    // Redirecionando para a página correspondente
    if (userType === 'professor') {
        const professorHtmlUrl = "{% url 'professor' %}";
        window.location.href = professorHtmlUrl;
    } else if (userType === 'aluno'){
        const alunoHtmlUrl = "{% url 'aluno' %}";
        window.location.href = alunoHtmlUrl;
    } else {
        alert('Usuário ou senha inválidos.');
    }
});

// Função para verificar o tipo de usuário (a ser implementada)
function checkUserType(username, password) {
    // Lógica para verificar o tipo de usuário
    // Essa função pode consultar um banco de dados, um arquivo JSON, ou qualquer outra fonte de dados
    // para verificar as credenciais do usuário e determinar seu tipo.

    // Exemplo simples usando um objeto literal para armazenar os usuários
    const users = {
        'professor': '123',
        'aluno': '456'
    };

    if (users[username] === password) {
        return username.includes('professor') ? 'professor' : 'aluno';
    } else {
        return null;
    }
}