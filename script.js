function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

const sections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            if(entry.target.id === 'skills') {
                animateSkills();
            }
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => { revealObserver.observe(section); });

function animateSkills() {
    const skillFills = document.querySelectorAll('.skill-fill');
    skillFills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        fill.style.width = width + '%';
    });
}

window.addEventListener('load', () => {
    document.getElementById('home').classList.add('visible');
});