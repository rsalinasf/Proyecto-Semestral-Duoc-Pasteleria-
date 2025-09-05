
// JavaScript para el Carousel

let slides = document.querySelectorAll(".slide");
let track = document.querySelector(".slides");
let dotsContainer = document.querySelector(".dots");
let index = 0;

for (let i = 0; i < slides.length; i++) {
  let span = document.createElement("span");
  if (i == 0) {
    span.classList.add("active");
  }
  dotsContainer.appendChild(span);
}

let dots = document.querySelectorAll(".dots span");

function cambiarSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  track.style.transform = "translateX(-" + (index * 100) + "%)";
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[index].classList.add("active");
}

setInterval(cambiarSlide, 4500);


// Mensaje de Error

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


// Validaciones para el formulario de contactoCita ( Keyup )

const formularioCita = document.getElementById('formularioCita');
const nombreC = document.getElementById('nombreC');
const telefonoC = document.getElementById('telefonoC');
const emailC = document.getElementById('emailC');
const smsC = document.getElementById('smsC');


nombreC.addEventListener('keyup', function(e){
    if(nombreC.value.length < 5){
        nombreC.classList.add("error")
    }else{
        nombreC.classList.remove("error")
    }
});

telefonoC.addEventListener('keyup', function(e){
    if(telefonoC.value.length < 8){
        telefonoC.classList.add("error")
    }else{
        telefonoC.classList.remove("error")
    }
});

emailC.addEventListener('keyup', function(e){
    if(emailC.value.length < 8 || !emailC.value.includes("@")){
        emailC.classList.add("error")
    }else{
        emailC.classList.remove("error")
    }
});

smsC.addEventListener('keyup', function(e){
    if(smsC.value.length < 10){
        smsC.classList.add("error")
    }else{
        smsC.classList.remove("error")
    }
});



// Validaciones para el Boton Submit




formularioCita.addEventListener("submit", async function(e){
    e.preventDefault();

    if(nombreC.value.length < 5){
        mostrarMensaje("El nombre debe contener almenos 5 caracteres!!")
    return
    }
    if(telefonoC.value.length < 8){
        mostrarMensaje("El telefono debe contener almenos 8 caracteres!!")
    return
    }
    if(emailC.value.length < 8 || !emailC.value.includes("@")){
        mostrarMensaje("El email debe contener almenos 8 caracteres y un @!!")
    return
    }
    if(smsC.value.length < 10){
        mostrarMensaje("El mensaje debe contener almenos 10 caracteres!!")
    return
    }

    mostrarMensaje("Formulario enviado con éxito!!", "ok");
    await esperar(2000);
    formularioCita.submit();


});


const login    = document.getElementById('modal-login');
const register = document.getElementById('modal-register');

function openModal(m){
  m?.classList.add('is-open');
  document.body.classList.add('modal-open');
  m?.querySelector('input')?.focus();
}
function closeModal(m){
  m?.classList.remove('is-open');
  if(!document.querySelector('.modal.is-open')){
    document.body.classList.remove('modal-open');
  }
}

// Triggers (si existen en tu página)
document.getElementById('openLogin')?.addEventListener('click', e=>{
    e.preventDefault(); 
    openModal(login); 
});

document.getElementById('openRegister')?.addEventListener('click', e=>{ 
    e.preventDefault(); 
    openModal(register); 
});

// Cambios entre modales desde los enlaces internos
document.getElementById('goRegister')?.addEventListener('click', e=>{ 
    e.preventDefault(); 
    closeModal(login);   
    openModal(register); 
});

document.getElementById('goLogin')?.addEventListener('click', e=>{ 
    e.preventDefault(); 
    closeModal(register); 
    openModal(login); 
});

// Cerrar con backdrop o botón X (usa data-close en ambos)
document.querySelectorAll('.modal [data-close]').forEach(el=>{
  el.addEventListener('click', ()=> closeModal(el.closest('.modal')));
});

// Cerrar con ESC
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape'){
    document.querySelectorAll('.modal.is-open').forEach(m=>closeModal(m));
  }
});
