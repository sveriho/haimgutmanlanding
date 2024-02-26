$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".custom-prev"),
    nextArrow: $(".custom-next"),
    dots: true,
    autoplay: false,
  });
});
