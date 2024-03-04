$(document).ready(function () {
  $('#reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slider__reviews-btn-prev'),
    nextArrow: $('.slider__reviews-btn-next'),
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true,
        },
      }
    ]
  });

  $('#partners-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.slider__partners-btn-prev'),
    nextArrow: $('.slider__partners-btn-next'),
    autoplay: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
});
