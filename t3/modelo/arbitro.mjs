"use strict"
import {Participante} from "./participante.mjs"
export class Arbitro extends Participante {
 
    constructor(nombre, provincia, anioFederado) {
        super(nombre, provincia);
        this._anioFederado = this._validarAñoFederado(anioFederado);
    }
    get anioFederado() {
        return this._anioFederado;
    }
   
    set anioFederado(anioFederado) {
        this._anioFederado = this._validarAñoFederado(anioFederado);
    }

    toString() {
        return "Nombre: "+ super.nombre+" Provincia: "  +  super.provincia +" Año federado: "+this.anioFederado;
    }

     _validarAñoFederado(anioFederado) {
        
        if (!isNaN(anioFederado) && anioFederado!=""&&anioFederado <= 2021) {
            return anioFederado;
        } else {
            throw new Error("Año federado no válido");
        }
    }


}
