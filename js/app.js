const h1 = document.querySelector(".h1")
h1.style.cursor = "pointer"

h1.addEventListener("click", () => {
  h1.textContent = "Hola desde la clase";
})

