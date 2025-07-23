var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true', 
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    770: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
});

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta1")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
  e.preventDefault();
  modalC.style.opacity="1";
  modalC.style.visibility= "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
  modal.classList.toggle("modal-close");
  setTimeout(function(){
    modalC.style.opacity="0";
    modalC.style.visibility= "hidden";
  },900)
});



let cerrar2 = document.querySelectorAll(".close2")[0];
let abrir2 = document.querySelectorAll(".cta2")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalC2 = document.querySelectorAll(".modal-container2")[0];

abrir2.addEventListener("click", function(e){
  e.preventDefault();
  modalC2.style.opacity="1";
  modalC2.style.visibility= "visible";
  modal2.classList.toggle("modal-close2");
});

cerrar2.addEventListener("click", function(){
  modal2.classList.toggle("modal-close2");
  setTimeout(function(){
    modalC2.style.opacity="0";
    modalC2.style.visibility= "hidden";
  },900)
});

let cerrar3 = document.querySelectorAll(".close3")[0];
let abrir3 = document.querySelectorAll(".cta3")[0];
let modal3 = document.querySelectorAll(".modal3")[0];
let modalC3 = document.querySelectorAll(".modal-container3")[0];

abrir3.addEventListener("click", function(e){
  e.preventDefault();
  modalC3.style.opacity="1";
  modalC3.style.visibility= "visible";
  modal3.classList.toggle("modal-close3");
});

cerrar3.addEventListener("click", function(){
  modal3.classList.toggle("modal-close3");
  setTimeout(function(){
    modalC3.style.opacity="0";
    modalC3.style.visibility= "hidden";
  },900)
});

let cerrar4 = document.querySelectorAll(".close4")[0];
let abrir4 = document.querySelectorAll(".cta4")[0];
let modal4 = document.querySelectorAll(".modal4")[0];
let modalC4 = document.querySelectorAll(".modal-container4")[0];

abrir4.addEventListener("click", function(e){
  e.preventDefault();
  modalC4.style.opacity="1";
  modalC4.style.visibility= "visible";
  modal4.classList.toggle("modal-close4");
});

cerrar4.addEventListener("click", function(){
  modal4.classList.toggle("modal-close4");
  setTimeout(function(){
    modalC4.style.opacity="0";
    modalC4.style.visibility= "hidden";
  },900)
});

let cerrar5 = document.querySelectorAll(".close5")[0];
let abrir5 = document.querySelectorAll(".cta5")[0];
let modal5 = document.querySelectorAll(".modal5")[0];
let modalC5 = document.querySelectorAll(".modal-container5")[0];

abrir5.addEventListener("click", function(e){
  e.preventDefault();
  modalC5.style.opacity="1";
  modalC5.style.visibility= "visible";
  modal5.classList.toggle("modal-close5");
});

cerrar5.addEventListener("click", function(){
  modal5.classList.toggle("modal-close5");
  setTimeout(function(){
    modalC5.style.opacity="0";
    modalC5.style.visibility= "hidden";
  },900)
});

let cerrar6 = document.querySelectorAll(".close6")[0];
let abrir6 = document.querySelectorAll(".cta6")[0];
let modal6 = document.querySelectorAll(".modal6")[0];
let modalC6 = document.querySelectorAll(".modal-container6")[0];

abrir6.addEventListener("click", function(e){
  e.preventDefault();
  modalC6.style.opacity="1";
  modalC6.style.visibility= "visible";
  modal6.classList.toggle("modal-close6");
});

cerrar6.addEventListener("click", function(){
  modal6.classList.toggle("modal-close6");
  setTimeout(function(){
    modalC6.style.opacity="0";
    modalC6.style.visibility= "hidden";
  },900)
});

let cerrar7 = document.querySelectorAll(".close7")[0];
let abrir7 = document.querySelectorAll(".cta7")[0];
let modal7 = document.querySelectorAll(".modal7")[0];
let modalC7 = document.querySelectorAll(".modal-container7")[0];

abrir7.addEventListener("click", function(e){
  e.preventDefault();
  modalC7.style.opacity="1";
  modalC7.style.visibility= "visible";
  modal7.classList.toggle("modal-close7");
});

cerrar7.addEventListener("click", function(){
  modal7.classList.toggle("modal-close6");
  setTimeout(function(){
    modalC7.style.opacity="0";
    modalC7.style.visibility= "hidden";
  },900)
});

