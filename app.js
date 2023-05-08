const flags = document.querySelector(".flag-default");
const lan = document.querySelector(".language");
flags.addEventListener("click", handleLanguage);
function handleLanguage(event){
    lan.classList.toggle("is-show");
    lan.classList.toggle("is-none");
    
}

const menu = document.querySelector(".toggle-btn");
const mini = document.querySelector(".menu-list");
menu.addEventListener("click", handleMenu);
function handleMenu(event){
    mini.classList.toggle("is-show");
}
