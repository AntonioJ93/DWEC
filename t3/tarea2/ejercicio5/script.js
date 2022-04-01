let frase="JavaScript es un lenguaje scripting";

let longitud= frase.length;
let scripting=frase.search("scripting");
let lenguaje=frase.substr(frase.search("lenguaje"),"lenguaje".length);
document.write("Longitud= "+longitud+"<br>");
document.write("Inicio de la palabra scripting= "+scripting+"<br>");
document.write(lenguaje+"<br>");
document.write("La primera posición de la letra 'p' es: "+frase.indexOf("p")+"<br>");
document.write("La última posición de la letra 'p' es: "+frase.lastIndexOf("p")+"<br>");
document.write("Mayusculas: "+frase.toUpperCase()+"<br>");
document.write("Minusculas: "+frase.toLowerCase()+"<br>");
document.write(frase.replace("scripting","entorno cliente")+"<br>");
document.write("Sin espacios: "+frase.replace(/\s/g,"")+"<br>");
document.write("Eliminar e/E: "+frase.replace(/[eE]/g,"")+"<br>");
document.write("Redondeo 50.49: "+Math.round(50.49)+"<br>");
document.write("Redondeo decimal 50.49: "+Math.round(50.49*10)/10+"<br>");
document.write("Aleatorio entre 225 y 250: "+(Math.random()*(250-225)+225)+"<br>");
document.write("Número menor (34, 56, -3, -24): "+Math.min(34, 56, -3, -24)+"<br>");

