


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

