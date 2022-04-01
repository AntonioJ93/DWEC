 function* generador(){
     let i=0;
     while (i<3){
         yield i++;
     }
 }
let gen=generador();
 document.write("<br>"+gen.next().value);
 document.write("<br>"+gen.next().value);
 document.write("<br>"+gen.next().value);
 document.write("<br>"+gen.next().value);
 
 
 