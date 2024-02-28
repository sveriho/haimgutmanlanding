$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".custom-prev"),
    nextArrow: $(".custom-next"),
    autoplay: false, // Отключаем автопрокрутку
    dots: false, // Включаем пагинацию
    responsive: [
      {
        breakpoint: 991, // Медиа-запрос для экранов шириной до 768px
        settings: {
          slidesToShow: 2, // Количество отображаемых слайдов при этой ширине экрана
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
