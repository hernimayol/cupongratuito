// script.js
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector("button");

  if (boton) {
    boton.addEventListener("click", function () {
      alert("¡Gracias por usar tu cupón!");
    });
  }
});
