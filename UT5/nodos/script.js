"use strict"

window.addEventListener("load", ()=>{
    //leer la estructra de la página
    let html =document.documentElement //estructura inicial
    //mostrar los hijos html
    console.log("Hijos html "+ html.childNodes.length);
    let head=html.firstChild; //establecer en head la primera rama de html ==chilNodes[0]
    console.log (head.nodeType + " "+ head.nodeName + " "+ head.nodeValue)
    //let body=html.lastChild //establecer en body la última rama de html
    let body=html.childNodes[2];
   //let body=html.lastChild; //apunta al nodo body
    console.log (body.nodeType + " "+ body.nodeName + " "+ body.nodeValue)

    //recorrer los hijos de Body
    console.log( "hijos body "+ body.childNodes.length)
     for(let ele of body.childNodes){
         console.log( ele.nodeName + " tipo= "+  ele.nodeType)
     }
})