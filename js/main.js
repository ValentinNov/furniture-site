$(document).ready(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".products__innerbox");    
    if (windowWidth > 750 & windowWidth < 850) {
      elem.removeClass('products__inner');
      elem.addClass('products__inner--slider');
    }
    else {
      elem.removeClass('products__inner--slider');
      elem.addClass('products__inner');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

$(function () {

  $('.designers__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt="arrow-next"></button>',
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-red-prev"><img src="images/icons/arrow-red-prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-red-next"><img src="images/icons/arrow-red-next.svg" alt="arrow-next"></button>',
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.products__inner--slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '30px',
    prevArrow: '<button type="button" class="slick-prev-prod"><img src="images/icons/arrow-prev-prod.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next-prod"><img src="images/icons/arrow-next-prod.svg" alt="arrow-next"></button>',
    autoplay: true,
    autoplaySpeed: 4000,
  });

 

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#E3010F",
    spacing: "5px",
    readOnly: true
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.products__open-btn').on('click', function () {
    $('.products__item').toggleClass('products__item--open');
    $('.products__open-btn').addClass('products__open-btn--active');
  })

});

