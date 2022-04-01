"use strict"

export class Bolo{
    //constantes
    _imgDePie="./img/bolo.jpg";
    _imgDerrivado="./img/boloTirado.jpg";
    _cssClassImg="bolo";
    _cssClassContainer="item";
    _altAttribute="bolo";
    _nodoPadre="bolos";

    static nodoPadre(){
        return _nodoPadre;
    }

    constructor() {
        this._img=this._imgDePie;//por defecto
        this._nodeBolo=this._crearBolo();
        this._dePie=true;
    }

    get nodeBolo(){
        return this._nodeBolo;
    }

    _crearBolo(){
        let item = document.createElement("div");
        item.classList.add(this._cssClassContainer);
        let img = document.createElement("img");
        img.setAttribute("src", this._img);
        img.setAttribute("alt", this._altAttribute);
        img.classList.add(this._cssClassImg);
        item.appendChild(img);
        return item;
    }

    render(){
        document.getElementById(this._nodoPadre).appendChild(this._crearBolo());
    }
    
    refrescarVista(){
        
        let item=this._crearBolo();
        document.getElementById(this._nodoPadre).replaceChild(item.cloneNode(true),this._crearBolo()) //replaceChild(new child, old child)
         
    }


    derrivar(){
        this._img=this._imgDerrivado;
        this._dePie=false;
    }

    derrivar(img){
        this._img=img;
        this._dePie=false;
    }

    set imgDePie(imgDePie){
        this._imgDePie=imgDePie;
    }

    get bolo(){
        return this._nodeBolo;
    }

    set nodeBolo(nodeBolo){
        this._nodeBolo=nodeBolo;
    }

    estaDePie(){
        return this._dePie;
    }


}