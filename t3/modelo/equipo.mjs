"use strict"
import {Jugador} from "./jugador.mjs";
export class Equipo {

    _aJugadores=[];

    constructor(nombreEquipo, ciudad, escudo, entrenador) {
        this._nombreEquipo=this._validarNombre(nombreEquipo);
        this._ciudad=this._validarCiudad(ciudad);
        this._escudo=this._validarEscudo(escudo);
        this._entrenador=this._validarNombreEntrenador(entrenador);
    }

    get nombreEquipo() {
        return this._nombreEquipo;
    }

    get ciudad() {
        return this._ciudad;
    }

    get escudo() {
        return this._escudo;
    }

    get entrenador() {
        return this._entrenador;
    }

    get jugadores() {
        return this._aJugadores;
    }
   
    set nombreEquipo(nombreEquipo) {
        this._nombreEquipo = this._validarNombre(nombreEquipo);
    }

    set ciudad(ciudad) {
        this._ciudad = this._validarCiudad(ciudad);
    }

    set escudo(escudo) {
        this._escudo = this._validarEscudo(escudo);
    }

    set entrenador(entrenador) {
        this._entrenador = this._validarNombreEntrenador(entrenador);
    }

    toString() {
        return `<table>
        <thead>
            <tr>
                <th> Nombre del equipo</th>
                <th> ciudad</th>
                <th>escudo</th>
                <th> entrenador</th>
            </tr>
            <tbody>
                <tr>
                    <td> ${this.nombreEquipo}  </td>
                    <td>${this.ciudad}</td>
                    <td><img src="${this.escudo}" alt="escudo" width="50px" /></td>
                    <td>${this.entrenador}</td>
                </tr>
            </tbody>
        </thead>
    </table>
    <h4>Jugadores</h4>
    <ul>
        <li>${this.jugadores[0]}</li>
        <li>${this.jugadores[1]}</li>
        <li>${this.jugadores[2]}</li>
        <li>${this.jugadores[3]}</li>
        <li>${this.jugadores[4]}</li>
    </ul>
    
    `;
    }

    _validarNombre(nombreEquipo){
      
        nombreEquipo=nombreEquipo.trim();
        if(nombreEquipo.length>0&&nombreEquipo!=undefined){
            return nombreEquipo.toUpperCase();
        }else{
            throw new Error("El nombre no puede estar vacio");
        }
    }

    _validarCiudad(ciudad){
      
        ciudad=ciudad.trim();
        if(ciudad.length>0&&ciudad!=undefined){
            ciudad.toLowerCase();
            //reemplaza la primera letra por mayuscula
            return ciudad.replace(/^\w/, (c) => c.toUpperCase()); 
            
        }else{
            throw new Error("La ciudad no puede estar vacia");
        }
    }

    _validarEscudo(escudo){
        escudo=escudo.trim();
        if(escudo.endsWith(".jpg")||escudo.endsWith(".png")){
            return escudo;
        }else{
           return "./img/escudo-default.jpg";
        }
    }

    _validarNombreEntrenador(entrenador){
      
        entrenador.trim();
        if(entrenador.length>=4&&entrenador!=undefined){
            return entrenador
        }else{
            throw new Error("El nombre del entrenador no puede tener menos de 4 caracteres");
        }
    }

    altaJugador(jugador) {
        let longitudInicial=this._aJugadores.length;
        let existe=false;
        if (jugador instanceof Jugador) {
            //recorremos el array y comprobamos el nombre
            this._aJugadores.forEach(element => {
                if(element.nombre==jugador.nombre){
                    existe=true;
                }
            });
            if(!existe){
                this._aJugadores.push(jugador);
            }
           
            return longitudInicial<this._aJugadores.length;
        } else {
            throw new Error("jugador no válido");
        }
    }

    eliminarJugador(nombre) {
        let longitudInicial=this._aJugadores.length;
        this._aJugadores.forEach(element => {
            if(element.nombre==nombre.toUpperCase()){
                //obtengo el indice y lo borro
                this._aJugadores.splice(this._aJugadores.indexOf(element), 1);
            }
        });      
            return longitudInicial>this._aJugadores.length;
       
    }

    ordenarJugDorsal(){  
        this._aJugadores.sort(function(a, b){return a.dorsal-b.dorsal});

    }

}


/*
let e=new Equipo("Córdoba","cordoba","Xxx","Pacooo");

console.log(e);
e.altaJugador(new Jugador("Mariano","Jaen","2000-2-10",22,"p"));
console.log(e);
e.altaJugador(new Jugador("xxxxxxx","Jaeasrtn","2005-4-10",12,"p"));
e.altaJugador(new Jugador("asdad","Jaeasrtn","2000-4-10",12,"a"));
e.altaJugador(new Jugador("xxxxdfgxxx","Jaeasrtn","2000-4-10",55,"a"));
e.altaJugador(new Jugador("dfgdf","Jaeasrtn","2000-4-10",0,"a"));
e.altaJugador(new Jugador("vbnvbn","Jaeasrtn","2000-4-10",-5,"a"));
console.log(e);
e.ordenarJugDorsal();
let main=document.getElementById("contenido");
main.innerHTML=e;
*/