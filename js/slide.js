$(function () {
    $('.js-slider').slick({
      arrows: true, 
      dots: false,
      appendDots: $('.dots'),
      speed: 1000,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      infinite: true,
    });
  });