const navLinks = document.querySelectorAll('.nav');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const card = document.querySelector('.card');
    const flipButton = document.querySelectorAll('.flip-button');

    flipButton.forEach(button => {
        button.addEventListener('click', () => {
            card.classList.toggle('card-flipped');
        });
    });
const card1 = document.querySelector('.card1');
    const flipButton1 = document.querySelectorAll('.flip-button1');

    flipButton1.forEach(button => {
        button.addEventListener('click', () => {
            card1.classList.toggle('card-flipped');
        });
    });    