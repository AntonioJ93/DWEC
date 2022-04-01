"use strict"
let oPersona, oPersonaII, oProfesor;
function Persona(nom, ape, anios){
    //propiedades
    this.nombre=nom;
    this.apellidos=ape;
    this.edad=anios;

     //functiones
     this.mostrar=()=>{
         return `<h2>${this.nombre} ${this.apellidos} tiene ${this.edad} años</h2>`;
     }
}
//añadir un método
Persona.prototype.mostrarMasInfo=()=>{
   return "<br><h3> Podemos añadir más funcionalidad a la clase base</h3>";
}
//clase que hereda de Persona
function Profesor (nom, ape, anios,espec,fechaA){
    //establecer los parámetros a la clase padre
    Persona.call(this,nom,ape,anios);
    //establecer los parámetros de la propia clase profesor
    this.especialidad=espec;
    this.fechaAlta=fechaA;

    //establecer los métodos propios de la clase
    this.mostrarPropProf=function(){
       return `<h3>La especialidad es ${this.especialidad} y la fecha de alta es ${this.fechaAlta}`;
    }
}
Profesor.prototype=new Persona(); //Establecer la herencia a la clase Profesor

//script
//crear el objeto
oPersona=new Persona("María", "López Pérez", 23);
document.write(oPersona.mostrar());
oPersona.nombre=prompt("Introduza nombre");
document.write (oPersona.mostrar());
//nuevo
oPersonaII= new Persona();
oPersonaII.nombre=prompt("Introduza nombre");
oPersonaII.apellidos=prompt("Introduza apellidos");
oPersonaII.edad=prompt("Introduza edad");
document.write(oPersonaII.mostrar());
document.write(oPersonaII.mostrarMasInfo());
// crear objetos de la clase Profesor


oProfesor=new Profesor();
oProfesor.nombre="Marta";
oProfesor.apellidos="Cano";
oProfesor.edad=23;
oProfesor.especialidad="Informática";
oProfesor.fechaAlta="21/10/2020";
//mostrar los datos
document.write(oProfesor.mostrar());
document.write(oProfesor.mostrarPropProf());
