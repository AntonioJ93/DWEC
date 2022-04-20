"use strict"

import {Jugador} from "./Jugador.mjs";
export class Partida{

    
    _nodoPadreDivBolos=document.getElementsByTagName("main")[0];//el main
    _rowId="bolos";
    _cssClassRow="row";

    static get nTurnos(){
        return 5;//num turnos por jugador
    }

    constructor(jugador1,jugador2){
        this._jugadores=[
            jugador1,
            jugador2
        ]
        this.renderRow();
    }

    get jugadores(){
        return this._jugadores;
    }

    jugadorInicioPartida(){
        return this._jugadores[Math.round(Math.random())];
    }

    cambiarJugador(jugadorActual){
        return this._jugadores.filter(jug=>jug.id!=jugadorActual.id)[0];
    }

   _crearRow(){
        let row = document.createElement("div");
        row.classList.add(this._cssClassRow);
        row.id = this._rowId;
        return row;
    }

    renderRow(){
        this._nodoPadreDivBolos.appendChild(this._crearRow());
    }

   

}