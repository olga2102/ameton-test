const swiper = new Swiper('.faq__list', {
    slidesPerView: 4,
    spaceBetween: 24,
  
    navigation: {
      nextEl: '.faq__button-next',
      prevEl: '.faq__button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    }
  });

const helpItem = document.querySelectorAll('.help__item');

helpItem.forEach(i => {
  i.addEventListener('click', function() {
    const btn = this.querySelector('.help__close');
    if(this.classList.contains('active')) {
      this.classList.remove('active');
      btn.classList.remove('active');
    } else {
      this.classList.add('active');
      btn.classList.add('active');
    }

    // const answer = this.parentElement.querySelector('.help__desc');
    // if(answer.classList.contains('active')) {
    //   answer.classList.remove('active');
    // } else {
    //   answer.classList.add('active')
    // }
  })
})