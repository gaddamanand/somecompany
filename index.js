var menu = document.getElementById("menu");
var ul = document.getElementById("link");
var line1 = document.getElementById("line-1");
var line2 = document.getElementById("line-2");
var button = document.getElementById("cta");
menu.addEventListener("click", revealMenu);

function revealMenu() {
  deg = 45;
  minusDeg = -45;

  // if (ul.style.left === "-40rem") {
  //   ul.style.left = "0";
  //   line1.style.transformOrigin = "center center";
  //   line1.style.transform = "rotate(" + deg + "deg)";

  //   line2.style.transform = "rotate(" + minusDeg + "deg)";
  //   line2.style.position = "0";
  //   line2.style.transformOrigin = "center center";
  //   line2.style.top = "18";
  // } else {
  //   ul.style.left = "-40rem";
  //   line1.style.transform = "rotate(" + 0 + "deg)";
  //   line2.style.transform = "rotate(-" + 0 + "deg)";
  // }

  if (ul.style.left == "-40rem") {
    ul.style.left = "0";
    line1.classList.add("active");
    line2.classList.add("active");
  } else {
    ul.style.left = "-40rem";
    line1.classList.remove("active");
    line2.classList.remove("active");
  }
}

button.addEventListener("click", removeShadow);

function removeShadow() {
  button.classList.toggle("removeShadow");
}
