"use strict"
let oPersona, oPersonaII, oProfesor;
class Persona {
    //constructor
    constructor(nom, apel, anios) {
        this.nombre = nom;
        this.apellidos = apel;
        this.edad = anios;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(valor) {
        if (valor!="" && valor!=undefined)
          this._nombre = valor;
        else
          throw new Error("No puede estar vacío"); //generar un error para controlarlo con try ...catch
          
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(valor) {
        this._apellidos = valor;
    }
    get edad() {
        return this._edad;
    }
    set edad(valor) {
        if (valor <= 120){
            this._edad = valor;
        }else this._edad=18;
       
    }
    //funtiones
    mostrar() {
        return(`<h2>${this.nombre} ${this.apellidos} tiene ${this.edad} años</h2>`);
    }
}

//
try{
    oPersona=new Persona("María", "López");
    document.write(oPersona.mostrar());
}catch (e){
    document.write(e);
}





