"use strict"
import {Participante} from "./participante.mjs"
export class Jugador extends Participante {
   _FECHA_MINIMA = new Date("1979-1-1");
   _FECHA_MAXIMA = new Date("2011-12-31");

    constructor(nombre, provincia, fechaNac, dorsal, posicion) {
        super(nombre, provincia);
        this._fechaNac = this._validarFechNac(fechaNac);
        this._dorsal =this._validarDorsal(dorsal);
        this._posicion =  this._validarPosicion(posicion);

    }

    get fechaNac() {
        return this._fechaNac.toLocaleDateString("es-Es");
    }
    get dorsal() {
        return this._dorsal;
    }
    get posicion() {
        return this._posicion;
    }
    set fechaNac(fechaNac) {
        this._fechaNac = this._validarFechNac(fechaNac);
    }
    set dorsal(dorsal) {
        this._dorsal = this._validarDorsal(dorsal);
    }
    set posicion(posicion) {
        this._posicion = this._validarPosicion(posicion);
    }

    toString() {
        return `nombre: ${super.nombre} provincia: ${super.provincia} fecha de nacimiento ${this.fechaNac}
         dorsal ${this.dorsal} posicion ${this.posicion}`;
    }

     _validarFechNac(fechaNac) {
        fechaNac=new Date(fechaNac);
        if (fechaNac - this._FECHA_MINIMA >= 0 && fechaNac - this._FECHA_MAXIMA <= 0) {
            return fechaNac;
        } else {
            throw new Error("La fecha debe estar entre " + this._FECHA_MINIMA + " y " + this._FECHA_MAXIMA);
        }
    }

     _validarDorsal(dorsal) {

        if (!isNaN(dorsal) && dorsal >= 1 && dorsal <= 25) {
            return dorsal;
        } else if (!isNaN(dorsal)) {
            return 25;
        } else {
            throw new Error("Debe introducir un número");
        }
    }

     _validarPosicion(posicion) {

        switch (posicion) {
            case "a":
                return posicion;

            case "p":

                return posicion;
            case "b":

                return posicion;
            case "e":

                return posicion;
            case "ap":

                return posicion;

            default:
                throw new Error("Posición incorrecta");
             
        }
    }


}
