"use strict"; //declaraciones

var fila, frmDialog;
var botAcc = "<button type='button' class='edit btn btn-primary m-2'><i class='fas fa-edit'></i></button><button type='button' class='del btn btn-danger'><i class='fas fa-trash-alt'></i></button>";
$(function () {
  configForm();
  confgValidForm();
  $("#add").on("click", addReg);
  $("#cancelar").on("click", cancela);
  cargarPerros();
});

var cargarPerros = function cargarPerros() {
  fetch("php/mostrarPaginador.php").then(function (response) {
    return response.json();
  }).then(function (datos) {
    //cargar los datos en la tabla del body
    $("tbody").empty();
    $(datos.data).each(function (ind, fila) {
      $("tbody").append("<tr><td>".concat(fila.chip, "</td><td>").concat(fila.nombre, "</td><td>").concat(fila.raza, "</td><td>").concat(fila.fechaNac, "</td><td>").concat(botAcc, "</tr>"));
    }); //funcionalidad a los botones

    $(".edit").on("click", editarReg);
    $(".del").on("click", delReg);
  })["catch"](function (error) {
    Swal.fire("Error" + error.status);
  });
};

function editarReg() {
  console.log("editar");
  frmDialog.dialog("option", "title", "Modificar perro");
  frmDialog.dialog("open");
  fila = $(this).parents("tr"); //pasar los campos de la tabla al formulario

  $("#chip").prop("readonly", true);
  $("#chip").val($(fila).find("td:nth-child(1)").text());
  $("#nombre").val($(fila).find("td:nth-child(2)").text());
  $("#raza").val($(fila).find("td:nth-child(3)").text());
  $("#fechaN").val($(fila).find("td:nth-child(4)").text()); //modificar el nombre del botón

  $(":submit").text("Modificar");
}

function delReg() {
  //extraer la fila donde se ha realizado click del botón eliminar
  fila = $(this).parents("tr");
  console.log(fila);
  Swal.fire({
    title: "\xBFDesea eliminar el registro?",
    text: "Chip->".concat($(fila).find("td:first").text()),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
    focusCancel: true
  }).then(function (result) {
    if (result.isConfirmed) {
      //eliminar
      var xmlHttp = crearConexion();

      if (xmlHttp != undefined) {
        //preparar la conexión
        xmlHttp.open("POST", "php/eliminar.php", true);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            //comunicación servidor ok
            mensaje("Registro eliminado", "success", "#D5F5E3"); //borrar la fila de la tabla html

            $(fila).remove();
          }
        };

        xmlHttp.send("chip=".concat($(fila).find("td:first").text()));
      }
    }
  });
}

function addReg() {
  //título
  frmDialog.dialog("option", "title", "Insertar perro");
  frmDialog.dialog("open");
  $(":submit").text("Añadir");
}

var configForm = function configForm() {
  //configurar la ventana del formulario de añadir
  frmDialog = $(".form-horizontal").dialog({
    autoOpen: false,
    height: 700,
    width: 500,
    resizable: false,
    modal: true
  });
};

var confgValidForm = function confgValidForm() {
  //añadir un nuevo método para validar
  $.validator.addMethod("regex", function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  });
  $(".form-horizontal").validate({
    //estilo
    errorElement: "em",
    //Lugar donde vamos a mostrar el error
    errorPlacement: function errorPlacement(error, element) {
      error.addClass("invalid-feedback");
      error.insertAfter(element);
    },
    //borde al elemento erróneo
    highlight: function highlight(element) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    //borde elemento correcto
    unhighlight: function unhighlight(element) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    //reglas
    rules: {
      chip: {
        required: true,
        minlength: 4,
        maxlength: 14
      },
      nombre: {
        required: true,
        regex: /^[a-zñá-ú\s]{4,30}$/i
      },
      raza: {
        required: true,
        minlength: 3,
        maxlength: 20
      },
      fechaN: {
        required: true,
        date: true
      }
    },
    messages: {
      chip: {
        required: "El chip del perro es obligatorio",
        minlength: "Mínimo 4 caract.",
        maxlength: "Máximo 14 caract."
      },
      nombre: {
        required: "El nombre del perro es obligatorio",
        regex: "Formato incorrecto"
      }
    },
    submitHandler: function submitHandler() {
      //el evento submit del botón añadir
      //añadir registro en tabla
      if ($(":submit").text() == "Añadir") {
        grabarPerro();
      } else {
        modificarPerro();
      }
    }
  });
};

var grabarPerro = function grabarPerro() {
  $.ajax({
    url: "php/insertar.php",
    type: "POST",
    data: {
      chip: $("#chip").val(),
      nombre: $("#nombre").val(),
      raza: $("#raza").val(),
      fechaN: $("#fechaN").val()
    }
  }).done(function (responseText, error) {
    if (responseText.mensaje == "success") {
      mensaje("Registro grabado", "success", "#D5F5E3");
      $("tbody").append("<tr><td>".concat($("#chip").val(), "</td><td>").concat($("#nombre").val(), "</td><td>").concat($("#raza").val(), "</td><td>").concat($("#fechaN").val(), "</td><td>").concat(botAcc, "</tr>"));
      $(".edit:last").on("click", editarReg);
      $(".del:last").on("click", delReg);
      cancela();
    } else {
      mensaje("Error, posible duplicado", "error", "#FADBD8");
    }
  }).fail(function (responseText, textStatus, xhr) {
    mensaje(textStatus.error, "error", "#FADBD8");
  });
};

var modificarPerro = function modificarPerro() {
  var parametros = $(".form-horizontal").serialize();
  console.log(parametros);
  fetch("php/editar.php", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: parametros
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw response; //genera un error
    }
  }).then(function (datos) {
    if (datos.mensaje == "success") {
      mensaje("Registro modificado", "success", "#D5F5E3");
      $(fila).find("td:nth-child(1)").text($("#chip").val());
      $(fila).find("td:nth-child(2)").text($("#nombre").val());
      $(fila).find("td:nth-child(3)").text($("#raza").val());
      $(fila).find("td:nth-child(4)").text($("#fechaN").val());
      cancela();
    } else {
      mensaje("Error al modificar el registro", "error", "#FADBD8");
    }
  })["catch"](function (error) {
    Swal.fire("Error" + error.status);
  });
};

var cancela = function cancela() {
  frmDialog.dialog("close");
  $("#chip").prop("readonly", false);
  $(".form-control").val(""); //limpiar cajas de texto
  //quitar la clases de jquery-validator

  $(".form-control").removeClass("is-valid").removeClass("is-invalid");
};

var mensaje = function mensaje(texto, icono, color) {
  var notificacion = Swal.mixin({
    position: 'top-end',
    toast: true,
    showConfirmButton: false,
    timer: 1500,
    background: color
  });
  notificacion.fire({
    icon: icono,
    title: texto
  });
};
