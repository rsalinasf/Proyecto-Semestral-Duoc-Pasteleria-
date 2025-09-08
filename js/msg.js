

// Mensajes de Error

function mostrarMensaje(texto, tipo="error") {
  var msg = document.getElementById('mensaje');
  if (!msg) return;

  msg.textContent = texto;

  if (tipo === 'ok') {
    msg.className = 'ok';
  } else {
    msg.className = '';
  }

  msg.style.display = 'block';
  msg.style.animation = 'fadeIn 0.3s ease forwards';

  setTimeout(function () {
    msg.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(function () {
      msg.style.display = 'none';
    }, 300);
  }, 3000);
}


// Funcion para esperar el envio del form

function esperar(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};