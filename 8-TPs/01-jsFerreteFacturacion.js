/*
Paul Soria
Div E
TP Ejercicio 1

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //variables
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    //datos
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    //parseo
    precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //calculo
    suma = precioUno + precioDos + precioTres;
    alert("El precio de la suma es : " + suma);
}
function Promedio () 
{
        //variables
        let precioUno;
        let precioDos;
        let precioTres;
        let suma;
    
        //datos
        precioUno = document.getElementById("txtIdPrecioUno").value;
        precioDos = document.getElementById("txtIdPrecioDos").value;
        precioTres = document.getElementById("txtIdPrecioTres").value;
    
        //parseo
        precioUno = parseInt(precioUno);
        precioDos = parseInt(precioDos);
        precioTres = parseInt(precioTres);
    
        //calculo
        suma = (precioUno + precioDos + precioTres) / 3;
        alert("El promedio es : " + suma.toFixed(2));
	
}
function PrecioFinal () 
{
    //variables
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let precioIva;

    //datos
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    //parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    iva = parseInt(iva);

    //calculo
    suma = (precioUno + precioDos + precioTres);
    iva = (21/100)*suma;
    precioIva = suma + iva;

   
    alert("El precio final + IVA : " + precioIva.toFixed(2));

	
}