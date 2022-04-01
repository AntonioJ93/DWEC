"use strict"

import { Turno } from "./Turno.mjs";

export class Tirada{

    constructor(bolos){
        this._bolos=bolos;
        this._disponible=true;
        this._bolosTirados=0;
        
    }

    set bolos(bolos){
        this._bolos=bolos;
    }

    estaDisponible(){
        return this._disponible;
    }

    get bolosTirados(){
        return this._bolosTirados;
    }

    tirarBolosRandom(){
        let bolosRestantes=bolos.filter(bolo=>bolo.estaDePie());
        this._bolosTirados= Math.round(Math.random()*(bolosRestantes));
        this._disponible=false;
        this._setearBolosTirados();
        return this._bolos;
    }

    _setearBolosTirados(){
         
         let contador=1;
         for(let bolo of this._bolos){
             if(bolo.estaDePie()&&contador<=this._bolosTirados){
                 bolo.derrivar();
                 contador++
             }
         }
    }
}