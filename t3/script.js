"use strict"

import { Jugador } from "./modelo/jugador.mjs";
import { Arbitro } from "./modelo/arbitro.mjs";
import { Equipo } from "./modelo/equipo.mjs";
import { Campeonato } from "./modelo/campeonato.mjs";

//////////crear campeonato /////////

let c=new Campeonato("ACB","","liga de baloncesto");

///////// Arbitros //////////
let a=new Arbitro("Juanito","Segovia",2007);
let a2=new Arbitro("Manuel","Segovia",2007);
let a3=new Arbitro("Carlos","Segovia",2004);

c.anadirParticipantes(a);
c.anadirParticipantes(a2);
c.anadirParticipantes(a3);

////////Jugadores /////////
let j=new Jugador("Jose Manuel","Málaga","1995-10-22",10,"a");
let j2=new Jugador("Francisco","jaen","1993-10-22",14,"p");
let j3=new Jugador("maria","valencia","1998-10-22",22,"b");
let j4=new Jugador("carmen ","murcia","1999-10-22",15,"ap");
let j5=new Jugador("antonio","granada","2001-10-22",5,"a");

let j6=new Jugador("Jose Maria","Málaga","1995-10-22",4,"a");
let j7=new Jugador("manuel jesús","jaen","1993-10-22",7,"p");
let j8=new Jugador("ramón","valencia","1998-10-22",2,"b");
let j9=new Jugador("isabel ","murcia","1999-10-22",6,"ap");
let j10=new Jugador("luisa","granada","2001-10-22",12,"a");

let j11=new Jugador("Jose Manuel2","Málaga","1995-10-22",22,"a");
let j12=new Jugador("Francisco2","jaen","1993-10-22",11,"p");
let j13=new Jugador("maria2","valencia","1998-10-22",13,"b");
let j14=new Jugador("carmen2 ","murcia","1999-10-22",10,"ap");
let j15=new Jugador("antonio2","granada","2001-10-22",21,"a");

let j16=new Jugador("Jose Manuel3","Málaga","1995-10-22",10,"a");
let j17=new Jugador("Francisco3","jaen","1993-10-22",11,"p");
let j18=new Jugador("maria3","valencia","1998-10-22",9,"b");
let j19=new Jugador("carmen3 ","murcia","1999-10-22",20,"ap");
let j20=new Jugador("antonio3","granada","2001-10-22",6,"a");

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

////////Equipos /////////
let equipos=[]
let e=new Equipo("Equipo 1", "almeria", "escudo", "Camacho")
let e1=new Equipo("Equipo 2", "galicia", "escudo", "entrenador 2")
let e2=new Equipo("Equipo 3", "badajoz", "escudo", "entrenador 3")
let e3=new Equipo("Equipo 4", "león", "escudo", "entrenador 4")
equipos.push(e);
equipos.push(e1);
equipos.push(e2);
equipos.push(e3);
////// añadir jugadores a los equipos /////

e.altaJugador(j);
e.altaJugador(j2);
e.altaJugador(j3);
e.altaJugador(j4);
e.altaJugador(j5);

e.ordenarJugDorsal();

e1.altaJugador(j6);
e1.altaJugador(j7);
e1.altaJugador(j8);
e1.altaJugador(j9);
e1.altaJugador(j10);

e1.ordenarJugDorsal();

e2.altaJugador(j11);
e2.altaJugador(j12);
e2.altaJugador(j13);
e2.altaJugador(j14);
e2.altaJugador(j15);

e2.ordenarJugDorsal();

e3.altaJugador(j16);
e3.altaJugador(j17);
e3.altaJugador(j18);
e3.altaJugador(j19);
e3.altaJugador(j20);

e3.ordenarJugDorsal();


div_campeonato.innerHTML=c;
div_equipos.innerHTML=equipos;