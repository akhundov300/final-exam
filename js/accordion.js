/*-- Accordion ---*/
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {

    const bttn = accordion.querySelector('.accordion__button');
    const panel = accordion.querySelector('.accordion__panel');

    bttn.addEventListener('click', () => {

        const active__bttn = document.querySelectorAll('.accordion .accordion__bttn--active');
        active__bttn.forEach(c => c !== bttn? c.classList.remove('accordion__bttn--active') : null);
        bttn.classList.toggle('accordion__bttn--active');

        const active__panel = document.querySelectorAll('.accordion .accordion__panel--active');
        active__panel.forEach(n => n !== panel ? n.classList.remove('accordion__panel--active') : null);
        panel.classList.toggle('accordion__panel--active');

    });
});
