"use strict"

window.addEventListener("load", function () {
  titulo.focus();//tambien con el atributo autofocus en el input del formulario
  mensajeError(titulo, "Debe tener entre 5 y 50 caracteres, no admite caracteres especiales");
  mensajeError(ponente, "Debe tener entre 10 y 45 caracteres, no admite caracteres especiales");
  if (isPresentCookie()) {
    document.getElementById("tabla-titulo").innerHTML = getCookie("titulo");
    document.getElementById("tabla-descripcion").innerHTML = getCookie("descripcion");
    document.getElementById("tabla-ponente").innerHTML = getCookie("ponente");
    document.getElementById("tabla-categoria").innerHTML = getCookie("categoria");
    document.getElementById("tabla-aforo").innerHTML = getCookie("aforo");
    eliminarCookies();
    tabla.style.display = "block";
  }
}, false);

formulario.addEventListener("submit", function (e) {
  setCookie(titulo.value, descripcion.value, ponente.value, categoria.value, aforo.value);
}, false);

formulario.addEventListener("reset", function (e) {
  tabla.style.display = "none";
  titulo.focus();
}, false);

function setCookie(titulo, descripcion, ponente, categoria, aforo) {
  document.cookie = `titulo=${titulo}`;
  document.cookie = `descripcion=${descripcion}`;
  document.cookie = `ponente=${ponente}`;
  document.cookie = `categoria=${categoria}`;
  document.cookie = `aforo=${aforo}`;
}

function isPresentCookie() {
  //comprobamos datos requeridos
  return getCookie("titulo") != "" && getCookie("ponente") != "" &&
    getCookie("categoria") != "" && getCookie("aforo") != "";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function eliminarCookies() {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (new Date("1-1-2000")).toUTCString() + ";");
  });
}

function mensajeError(input, mensaje) {
  if (!input.validity.valid) {
    input.setCustomValidity(mensaje);
  } else {
    input.setCustomValidity("");
  }
}