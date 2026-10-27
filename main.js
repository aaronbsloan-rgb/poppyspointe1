(function () {
  var btn = document.querySelector(".burger");
  var nav = document.querySelector(".mobile-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
  }
})();
