let menu = document.getElementById("menu");
let sidenav = document.getElementById("sidenav");
let sidenavclose = document.getElementById("sidenavclose");

menu.addEventListener('click',()=>{
    sidenav.style.left = "0%"
})
sidenavclose.addEventListener('click',()=>{
    sidenav.style.left = "-50%";
})