const navBtn = document.getElementById("navBtn");
const nav = document.querySelector("nav");

const toggleNav = () => {
  const isHidden = nav.style.display === "none";
  nav.style.display = isHidden ? "block" : "none";
  navBtn.innerText = isHidden ? "Close" : "Navigation";
};

window.onclick = (event) => {
  if (!nav.contains(event.target) && event.target !== navBtn) {
    nav.style.display = "none";
    navBtn.innerText = "Navigation";
  }
};

navBtn.addEventListener("click", toggleNav);
