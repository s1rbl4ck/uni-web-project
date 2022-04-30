// Menu Actions
function menuTrigger(e, m) {
  var t = e.target;
  if (t.classList.contains("menu-icon")) {
    var a = t.getAttribute("name");
    if (a === "grid-outline") {
      t.setAttribute("name", "grid");
      m.classList.add("visible");
    } else {
      t.setAttribute("name", "grid-outline");
      m.classList.remove("visible");
    }
  }
}
var i = document.querySelector(".menu-icon");
var m = document.querySelector(".navbar-container");
i.addEventListener("click", function (e) {
  menuTrigger(e, m);
});
document.addEventListener("click", function (e) {
  if (!e.target.closest(".navbar-container") && !e.target.classList.contains("menu-icon")) {
    if (m.classList.contains("visible")) {
      i.setAttribute("name", "grid-outline");
      m.classList.remove("visible");
    }
  }
});

// Carousel Slider
const slider = document.querySelector(".slider");
$(".slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  pauseOnHover: true,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
