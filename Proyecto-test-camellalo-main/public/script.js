document.getElementById("miBoton").addEventListener("click", function () {
    // Redirige a la página index2.html al hacer clic en el botón "Siguiente"
    window.location.href = "index2.html";
  });

  document.getElementById("miBoton2").addEventListener("click", function () {
    // Redirige a la página index2.html al hacer clic en el botón "Siguiente"
    window.location.href = "index2.html";
  });

  document.getElementById("miBoton3").addEventListener("click", function () {
    // Redirige a la página index2.html al hacer clic en el botón "Siguiente"
    window.location.href = "prueba.html";
  });


  // Agrega el evento submit al formulario de registro
  document.getElementById('formulario1').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Obtén el valor del campo de entrada
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;

    // Realiza una solicitud AJAX para enviar el dato
    validateRegistro(nombre, email, celular, usuario, contraseña);
  });


  function validateRegistro(nombre, email, celular, usuario, contraseña) {
    $.ajax({
      url: 'http://localhost:3000/usuario',
      method: 'POST',
      data: {
        nombre: nombre,
        email: email,
        celular: celular,
        usuari: usuario,
        contraseña: contraseña,
      },
      dataType: 'json',
    })
      .then(function (data) {
        console.log('Registro exitoso');
        console.log(data);
        window.location.href = "index3.html"; // Redirige a la página index3.html después del registro exitoso
      })
      .catch(function (error) {
        console.log('Error de registro');
        console.log(error);
      });

    }

    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que la página se recargue al enviar el formulario
  
      // Obtén el valor de los campos de inicio de sesión
      var usuario = document.querySelector('input[name="usuario"]').value;
      var contraseña = document.querySelector('input[name="contraseña"]').value;
  
      // Realiza una solicitud AJAX para enviar los datos de inicio de sesión
      validateInicioSesion(usuario, contraseña);
    });
  
    function validateInicioSesion(usuario, contraseña) {
      // Realiza una solicitud AJAX al servidor para verificar las credenciales
      $.ajax({
        url: 'http://localhost:3000/usuario/login',
        method: 'POST',
        data: {
          usuari: usuario,
          contraseña: contraseña,
        },
        dataType: 'json',
      })
        .then(function (data) {
          // Si las credenciales son válidas, puedes redirigir al usuario a la página deseada
          console.log('Inicio de sesión exitoso');
          console.log(data);
          window.location.href = "prueba.html"; // Redirige a la página prueba.html después del inicio de sesión exitoso
        })
        .catch(function (error) {
          // Si las credenciales son inválidas, puedes mostrar un mensaje de error al usuario
          console.log('Error de inicio de sesión');
          console.log(error.responseText);
          alert('Credenciales inválidas. Inténtalo de nuevo.');
        });
    }
  });

  
  
  
  
  
  