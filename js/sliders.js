$(document).ready(function () {
  $("#reviews-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".slider__btn-prev"),
    nextArrow: $(".slider__btn-next"),
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
});
