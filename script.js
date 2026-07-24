const { NavLink } = require("react-router-dom");

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#mobile-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function light(sw) {
  let pic;
  if (sw === 0) {
    pic = "assets/bulboff.png";
  } else {
    pic = "assets/bulbon.png";
  }
  document.getElementById("blub").src = pic;
}

function showDate(sw) {
  if (sw === 0) {
    document.getElementById("demo").innerHTML = "";
  } else {
    document.getElementById("demo").innerHTML = Date();
  }
}
function hide(sw) {
  if (sw === 0) {
    document.getElementById("blub").style.display = "none";
  } else {
    document.getElementById("blub").style.display = "";
  }
}
