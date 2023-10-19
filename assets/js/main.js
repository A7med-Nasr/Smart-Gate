let spinner = document.querySelector(".spinner");

window.addEventListener("scroll", function () {
    let x = window.scrollY;
    if (x > 500) {
        spinner.style.opacity = 1
    } else {
        spinner.style.opacity = 0
    }
})

let navBtn = document.querySelector(".navBar-bar i");
let menu = document.querySelector(".responsive-nav");

function showMenu() {
    if (menu.style.height == 0) {
        menu.style.height = menu.scrollHeight + "px";
    } else {
        menu.style.height = null;
    }
}
navBtn.addEventListener("click", showMenu);

let loginBtn = document.querySelector(".login");
let loginDiv = document.querySelector(".login-div");
let loginResponsiveBtn = document.querySelector("#respo-btn");

function showLog() {
    if (loginDiv.style.height == 0) {
        loginDiv.style.height = loginDiv.scrollHeight + "px";
    } else {
        loginDiv.style.height = null;
    }
}

loginBtn.addEventListener("click",showLog);
loginResponsiveBtn.addEventListener("click",showLog);
loginResponsiveBtn.addEventListener("click",showMenu);

let closeBtn = document.querySelector(".btn-close");

function closeDiv(){
    loginDiv.style.height = null;
}

closeBtn.addEventListener("click",closeDiv)