console.log("Hello world!");

const myName = "Daniel Hanák";
console.log(myName);

const h1 = document.querySelector(".heading-primary");
console.log(h1);

// h1.addEventListener("click", function () {
//     h1.textContent = myName;
//     h1.style.backgroundColor = "red";
//     h1.style.padding = "5rem";
// });

const copyrightYearEl = document.querySelector(".copyright-year");
copyrightYearEl.textContent = new Date().getFullYear().toString();

const headerEl = document.querySelector(".header");
const buttonMobileNavigationEl = document.querySelector(".btn-mobile-nav");
buttonMobileNavigationEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
})