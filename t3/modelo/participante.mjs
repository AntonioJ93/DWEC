"use strict"

export class Participante{

    constructor(nombre,provincia){
        
        this._nombre=this._validarNombre(nombre).toUpperCase();
        this._provincia=this._validarProvincia(provincia).toUpperCase();
    }

    get nombre(){
        return this._nombre;
    }
    get provincia(){
        return this._provincia;
    }
    set nombre(nombre){
        this._nombre=this._validarNombre(nombre).toUpperCase();
    }
    set provincia(provincia){
        this._provincia=this._validarProvincia(provincia).toUpperCase();
    }

    toString(){
        return `nombre: ${this.nombre} <br>provincia: ${this.provincia}`;
    }

    _validarNombre(nombre){
      
        nombre.trim();
        if(nombre.length>4&&nombre!=undefined){
            return nombre
        }else{
            throw new Error("El nombre no puede tener menos de 5 caracteres");
        }
    }

    _validarProvincia(provincia){
        
        provincia.trim();
        if(provincia.length>0&&provincia.length<5 && provincia!=undefined){
            return provincia+"...";
        }else if(provincia.length>=5 && provincia!=undefined){
            return provincia
        }else{
            throw new Error("La provincia no puede estar vacia");
        }
    }

}


