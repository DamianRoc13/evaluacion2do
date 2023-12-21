"use strict";

function Estudiante(nombre, correo, promedio) {
  this.nombre = nombre;
  this.correo = correo;
  this.promedio = promedio;
  function validarPromedio(Estudiante) {
    if (Estudiante.promedio >= 70) {
      return "Aprobado";
    } else {
      return "Reprobado";
    }
  }
}
function obtenerUsuario() {
  let email = this.correo;
  let post = email.indexOF("@");
  let usuario = email.substring(0, post);
  return usuario;
}

let damian = new Estudiante("Damian", "Damianolivo2018@gmail.com", 50);
alert(damian.validarPromedio());
alert(damian.obtenerUsuario());
