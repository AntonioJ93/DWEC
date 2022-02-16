"use strict"

////////////////////////////
//
//  El ejercicio no pide estos eventos solo cuando hagas submit
//
////////////////////////////
nombre.addEventListener("blur", function (e) {
    pasarAMayusculas(e.target);
    relleno(e.target);
}, false);

apellidos.addEventListener("blur", function (e) {
    pasarAMayusculas(e.target);
    relleno(e.target);
}, false);

anno.addEventListener("input", function () {
    validarAnno();
}, false);

usuario.addEventListener("input", function () {
    validarNombreUsuario();
}, false);


pass.addEventListener("input", function () {
    validarPass();
}, false);

passConfirm.addEventListener("input", function () {
    validarPassConfirm();
}, false);

let checks = formulario.querySelectorAll("input[name=jornada]");
checks.forEach(check => check.addEventListener("change", function () {
    validarJornada();
}, false))

/*
    SUBMIT
*/
formulario.addEventListener("submit", function (e) {

    if (relleno(nombre) && relleno(apellidos)
        && validarAnno() && validarNombreUsuario()
        && validarPass() && validarPassConfirm()
        && validarJornada()) {
        let labelsJornadas = [];
        let jornadas = formulario.querySelectorAll("input[type=checkbox]:checked")
        jornadas.forEach((jornada) => {
            //recuperamos el texto de los labels de los checkbox
            labelsJornadas.push(jornada.nextSibling.nextSibling.textContent);

        });
        console.log(labelsJornadas);
        if (!confirm(`Desea enviar el formulario con:\nNombre: ${nombre.value}\nApellidos: ${apellidos.value}\nAño: ${anno.value}\nContraseña: ${pass.value}\nConfirmar Contraseña: ${passConfirm.value}\nJornadas:${labelsJornadas}`)) {
            //cancelas
            e.preventDefault();
            return;
        }
        //aceptas y se envia
        return;
    }
    //datos no válidos
    e.preventDefault();
}, false);

/*
    RESET
*/
formulario.addEventListener("reset", function () {
    resetError();
}, false);


/* input apellidos y nombre en mayusculas*/
function pasarAMayusculas(elemento) {
    let txt = elemento.value;
    elemento.value = txt.toUpperCase();
}

/* campo relleno */
function relleno(elemento) {
    let error = elemento.parentNode.querySelector(".error");
    if (elemento.value.trim() != "") {
        error.innerHTML = "";
        elemento.classList.remove("input-error");
        return true;
    }
    error.innerHTML = "El campo no puede estar vacio";
    elemento.classList.add("input-error");
    return false;
}

/* año de nacimiento entre 1957 y 2003 */
function validarAnno() {
    const MIN_ANNO = 1957;
    const MAX_ANNO = 2003;
    let regexAno = /^(19[5-9][7-9]|200[0-3])$/;
    let error = anno.parentNode.querySelector(".error");
    if (regexAno.test(anno.value)) {
        //rango correcto
        error.innerHTML = "";
        anno.classList.remove("input-error");
        return true;
    }
    error.innerHTML = "El año debe estar comprendido entre " + MIN_ANNO + " y " + MAX_ANNO;
    anno.classList.add("input-error");
    return false;
}

/*
    VALIDAR USUAIRO
*/

function validarNombreUsuario() {
    const MIN_USER_LENGTH = 5;
    const MAX_USER_LENGTH = 15;
    let regexUsuario = /^[B-DF-HJ-NP-TV-Z][\wäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ]{4,14}$/;
    let error = usuario.parentNode.querySelector(".error");
    console.log(usuario.value);
    if (regexUsuario.test(usuario.value)) {
        error.innerHTML = "";
        usuario.classList.remove("input-error");
        return true;
    }
    error.innerHTML = `Sólo caracteres alfanúmericos, "_" y estar entre ${MIN_USER_LENGTH} y ${MAX_USER_LENGTH}`;
    usuario.classList.add("input-error");
    return false
}

/*
    VALIDAR PASSSWORD
*/

function validarPass() {
    //cualquier caracter par, signos una letra matuscula palabra pss excluida
    let patronPass = /^(?=.*[02468])(?=.*[$&@#])(?=.*[A-Z])(?!.*pass.*)\S{8,20}$/;
    let error = pass.parentNode.querySelector(".error");
    if (patronPass.test(pass.value)) {
        //pass ok
        error.innerHTML = "";
        pass.classList.remove("input-error");
        return true;
    }
    //pass mala
    error.innerHTML = `La contraseña no es válida`;
    pass.classList.add("input-error");
    return false;


}

function validarPassConfirm() {
    let error = passConfirm.parentNode.querySelector(".error");
    if (passConfirm.value == pass.value) {
        //pass ok
        error.innerHTML = "";
        passConfirm.classList.remove("input-error");
        return true;
    }
    //pass mala
    error.innerHTML = `La contraseña no coincide`;
    passConfirm.classList.add("input-error");
    return false;

}

function validarJornada() {
    let check = formulario.querySelectorAll("input[type=checkbox]:checked");
    if (check.length > 0 && check.length <= 3) {
        jornadaError.innerHTML = "";
        return true;
    }
    jornadaError.innerHTML = "Debes seleccionar entre 1 y 3 jornadas"
    return false;
}

function resetError() {
    let errores = formulario.querySelectorAll(".error");
    errores.forEach(error => error.innerHTML = "");
    let inputsErrores = formulario.querySelectorAll(".input-error");
    inputsErrores.forEach(input => input.classList.remove("input-error"));
}