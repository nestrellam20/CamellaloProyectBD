// Espera a que el documento HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  // Agrega un evento al formulario para prevenir la recarga de la página
  document.getElementById('formulario1').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Redirige a la página "index2.html" al hacer clic en el botón "Siguiente"
    window.location.href = "index2.html";
  });
});