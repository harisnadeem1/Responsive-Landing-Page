

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);


        targetSection.scrollIntoView({ behavior: 'smooth' });


        if (window.innerWidth <= 600) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});