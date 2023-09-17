document.getElementById("LoginButton").addEventListener("click", function () {
    // Redirige a la página index2.html al hacer clic en el botón "Siguiente"
    window.location.href = "index2.html";
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


  
  
  
  
  
  