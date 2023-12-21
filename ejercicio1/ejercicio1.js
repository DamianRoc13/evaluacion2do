"use strict";

function Estudiante(nombre, correo, promedio) {
  this.nombre = nombre;
  this.correo = correo;
  this.promedio = promedio;
  this.validarPromedio = function () {
    if (this.promedio >= 70) {
      return "Aprobado";
    } else {
      return "Reprobado";
    }
  };
  this.obtenerUsuario = function () {
    let email = this.correo;
    let post = email.indexOf("@");
    let usuario = email.substring(0, post);
    return usuario;
  };
}

let damian = new Estudiante("Damian", "Damianolivo2018@gmail.com", 50);
alert(damian.validarPromedio());
alert(damian.obtenerUsuario());
