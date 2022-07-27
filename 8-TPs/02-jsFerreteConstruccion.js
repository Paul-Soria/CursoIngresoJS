/*2.
Paul Soria
Div E
TP ejercicio 2

Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //variables
    let largoTerreno;
    let anchoTerreno;
    let perimetro;
    let alambre;

    //datos
    largoTerreno = document.getElementById ("txtIdLargo").value;
    anchoTerreno = document.getElementById ("txtIdAncho").value;

    //parseo
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    //calcular perimetro (P= 2*L + 2 W)
    perimetro = 2 * largoTerreno + 2 * anchoTerreno;
    alambre = perimetro * 3;

    alert("se necesita " + alambre + " metros de alambre");

}
function Circulo () 
{
    //variables
    let radio;
    let perimetro;
    let cantidadAlambre;

    //datos
    radio = document.getElementById("txtIdRadio").value;

    //parseo
    radio = parseInt(radio);

    //calculos - perimetro (P 2*pi * radio)
    perimetro = 2 * Math.PI * radio;
    cantidadAlambre = perimetro * 3;

    //mostrar
    alert ("Se necesitan " + cantidadAlambre.toFixed(2) +  " metros de alambre")
	//para mostrar por consola = console.log("Se necesitan " + " metros de alambre")
}
function Materiales () 
{
	 //variables
     let largoTerreno;
     let anchoTerreno;
     let area;
     let cemento;
     let cal;
 
     //datos
     largoTerreno = document.getElementById ("txtIdLargo").value;
     anchoTerreno = document.getElementById ("txtIdAncho").value;

     largoTerreno = parseInt(largoTerreno);
     anchoTerreno = parseInt(anchoTerreno);

     perimetro = 2 * largoTerreno + 2 * anchoTerreno;
     area = largoTerreno * anchoTerreno;
     cemento = area * 2 ;
     cal = area * 3 ;

     alert("Para un contrapiso de " + area +  " m2, metros se necesita " + cemento + " bolsas de cemento y " + cal +" bolsas de cal");
}