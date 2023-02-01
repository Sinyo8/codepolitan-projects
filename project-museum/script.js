const nav = document.getElementById("nav");

nav.addEventListener("click", (e) => {
  nav.classList.remove("active");
  nav.classList.toggle("active");
});
