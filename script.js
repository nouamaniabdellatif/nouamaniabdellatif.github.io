const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
    const header = section.querySelector('h2');
    const content = section.querySelector('.content');

    header.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});
