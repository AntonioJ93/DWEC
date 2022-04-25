"use strict"

import { Bolo } from "./Bolo.mjs";
import { Jugador } from "./Jugador.mjs";
import { Partida } from "./Partida.mjs";
import { Tirada } from "./Tirada.mjs";
import { Turno } from "./Turno.mjs";
let partida;

if (localStorage.getItem("partida") == null||localStorage.getItem("partida") == undefined) {
    partida = new Partida(new Jugador("Antonio", 1)
        , new Jugador("Sara", 2)
    );
    localStorage.setItem("partida",JSON.stringify(partida));
}else{
    partida=recuperarPartidaLocalStorage();
}

comenzar.addEventListener("submit", function (e) {
    e.preventDefault();
    comenzarDisabled();
    let jugador = partida.jugadorInicioPartida();
    let turno = jugador.turnoDisponible();
    if (turno) {
        turno.render();
    } else {
        jugador = partida.cambiarJugador(jugador);
    }

    alert("fin");

    //guardar objetos en localstorage
});

function comenzarDisabled() {
    comenzarBtn.disabled = true;
}

function recuperarPartidaLocalStorage(){
    let partidaLocalStorage=partida=JSON.parse(localStorage.getItem("partida"));
    let turnosJ1=[];
    let turnosJ2=[];
    partidaLocalStorage._jugadores[0]._turnos.forEach(t => {
        let bolos=[];
        let tiradas=[];
        t._bolos.forEach(b=>{
            bolos.push(new Bolo(b._img,b._dePie))
        });
        t._tiradas.forEach(tira=>{
            tiradas.push(new Tirada(bolos,tira._disponible,tira._bolosTirados));
        });
        turnosJ1.push(new Turno(partidaLocalStorage._jugadores[0]._id,bolos,tiradas));
    });

    partidaLocalStorage._jugadores[1]._turnos.forEach(t => {
        let bolos=[];
        let tiradas=[];
        t._bolos.forEach(b=>{
            bolos.push(new Bolo(b._img,b._dePie))
        });
        t._tiradas.forEach(tira=>{
            tiradas.push(new Tirada(bolos,tira._disponible,tira._bolosTirados));
        });
        turnosJ2.push(new Turno(partidaLocalStorage._jugadores[1]._id,bolos,tiradas));
    });
    
    return new Partida
        (   new Jugador(partidaLocalStorage._jugadores[0]._nombre,partidaLocalStorage._jugadores[0]._id,
                turnosJ1),
            new Jugador(partidaLocalStorage._jugadores[1]._nombre,partidaLocalStorage._jugadores[0]._id,
                turnosJ2)
        );
}
