const navbar = document.querySelector('.navbar');
const btns = document.querySelectorAll('.btn');
const on = document.querySelector('#sun');
const off = document.querySelector('#moon');
const body = document.querySelector('body');

btns.forEach((btn) =>{
    btn.addEventListener('click' , () =>{
        const color = btn.getAttribute('data-color');
        navbar.style.backgroundColor = color;
    });
});

on.addEventListener('click', () => {
    body.style.backgroundColor = rgb(24, 18, 18);
});

off.addEventListener('click', () => {
    body.style.backgroundColor = rgb(255, 255, 255);
});
