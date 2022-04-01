"use strict"

import { Jugador } from "./jugador.mjs";
import { Arbitro } from "./arbitro.mjs";

export class Campeonato{

    _participantes=[];
    
    constructor(nombre, ciudad, descripcion ){
        this._nombre=this._validarNombre(nombre);
        this._ciudad=this._validarCiudad(ciudad);
        this._descripcion=this._validarDescripcion(descripcion);
        this._participantes.push(new Array());//array para arbitros
        this._participantes.push(new Array());//array para jugadores
    }

    get nombre(){
        return this._nombre;
    }

    get ciudad(){
        return this._ciudad;
    }

    get descripcion(){
        return this._descripcion;
    }

    get participantes(){
        return this._participantes;
    }



    set nombre(nombre){
        this._nombre=this._validarNombre(nombre);
    }

    set ciudad(ciudad){
        this._ciudad=this._validarCiudad(ciudad);
    }

    set descripcion(descripcion){
        this._descripcion=this._validarDescripcion(descripcion);
    }


    _validarNombre(nombre){
      
        nombre=nombre.trim();
        if(nombre.length>0&&nombre!=undefined){
            return nombre;
        }else{
            throw new Error("El nombre no puede estar vacio");
        }
    }

    _validarCiudad(ciudad){
      
        ciudad=ciudad.trim();
        if(ciudad.length>0&&ciudad!=undefined){
            return ciudad;  
        }else{
            return "Córdoba" ;
        }
    }

    _validarDescripcion(descripcion){
      
        descripcion=descripcion.trim();
        if(descripcion.length<=100){
            return descripcion;  
        }else{
            throw new Error("La descripcion no puede ser superior a 100 caracteres");
        }
    }


    anadirParticipantes(participante) {

        let existe=false;

        if(participante instanceof Jugador){
            //comprobamos si existe
            this._participantes[1].forEach(element => {
                if(element.nombre==participante.nombre){
                    existe=true;
                }
            });
            if(!existe){
                this._participantes[1].push(participante);
            }
           
        }
        if(participante instanceof Arbitro){
             //comprobamos si existe
            this._participantes[0].forEach(element => {
                if(element.nombre==participante.nombre){
                    existe=true;
                }
            });
            if(!existe){
                this._participantes[0].push(participante);
            }
            
        }
    }

    toString(){
        return `
        <table>
        <thead>
            <tr>
                <th> Nombre del campeonato</th>
                <th> ciudad</th>
                <th>descripción</th>
                
            </tr>
            <tbody>
                <tr>
                    <td>${this.nombre}</td>
                    <td>${this.ciudad}</td>
                    <td>${this.descripcion}</td>
                    
                </tr>
            </tbody>
        </thead>
    </table>
    <h4>Arbitros</h4>
    <ul>
        <li>${this.participantes[0][0]}</li>
        <li>${this.participantes[0][1]}</li>
        <li>${this.participantes[0][2]}</li>
    </ul>
    <h4>Jugadores</h4>
    <ul>
        <li>${this.participantes[1][0]}</li>
        <li>${this.participantes[1][1]}</li>
        <li>${this.participantes[1][2]}</li>
        <li>${this.participantes[1][3]}</li>
        <li>${this.participantes[1][4]}</li>
        <li>${this.participantes[1][5]}</li>
        <li>${this.participantes[1][6]}</li>
        <li>${this.participantes[1][7]}</li>
        <li>${this.participantes[1][8]}</li>
        <li>${this.participantes[1][9]}</li>
        <li>${this.participantes[1][10]}</li>
        <li>${this.participantes[1][11]}</li>
        <li>${this.participantes[1][12]}</li>
        <li>${this.participantes[1][13]}</li>
        <li>${this.participantes[1][14]}</li>
        <li>${this.participantes[1][15]}</li>
        <li>${this.participantes[1][16]}</li>
        <li>${this.participantes[1][17]}</li>
        <li>${this.participantes[1][18]}</li>
        <li>${this.participantes[1][19]}</li>
        
    </ul>
        `
    }


}
/*
let c=new Campeonato("ACB","","liga de baloncesto");

let a=new Arbitro("Juanito","Segovia",2007);
let a2=new Arbitro("Manuel","Segovia",2007);
let a3=new Arbitro("Carlos","Segovia",2004);

c.anadirParticipantes(a);
c.anadirParticipantes(a2);
c.anadirParticipantes(a3);

let j=new Jugador("Jose Manuel","Málaga","1995-10-22",10,"a");
let j2=new Jugador("Francisco","jaen","1993-10-22",10,"p");
let j3=new Jugador("maria","valencia","1998-10-22",10,"b");
let j4=new Jugador("carmen ","murcia","1999-10-22",10,"ap");
let j5=new Jugador("antonio","granada","2001-10-22",10,"a");

let j6=new Jugador("Jose Maria","Málaga","1995-10-22",10,"a");
let j7=new Jugador("manuel jesús","jaen","1993-10-22",10,"p");
let j8=new Jugador("ramón","valencia","1998-10-22",10,"b");
let j9=new Jugador("isabel ","murcia","1999-10-22",10,"ap");
let j10=new Jugador("luisa","granada","2001-10-22",10,"a");

let j11=new Jugador("Jose Manuel2","Málaga","1995-10-22",10,"a");
let j12=new Jugador("Francisco2","jaen","1993-10-22",10,"p");
let j13=new Jugador("maria2","valencia","1998-10-22",10,"b");
let j14=new Jugador("carmen2 ","murcia","1999-10-22",10,"ap");
let j15=new Jugador("antonio2","granada","2001-10-22",10,"a");

let j16=new Jugador("Jose Manuel3","Málaga","1995-10-22",10,"a");
let j17=new Jugador("Francisco3","jaen","1993-10-22",10,"p");
let j18=new Jugador("maria3","valencia","1998-10-22",10,"b");
let j19=new Jugador("carmen3 ","murcia","1999-10-22",10,"ap");
let j20=new Jugador("antonio3","granada","2001-10-22",10,"a");

c.anadirParticipantes(j);
c.anadirParticipantes(j2);
c.anadirParticipantes(j3);
c.anadirParticipantes(j4);
c.anadirParticipantes(j5);

c.anadirParticipantes(j6);
c.anadirParticipantes(j7);
c.anadirParticipantes(j8);
c.anadirParticipantes(j9);
c.anadirParticipantes(j10);

c.anadirParticipantes(j11);
c.anadirParticipantes(j12);
c.anadirParticipantes(j13);
c.anadirParticipantes(j14);
c.anadirParticipantes(j15);

c.anadirParticipantes(j16);
c.anadirParticipantes(j17);
c.anadirParticipantes(j18);
c.anadirParticipantes(j19);
c.anadirParticipantes(j20);


let main=document.getElementById("contenido");
main.innerHTML=c;*/