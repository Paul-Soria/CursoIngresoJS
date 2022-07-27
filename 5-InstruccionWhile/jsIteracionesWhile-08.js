/*
Soria Paul
Div E
While Ej 8

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let sumaPositivos=0;
	let multiplicacionNegativos=1;
	let respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado= parseInt(prompt("Ingrese numero "));
		if(numeroIngresado>=0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;

		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
		}
 
		respuesta= prompt("desea continuar? si/no");
	}
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	//document.write("La suma de todos los positivios es " + sumaPositivos).value;
}//FIN DE LA FUNCIÓN
