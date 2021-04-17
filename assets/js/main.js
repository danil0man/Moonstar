// Sticky Navbar
const header = document.querySelector('.header__nav');
const sectionOne = document.querySelector('.banner-area');

sectionOneOptions = {
    rootMargin: "-920px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Hamburger Menu
const hamburger = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
})

// Scroll to top
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
})


