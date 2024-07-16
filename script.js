document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.querySelector('.login-box');
    const registerBox = document.querySelector('.register-box');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');

    showRegister.addEventListener('click', (event) => {
        event.preventDefault();
        loginBox.classList.remove('active');
        registerBox.classList.add('active');
    });

    showLogin.addEventListener('click', (event) => {
        event.preventDefault();
        registerBox.classList.remove('active');
        loginBox.classList.add('active');
    });

    document.getElementById('loginForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'Arthur' && password === '0201ArthuR') {
            alert('Login bem-sucedido!');
            window.location.href = 'dashboard/dashboard.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });

    document.getElementById('registerForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const email = document.getElementById('email').value;

        alert(`Registrado com sucesso!\nUsuário: ${newUsername}\nEmail: ${email}`);
        window.location.href = 'register-success.html';
    });
});

function togglePasswordVisibility(id, toggleElement) {
    const input = document.getElementById(id);
    if (input.type === 'password') {
        input.type = 'text';
        toggleElement.textContent = '🙈';
    } else {
        input.type = 'password';
        toggleElement.textContent = '👁️';
    }
}
