"use strict"

import { Turno } from "./Turno.mjs";
import { Partida } from "./Partida.mjs";
export class Jugador{


    constructor(nombre,id){
        this._turnos=this._poblarTurnos();
        this._nombre=nombre;
        this._id=id;
    }

    _poblarTurnos(){
        let turnos=[];

        for(let i=0;i<Partida.nTurnos;i++){
            turnos.push(new Turno(this));
        }
        return turnos;
    }


    turnoDisponible(){
        let disponibles=this._turnos.filter(turno=>turno.estaDisponible());
        if(disponibles.length>0){
            return disponibles[0];//primero disponible
        }
        return false;
    }

    get nombre(){
        return this._nombre;
    }

    get id(){
        return this._id;
    }

    get turnos(){
        return this._turnos;
    }

    set id(id){
        this._id=id;
    }

}