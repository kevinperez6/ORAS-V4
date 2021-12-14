// const { disable } = require("express/lib/application");

// const e = require("express");

//Formulario
const formulario = document.querySelector("#enviar-email");
const expresionRPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
// Variables de Campos
const password = document.querySelector("#password");
const newpassword = document.querySelector("#newPassword");
const confirma = document.querySelector("#confirma");
const btnConfirm = document.querySelector("#btnConfirm");
const btnCancel = document.querySelector("#btnCancel");


//Eventos

eventListener();
function eventListener(e){
    //Campos del formulario
    document.addEventListener('DOMContentLoaded',startApp);
    password.addEventListener('blur',validateForm);
    confirma.addEventListener('blur',validateForm);
    newpassword.addEventListener('blur',validateForm);
    
}

function startApp(){
    btnConfirm.disabled = true;
    btnConfirm.classList.add("not-allowed", "opacity") 
}

function validateForm(e){
    if(e.target.value.length > 0){
        // e.target.classList.remove("is-invalid");
        e.target.classList.add("campos");
    } else {
        // e.target.classList.remove("campos");
        e.target.classList.add("is-invalid");
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'password'){ // Seleccion del typo email
        if(expresionRPassword.test(e.target.value)){//Validacion expresion regular
            console.log('Email valido')
        }else{
            e.target.classList.add("is-invalid");
            mostrarError("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no especial. ")
        }
    }
}


//Alertas de error
function mostrarError(mensaje){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje// Contenido de la etiqueta
    mensajeError.classList.add('-error', 'error');// Se agrega la clase error

    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
        formulario.appendChild(mensajeError);// Se Inserta la etiqueta HTML si no existe  
    }
}



//target.value: retorna los valores que el usurio escribio
//blur: se ejecuta cuando se sale del campo antes seleccionado