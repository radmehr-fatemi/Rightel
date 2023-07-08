const hamburgerMenu = document.querySelector("#hamburger-menu");
const hambergerList = document.querySelector(".hamburger-list");
const logoImage = document.querySelector("nav img");
const usedark = document.querySelector(".use-dark");
const navLi = document.querySelectorAll("nav ul > li");

hamburgerMenu.addEventListener("click", e => {
    if (hamburgerMenu.classList.contains("cros-show")) {
        hamburgerMenu.classList.remove("cros-show");
        hamburgerMenu.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />`;
        hamburgerMenu.classList.add("cros-ushow");

        hambergerList.id = "hamburger-unshow";

        logoImage.style.display = "block";
        
        usedark.style.display = "none";
    } else {
        hamburgerMenu.classList.add("cros-show");
        hamburgerMenu.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`;

        hambergerList.id = "hamburger-show";    
        hamburgerMenu.classList.remove("cros-ushow");

        logoImage.style.display = "none";

        usedark.style.display = "block";

    }
 
})

hambergerList.addEventListener("click" , event => {
    const li = event.target;
    const showUl = li.nextSibling.nextSibling;
    showUl.classList.toggle("off-on-absolute-rightel");

    const svg = li.children[0];
    if (showUl.classList.contains("off-on-absolute-rightel")) {
        svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />`;
    } else {
        svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />;`
    }
    
})

navLi.forEach(item => {
    item.addEventListener("mouseenter" ,e => {
        const absoluteNav = item.children[1];
        absoluteNav.style.display = "flex";
        absoluteNav.style.animation = " Show-nav .7s forwards";

      
    })
})
navLi.forEach(item => {
    item.addEventListener("mouseleave" ,e => {
        const absoluteNav = item.children[1];
        absoluteNav.style.animation  = "UnShow-nav .7s forwards"
        absoluteNav.style.display = "none";
    })
})