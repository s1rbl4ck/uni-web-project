// Menu Actions
var i = document.querySelector(".menu-icon");
var m = document.querySelector(".navbar-container");
i.addEventListener("click", function (e) {
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
});
