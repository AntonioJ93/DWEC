"use strict";
let estado = 0;
window.addEventListener("load", () => {
    document.getElementById("capa").addEventListener("click", modificarText);
})
function modificarText() {
    switch (estado) {
        case 0:
            this.setAttribute("class", "resaltado"); //establecer la clase resaltado
            break;
        case 1:
            // this.setAttribute("class", "resaltado rojo");
            this.className = this.className + " rojo"
            break;
        case 2:
            // this.setAttribute("class", "resaltado rojo centrado");
            this.classList.add("centrado")
            break;
        case 3:
            // this.setAttribute("class", "resaltado rojo");
            this.classList.remove("centrado");
            this.classList.remove("centrado", "rojo"); //eliminar varias clases

            break;
        case 4:
            // this.setAttribute("class", "resaltado");
            this.classList.remove("rojo")
            break;
        case 5:
            // this.removeAttribute("class");
            this.classList.remove("resaltado")
            estado=-1
            break;
    }
    
    estado++;
}