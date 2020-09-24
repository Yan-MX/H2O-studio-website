const logo = document.querySelector(".logo");
const join = document.querySelector(".join");
let mybutton = document.getElementById("myBtn");

const tl = new TimelineMax();
tl.fromTo(logo, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }).fromTo(
  join,
  2,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut }
);
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
