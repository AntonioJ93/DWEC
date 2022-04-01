"use strict"

import { Jugador } from "./Jugador.mjs";
import { Partida } from "./Partida.mjs";
import { Turno } from "./Turno.mjs";
let partida = new Partida(new Jugador("Antonio", 1)
    , new Jugador("Sara", 2)
);

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