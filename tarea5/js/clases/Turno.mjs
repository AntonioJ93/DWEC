"use strict"

import { Tirada } from "./Tirada.mjs";
import { Bolo } from "./Bolo.mjs";
export class Turno {

    _maxTiradas = 2;
    _numBolos = 10;
    _imgPelota = "./img/bola.webp";


    static maxBolos() {
        return _numBolos
    }

    constructor(jugador) {
        this._bolos = this._poblarBolos();
        this._tiradas = this._poblarTiradas();
        this._jugador = jugador;
        this._disponible = true;

    }

    render() {
        this._resetLabels();
        this._colorearLabels();
        this._resetBola();
        this._mostrarPelota();
        this.renderBolos();
    }



    tirar() {
        let tirada = this._tiradas.filter(tirada => tirada.estaDisponible())[0];
        if (tirada != undefined) {
            tirada.bolos = this._bolos;
            this._bolos = tirada.tirarBolosRandom();
        }
        if (this.bolosDePie() == 0 && this._tiradas[0] == tirada) {
            //pleno
            alert("Pleno");
            this._tiradas[1].disponible = false;
            this._tiradas[1].bolos = [];//reset bolos
        }

        //let tirados = bolosTiradosRandom();
        alert("has tirado " + bolosDePie().length + " bolo(s)");
        /*let item = document.createElement("div");
        item.classList.add("item");
        let img = document.createElement("img");
        img.setAttribute("src", "./img/boloTirado.jpg");
        img.classList.add("bolo");
        item.appendChild(img);*/

        this.refrescarVistaBolos();
        if (tirada==undefined) {
            //no te quedan tiradas
            this._disponible=false;
            
        }

    }

    refrescarVistaBolos() {
        for (let bolo of this._bolos) {
            bolo.refrescarVista();
        }
    }


    renderBolos() {
        for (let bolo of this._bolos) {
            bolo.render();
        }
    }



    _poblarBolos() {
        let bolos = [];

        for(let i=0;i<this._numBolos;i++){
            bolos.push(new Bolo());
        }
        return bolos;
    }

    _poblarTiradas() {

        let tiradas = [];

        for(let i=0;i<this._maxTiradas;i++){
            tiradas.push(new Tirada(this._bolos));
        }
        return tiradas;
    }

    _colorearLabels() {
        //añadir color
        let row = this._rowActiva();
        let labelsactivas = row.getElementsByTagName("label");
        for (let label of labelsactivas) {
            label.classList.add("activo");
        }
        //se lo quitamos a la primera
        labelsactivas[0].classList.remove("activo");
    }

    _resetLabels() {
        //reset color
        let labels = document.getElementsByTagName("label");
        // console.log("labels a desactivar");
        for (let label of labels) {
            label.classList.remove("activo");
        }
    }

    _rowActiva() {
        return document.getElementById("jugador" + this._jugador.id);
    }

    _mostrarPelota() {
        let row = this._rowActiva();
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", this._imgPelota);
        img.classList.add("bola");
        img.addEventListener("click", this.tirar);
        div.classList.add("item");
        div.id = "bola";
        row.appendChild(div);
        div.appendChild(img);
    }

    _resetBola() {
        //console.log(document.getElementById("bola"));
        if (document.getElementById("bola") != null) {
            let row = bola.parentNode;
            row.removeChild(bola);
        }
    }

    bolosDePie() {
        return this._bolos.filter(bolo => bolo.estaDePie());
    }

    bolosTirados() {
        return this._bolos.filter(bolo => !bolo.estaDePie());
    }

    estaDisponible() {
        return this._disponible;
    }

    set jugador(jugador) {
        this._jugador = jugador;
    }

    get jugador() {
        return this._jugador;
    }

    get tiradas() {
        return this._tiradas;
    }

}