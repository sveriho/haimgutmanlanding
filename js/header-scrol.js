window.addEventListener("scroll", function () {
  let header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
