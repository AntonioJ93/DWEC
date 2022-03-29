"use script"

window.addEventListener("load", () => {
    let objRaiz = document.documentElement; //establece elemento raíz
    mostrarArbol(objRaiz);
});

let mostrarArbol=(nodo) =>{
    for (let ele of nodo.childNodes) {
        if (ele.nodeName != "#text") {
            document.write(ele.nodeName + "<br>");
             if (ele.hasChildNodes()) { //devuelve true si el nodo tiene hijos
                  mostrarArbol(ele)
              }
           } else {
               document.write(ele.nodeValue + "<br>")
           }

    }
}