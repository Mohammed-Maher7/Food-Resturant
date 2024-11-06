let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Toggle the menu icon
    navbar.classList.toggle('active'); // Toggle the navbar visibility
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); // Hide navbar on scroll
}
