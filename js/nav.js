document.querySelector('.enter-studio-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
});
