const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//...........overlay code for pics
function page4Animation(){
    const elemC = document.querySelector("#elem-container");
const fix = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function(){
    fix.style.display = "block"
});
elemC.addEventListener("mouseleave", function(){
    fix.style.display = "none"
});

const elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
    let image = e.getAttribute("data-image");
        fix.style.backgroundImage = `url(${image})`;
    });
});

}

// ....for swiper page 5....
function  swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 80,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

}

// .....for Response menu........
function menuAnimation(){ 
var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var navImg = document.querySelector("nav img");
var navPart = document.querySelector("#nav-part2");

var flag = 0
menu.addEventListener("click", function (){
    if(flag == 0){
        full.style.top  = 0;
        navImg.style.opacity = 0;
        navPart.style.display= "block";
        navPart.style.display.borderRadius = "none"
        flag = 1;
    }else{
        full.style.top  = "-100%";
        navImg.style.opacity = 1;
        navPart.style.display = "none"
        flag = 0;
    }
});

}

function loaderAnimation(){
    const loader = document.querySelector("#loader");
      setTimeout(function(){
      loader.style.top = "-100%";
    },4200);

}

page4Animation();
swiperAnimation();
menuAnimation();
loaderAnimation();