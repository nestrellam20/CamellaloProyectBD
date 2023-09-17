  document.getElementById('formulario1').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  // Obtén el valor del campo de entrada
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var celular = document.getElementById('celular').value;
  var usuario = document.getElementById('usuario').value;
  var contraseña = document.getElementById('contraseña').value;

  // Realiza una solicitud AJAX para enviar el dato
  validateForm(nombre,email,celular,usuario,contraseña);
  window.location.href = "index3.html";
});

document.getElementById("miBoton").addEventListener("click", function () {
  // Redirige a la página index2.html al hacer clic en el botón "Siguiente"
  window.location.href = "index2.html";
});

document.getElementById("miBoton2").addEventListener("click", function () {
  // Redirige a la página index2.html al hacer clic en el botón "Siguiente"
  window.location.href = "index2.html";
});



function validateForm(nombre,email,celular,usuario,contraseña) {
  
$.ajax({
    url:'http://localhost:3000/usuario',
    method:'POST',
    data:{
         nombre: nombre,
         email: email,
         celular:celular,
         usuari:usuario,
         contraseña:contraseña,
    },
    dataType:'json'
  })
  .then(function(data){
    console.log('info ingresada')
    console.log(data)
    })
  .catch(function(error){
    console.log('error');
    console.log(error);
  });

}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Realiza una solicitud AJAX para verificar el inicio de sesión en el servidor
      const response = await login(username, password);

      if (response.success) {
          // Redirige al usuario a la página de inicio de sesión exitosa
          window.location.href = "dashboard.html";
      } else {
          // Muestra un mensaje de error al usuario
          alert("Nombre de usuario o contraseña incorrectos.");
      }
  });

  // Función para realizar la solicitud de inicio de sesión al servidor
  async function login(username, password) {
      try {
          const response = await fetch("/api/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ username, password })
          });

          return await response.json();
      } catch (error) {
          console.error("Error en la solicitud de inicio de sesión:", error);
          return { success: false };
      }
  }
});