// offer-bar

let offerbar = document.getElementById("offerbar");
let offerclose = document.getElementById("offerclose");
offerclose.addEventListener('click',()=>{
    offerbar.style.display = "none"
})

let menu = document.getElementById("menu");
let sidenav = document.getElementById("sidenav");
let sidenavclose = document.getElementById("sidenavclose");

menu.addEventListener('click',()=>{
    sidenav.style.left = "0%"
})
sidenavclose.addEventListener('click',()=>{
    sidenav.style.left = "-50%";
})

// slider

// let leftscroll = document.getElementById("slider-left");
// let rightscroll = document.getElementById("slider-right")
// let sliderimage = document.getElementById("img-container");
// var slidermargin=0

// rightscroll.addEventListener("click",() => {
//         slidermargin = slidermargin + 100;
//         if (slidermargin > 200) {
//             slidermargin = 0;
//             sliderimage.style.marginLeft = 0;
//         }
//         else {
//             sliderimage.style.marginLeft = "-" + slidermargin + "vw";
//         }
//     }
// )

// leftscroll.addEventListener("click",() => {
//         if (slidermargin == 0) {

//             slidermargin = 200;
//             sliderimage.style.marginLeft = "-" + slidermargin + "vw";
//         }
//         else {

//             slidermargin = slidermargin - 100;
//             sliderimage.style.marginLeft = "-" + slidermargin + "vw";
//         }
//     }
// )

// like btn

var likebtns = document.querySelectorAll(".like-button");
likebtns.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="images/icons/redheart.png"
        }
        else{
            e.target.src="images/icons/blackheart.png"
        }
    })
})