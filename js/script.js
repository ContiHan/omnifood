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

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }

        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open");
        }
    })
})