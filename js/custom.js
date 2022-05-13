// Menu Actions
function menuTrigger(e, m, c) {
  var t = e.target;
  if (t.classList.contains("menu-icon")) {
    var a = t.getAttribute("name");
    if (a === "grid-outline") {
      t.setAttribute("name", "grid");
      m.classList.add("visible");
      c.classList.add("visible");
    } else {
      t.setAttribute("name", "grid-outline");
      m.classList.remove("visible");
      c.classList.remove("visible");
    }
  }
}
var i = document.querySelector(".menu-icon");
var m = document.querySelector(".navbar-container");
var c = document.querySelector(".content-cover");
i.addEventListener("click", function (e) {
  menuTrigger(e, m, c);
});
document.addEventListener("click", function (e) {
  if (!e.target.closest(".navbar-container") && !e.target.classList.contains("menu-icon")) {
    if (m.classList.contains("visible")) {
      i.setAttribute("name", "grid-outline");
      m.classList.remove("visible");
      c.classList.remove("visible");
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

// Handle Form
$(".auth-form").submit(function (e) {
  e.preventDefault();

  var type = $(this).attr("type");
  var message;
  if (type === "login") {
    message = "ورود با موفقیت انجام شد";
  } else {
    message = "حساب کاربری شما با موفقیت ساخته شد";
  }
  var button = $(this).find("button");
  var text = button.text();
  button.html("<div class='spinner-border spinner-border-sm text-light' role='status'><span class='visually-hidden'>Loading...</span></div>");
  setTimeout(() => {
    button.html(text);
    Toastify({
      text: message,
      duration: 3000,
      close: false,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      rtl: true,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      backgroundColor: "#2dcd95",
    }).showToast();
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }, 2000);
});

// Password Input Visible Status
$(".visible-status").click(function () {
  var input = $(this).prev();
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    input.attr("type", "password");
    $(this).html("<ion-icon name='eye-outline'></ion-icon>");
  } else {
    this.classList.add("active");
    input.attr("type", "text");
    $(this).html("<ion-icon name='eye-off-outline'></ion-icon>");
  }
});
