let navBtn = document.getElementById("navBtn");
let nav = document.querySelector("nav");

let btnOn = () => {
  if (nav.style.display == "none") {
    nav.style.display = "block";
    navBtn.innerText = "Close";
  } else {
    nav.style.display = "none";
    navBtn.innerText = "Navigation";
  }
};

navBtn.addEventListener("click", btnOn);