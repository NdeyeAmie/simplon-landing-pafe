const navbar = document.getElementsByClassName("nav-link");

for (let i = 0; i < navbar.length; i++) {
  const currentElement = navbar[i];
  currentElement.addEventListener("click", function () {
    currentElement.classList.add("active");
    const current = document.getElementsByClassName("active");
    if (current.length > 1) {
      current[0].className = current[0].className.replace(" active", "");
    }
  });
}