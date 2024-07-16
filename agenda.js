const toggleBtn = document.querySelector('.toggle-btn');

const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

const profileModal = document.getElementById('profileModal');
const closeModalBtn = document.querySelector('.close');

document.getElementById('profilePic').addEventListener('click', () => {
    profileModal.style.display = 'block';
});


closeModalBtn.addEventListener('click', () => {
    profileModal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target == profileModal) {
        profileModal.style.display = 'none';
    }
});
