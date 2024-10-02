
// add classes for mobile navigation toggling
const CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const CSnavLinks = document.querySelectorAll(".cs-li-link"); // Select all navigation links

CShamburgerMenu.addEventListener('click', () => {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    csUL.setAttribute('aria-expanded', csExpanded === 'false' ? 'true' : 'false');
}

// Close the mobile menu when a link is clicked
CSnavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (CSbody.classList.contains('cs-open')) {
            CShamburgerMenu.classList.remove("cs-active");
            CSnavbarMenu.classList.remove("cs-active");
            CSbody.classList.remove("cs-open");
            ariaExpanded();
        }
    });
});

// Throttle function to limit scroll event handler execution
function throttle(fn, wait) {
    let time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll animations with the navbar

const handleScroll = throttle(() => {
    const scroll = document.documentElement.scrollTop;
    CSbody.classList.toggle('scroll', scroll >= 100);
}, 200);

document.addEventListener('scroll', handleScroll);

// mobile nav toggle code
document.querySelector('#cs-navigation').addEventListener('click', (event) => {
    if (event.target.closest('.cs-dropdown')) {
        event.target.closest('.cs-dropdown').classList.toggle('cs-active');
    }
});