window.addEventListener("scroll", function () {
  let header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

document.getElementById("openModalBtn").addEventListener("click", function () {
  localStorage.setItem("showModal", "true");
  window.open("modal.html");
});

document.addEventListener("DOMContentLoaded", function () {
  let showModal = localStorage.getItem("showModal");
  if (showModal === "true") {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    localStorage.removeItem("showModal");
  }

  let closeBtn = document.querySelector(".modal .close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      let modal = document.getElementById("myModal");
      modal.style.display = "none";
    });
  }
});
