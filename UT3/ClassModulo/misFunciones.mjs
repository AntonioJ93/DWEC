"use strict"

export class Alumno {
    constructor(nom, ape, edad) {
        this.nombre = nom,
        this.apellidos = ape,
        this.edad = edad
    }
    set nombre(valor){
        this._nombre=valor;
    }
    get nombre(){
        return this._nombre;
    }
    set apellidos(valor){
        this._apellidos=valor;
    }
    get apellidos(){
        return this._apellidos;
    }
    set edad(valor){
        this._edad=valor
    }
    get edad(){
        return this._edad
    }
    mostrarDatos() {
        return `<br>${this._nombre} ${this._apellidos} tiene ${this._edad} años`;
    }
}
export let validarEdad = (edad) => {
    while (isNaN(edad) || edad < 1 || edad > 120) {
        edad = prompt("Error de datos\nIntroduzca edad [1-120]");
    }
    return parseInt(edad);
};