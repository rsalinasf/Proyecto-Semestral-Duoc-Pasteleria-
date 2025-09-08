const formLogin = document.getElementById('formLogin');
const formRegister = document.getElementById('formRegister');
const emailL = document.getElementById('emailL');
const passL = document.getElementById('passL');
const nombreR = document.getElementById('nombreR');
const emailR = document.getElementById('emailR');
const passR = document.getElementById('passR');

// Validaciones para el formulario de Login y Registro ( Keyup )

emailL.addEventListener('keyup', function(e){
    if(emailL.value.length < 8 || !emailL.value.includes("@")){
        emailL.classList.add("error")
    }else{
        emailL.classList.remove("error")
    }
});

passL.addEventListener('keyup', function(e){
    if(passL.value.length < 6){
        passL.classList.add("error")
    }else{
        passL.classList.remove("error")
    }
});

nombreR.addEventListener('keyup', function(e){
    if(nombreR.value.length < 5){
        nombreR.classList.add("error")
    }else{
        nombreR.classList.remove("error")
    }
});

emailR.addEventListener('keyup', function(e){
    if(emailR.value.length < 8 || !emailR.value.includes("@")){
        emailR.classList.add("error")
    }else{
        emailR.classList.remove("error")
    }
});

passR.addEventListener('keyup', function(e){
    if(passR.value.length < 6){
        passR.classList.add("error")
    }else{
        passR.classList.remove("error")
    }
});

// Validaciones para el Boton Submit de Login y Registro

formLogin.addEventListener("submit", async function(e){
    e.preventDefault();

    if(emailL.value.length < 8 || !emailL.value.includes("@")){
        mostrarMensaje("El email debe contener almenos 8 caracteres y un @!!")
    return
    }
    if(passL.value.length < 6){
        mostrarMensaje("La contraseña debe contener almenos 6 caracteres!!")
    return
    }

    mostrarMensaje("Inicio de sesión exitoso!!", "ok");
    await esperar(2000);
    formLogin.submit();
});

formRegister.addEventListener("submit", async function(e){
    e.preventDefault();

    if(nombreR.value.length < 5){
        mostrarMensaje("El nombre debe contener almenos 5 caracteres!!")
    return
    }
    if(emailR.value.length < 8 || !emailR.value.includes("@")){
        mostrarMensaje("El email debe contener almenos 8 caracteres y un @!!")
    return
    }
    if(passR.value.length < 6){
        mostrarMensaje("La contraseña debe contener almenos 6 caracteres!!")
    return
    }

    mostrarMensaje("Registro exitoso!!", "ok");
    await esperar(2000);
    formRegister.submit();
});


