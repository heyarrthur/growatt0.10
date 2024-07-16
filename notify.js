// Seleciona o botão de toggle da barra lateral
const toggleBtn = document.querySelector('.toggle-btn');

// Seleciona a barra lateral
const sidebar = document.querySelector('.sidebar');

// Adiciona um evento de clique ao botão de toggle
toggleBtn.addEventListener('click', () => {
    // Alterna a classe 'collapsed' na barra lateral
    sidebar.classList.toggle('collapsed');
});

// Seleciona o modal e o botão de fechar
const profileModal = document.getElementById('profileModal');
const closeModalBtn = document.querySelector('.close');

// Abre o modal ao clicar na foto de perfil
document.getElementById('profilePic').addEventListener('click', () => {
    profileModal.style.display = 'block';
});

// Fecha o modal ao clicar no botão de fechar
closeModalBtn.addEventListener('click', () => {
    profileModal.style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target == profileModal) {
        profileModal.style.display = 'none';
    }
});