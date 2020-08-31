// document.getElementById("date").innerHTML('Date()');
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

function message() {
  alert("We are working on this page");
}
function hideSidebar() {
  document.getElementById("sidebar").style.display = "none";
}
function showSidebar() {
  document.getElementById("sidebar").style.display = "block";
}

//extra code
// const navbar = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");
// const date = document.querySelector("#date");
// // add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });
// // show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
// // set year
// date.innerHTML = new Date().getFullYear();
