EJERCICIO 1

function tipoDato(arreglo){
    var arrTipo= [];
    for(var i=0; i<arreglo.length;i++){
        arrTipo.push(typeof arreglo[i]);

    }
    console.log(arrTipo);
  
}
tipoDato([1, "hola", 5])

EJERCICIO 2

function sumaArreglo(arreglo){
var suma= 0;
var prom=0;
    for(var i=0; i<arreglo.length;i++){
       suma=suma+arreglo[i]; 

    }
    prom=suma/arreglo.length;
    console.log(suma);
    console.log(prom);
    
    
}
sumaArreglo([5,3,1]);

EJERCICIO 3

function ocurrencia(datos){
var contador=0;
    for(var i=0; i<datos[0].length;i++){
       if(datos[0][i]==datos[1]){
           contador ++;
       }

 
     }
     console.log(contador);
     
    }
ocurrencia([[1,5,"palabra",5], 5]);

EJERCICIO 4

    
function llenar(numero){
    var arreglo= Array();
    var acertado = false;
    for(var i=0; i<20; i++){
        arreglo[i]=(Math.floor(Math.random()*100)+1);
        console.log(arreglo[i]);
    }
  for(var j=0; j<arreglo.length;j++){
    if(arreglo[j]==numero){
        console.log("Has acertado");
        acertado  = true;
        break;
        
    }
    // break;

}
if(acertado==false){
    console.log("No has acertado");
    
}

}
llenar(3);

EJERCICIO 5

function palindrome(palabra){
var isPalindrome=true;
var original =palabra.split("");
console.log(original);
var invertido=palabra.split("").reverse();
console.log(invertido);

for( var i=0; i<original.length; i++){
    if(invertido[i]!=original[i]){
        console.log("NO es palindrome");
        isPalindrome=false;
        break;
    }
    console.log("ES palindrome");
}
}
palindrome("oso");

EJERCICIO 6

function orden(arreglo){
    var mayor=0;
    var menor=0;
    var aux=0;
    for(var i=0;i<arreglo.length; i++){
            mayor=arreglo[i];
    for(var j=0; j<arreglo.length;j++){
            menor=arreglo[j];
        if(mayor<menor){
            aux=mayor;
            mayor=menor;
            menor=mayor;
        }
        else{
            mayor=mayor;
        }
        }
    }

   
}

orden([1,3,4,2]);


EJERCICIO 7


function fibo(numero){

{
  if (numero===1) 
     {
         return [0, 1];
    } 
  else 
  {
    var s = fibo(numero - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
      }
   }
}

 console.log(fibo(4));

EJERCICIO 8

function dec2bin(number) {
 var bin = "";

 while(number > 0) {
 bin = number%2 + bin;
 number = Math.floor(number/2);
 }

 return bin;
}

console.log(dec2bin(100));


EJERCICIO 9

    
function circulo(radio){
var area=0;
area=Math.PI*(radio*radio);

if(radio<0 || radio==0){
    console.log(-1);
}
else{
    console.log(area);
}
}
circulo(0)

EJERCICIO 10

function abs(numero){
if(numero<0 || numero==0){
    console.log(-1);
    
}
else{
    console.log(numero)

}
}
abs(-gi2);