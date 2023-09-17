document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('login-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que la página se recargue al enviar el formulario

      // Obtén el valor de los campos de inicio de sesión
      var usuario = document.getElementById('usuario').value;
      var contraseña = document.getElementById('contraseña').value;

      // Realiza una solicitud AJAX para validar el inicio de sesión
      validateInicioSesion(usuario, contraseña);
  });

  function validateInicioSesion(usuario, contraseña) {
      // Realiza una solicitud AJAX al servidor para verificar las credenciales
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/usuario/login', true);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                  console.log('Inicio de sesión exitoso');
                  console.log(xhr.responseText);
                  window.location.href = "prueba.html"; // Redirige a la página deseada después del inicio de sesión exitoso
              } else {
                  console.log('Error de inicio de sesión');
                  console.log(xhr.responseText);
                  alert('Credenciales inválidas. Inténtalo de nuevo.');
              }
          }
      };
      var data = JSON.stringify({ usuario: usuario, contraseña: contraseña });
      xhr.send(data);
  }
});