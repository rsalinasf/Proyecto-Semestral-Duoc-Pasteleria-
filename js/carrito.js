
function tieneClase(el, nombre) {
  return (' ' + el.className + ' ').indexOf(' ' + nombre + ' ') > -1;
}
function agregarClase(el, nombre) {
  if (!tieneClase(el, nombre)) {
    if (el.className === '') el.className = nombre;
    else el.className += ' ' + nombre;
  }
}
function quitarClase(el, nombre) {
  var clases = el.className.split(' ');
  var nuevas = [];
  for (var i = 0; i < clases.length; i++) {
    if (clases[i] !== nombre && clases[i] !== '') nuevas.push(clases[i]);
  }
  el.className = nuevas.join(' ');
}

var btnAbrir = document.getElementById('btnAbrirCarrito');
var btnCerrar = document.getElementById('btnCerrarCarrito');
var panel = document.getElementById('carritoMini');

btnAbrir.onclick = function () {
  if (tieneClase(panel, 'oculto')) quitarClase(panel, 'oculto');
  else agregarClase(panel, 'oculto');
};
btnCerrar.onclick = function () {
  agregarClase(panel, 'oculto');
};


var countEl = document.getElementById('cartCount');
var lista = document.getElementById('carritoLista');
var totalEl = document.getElementById('carritoTotal');
var vacioP = document.getElementsByClassName('carrito-vacio')[0];

var count = 0;
var total = 0;


function formateaCLP(n) {
  return '$' + n; 
}


var addBtns = document.getElementsByClassName('btn-agregar');
for (var i = 0; i < addBtns.length; i++) {
  addBtns[i].onclick = function () {
    var nombre = this.getAttribute('data-nombre') || 'Producto';
    var precio = parseInt(this.getAttribute('data-precio') || '0', 10);
    var img = this.getAttribute('data-img') || '';


    var li = document.createElement('li');
    li.className = 'carrito-item';

    var imgEl = document.createElement('img');
    imgEl.src = img;
    imgEl.alt = nombre;

    var info = document.createElement('div');
    var b = document.createElement('b');
    b.appendChild(document.createTextNode(nombre));
    var priceDiv = document.createElement('div');
    priceDiv.className = 'carrito-precio';
    priceDiv.appendChild(document.createTextNode(formateaCLP(precio)));
    info.appendChild(b);
    info.appendChild(priceDiv);

    var btnQuitar = document.createElement('button');
    btnQuitar.className = 'carrito-quitar';
    btnQuitar.appendChild(document.createTextNode('Quitar'));

    li.appendChild(imgEl);
    li.appendChild(info);
    li.appendChild(btnQuitar);
    lista.appendChild(li);


    count = count + 1;
    total = total + precio;
    countEl.innerHTML = count;
    totalEl.innerHTML = formateaCLP(total);
    vacioP.style.display = 'none';
    quitarClase(panel, 'oculto'); 

   
    btnQuitar.onclick = function () {
      lista.removeChild(li);
      count = count - 1;
      total = total - precio;
      if (count < 0) count = 0;
      if (total < 0) total = 0;
      countEl.innerHTML = count;
      totalEl.innerHTML = formateaCLP(total);
      if (lista.children.length === 0) {
        vacioP.style.display = 'block';
      }
    };
  };
}