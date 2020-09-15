const logo = document.querySelector(".logo");
const join = document.querySelector(".join");

const tl = new TimelineMax();
tl.fromTo(logo, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }).fromTo(
  join,
  2,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut }
);
