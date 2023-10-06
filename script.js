const nav_list = document.getElementById('nav-list');
const menu_open = document.querySelector('.menu-open');
const menu_close = document.querySelector('.menu-close');

menu_open.addEventListener('click', () => {
    nav_list.style.opacity = '100%'
    menu_open.style.display = 'none'
})
menu_close.addEventListener('click', () => {
    nav_list.style.opacity = '0%';
    menu_open.style.display = 'block';
})