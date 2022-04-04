var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints:{
        360:{
            slidesPerView: 1,
        },
        1200:{
            slidesPerView: 1,
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var swiperr = new Swiper(".slider2", {
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints:{
        570:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 3,
        },
        1200:{
            slidesPerView: 4,
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// header

let btnScroll = document.querySelector('.btnScroll');
window.addEventListener('scroll',() => {
    let header  = document.querySelector('header');
    header.classList.toggle('stikcy', scrollY > 0)
    btnScroll.classList.toggle('topUp', scrollY > 1240)
});
// hamburger
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',() => {
  let nav = document.querySelector('nav');
  nav.classList.toggle('navShow');
  hamburger.classList.toggle('hambugerStyle')
});

btnScroll.addEventListener('click', clickBtnScroll);
function clickBtnScroll (){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(current => {
    current.addEventListener('click',() => {
      ul = document.querySelector('.active').classList.remove('active');
      current.classList.toggle('active');
    });
});

let btnNoActions = document.getElementsByClassName('noActions');
console.log(btnNoActions)
for(let i = 0; i < btnNoActions.length; i++){
  btnNoActions[i].addEventListener('click',() => {
    window.alert('Sorry, this button cant functions');
  });
}



