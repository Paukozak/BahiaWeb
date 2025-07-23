window.sr =ScrollReveal();

    sr.reveal('.formulario', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.texto-inicio', {
        duration: 3000,
        origin: 'right',
        distance: '-100px'
    });

    sr.reveal('.img-inicio-chicas', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    });

    sr.reveal('.testimonios-megacontainer', {
        duration: 3000,
        origin: 'top',
        distance: '-100px'
    });

    sr.reveal('.info-tofi', {
        duration: 3000,
        origin: 'right',
        distance: '-100px'
    });
  
    sr.reveal('.info-barbi', {
      duration: 3000,
      origin: 'left',
      distance: '-100px'
  });
  
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 10,
    
        breakpoints: {
            620: {
                slidesPerView: 1,
                spaceBetween: 20, 
            },
            680: {
                slidesPerView: 2,
                spaceBetween: 40, 
            },
            920: {
                slidesPerView: 3,
                spaceBetween: 40, 
            },
        }
    
      });

