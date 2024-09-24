const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navLink = document.querySelectorAll(".nav__link")

// show menu
navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show-menu");
});

// change background header
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

// remove menu
function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll section active link
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)