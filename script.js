let searchBtn=document.querySelector('#searchBtn');
let searchBar=document.querySelector('.search-bar_container');
let formBtn=document.querySelector('#Userbtn');
let LoginForm=document.querySelector('.login-form');
let FormClose=document.querySelector('#Formcut');
let menuBar=document.querySelector('#menu-bar');
let navBar=document.querySelector('.navbar');
let vidBtn=document.querySelectorAll('.vid-btn');


window.onscroll=function(){
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
    LoginForm.classList.remove("active");

}
searchBtn.addEventListener('click',function(){
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");

});

menuBar.addEventListener('click',function(){
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
    
});



formBtn.addEventListener('click',function(){
   
    LoginForm.classList.add("active");

});

FormClose.addEventListener('click',function(){
   
    LoginForm.classList.remove("active");

});

vidBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    })
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,

        },
       768: {
        slidesPerView:2,

        },
        1024:{
            slidesPerView:3,

        },
    },
});
