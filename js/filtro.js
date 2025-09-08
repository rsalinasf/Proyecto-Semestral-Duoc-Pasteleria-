var botones = document.querySelectorAll('#catalogo .filtro');
var productos = document.querySelectorAll('#catalogo .producto');

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function () {
    for (var j = 0; j < botones.length; j++) {
      botones[j].classList.remove('activo');
    }

    this.classList.add('activo');

    var tipo = this.getAttribute('data-filtro');

    for (var k = 0; k < productos.length; k++) {
      var tipos = productos[k].getAttribute('data-tipo');
      if (tipo === 'todo' || tipos.indexOf(tipo) !== -1) {
        productos[k].style.display = '';
      } else {
        productos[k].style.display = 'none';
      }
    }
  });
}