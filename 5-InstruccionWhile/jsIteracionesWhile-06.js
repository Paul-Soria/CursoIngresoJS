/* 
Soria Paul
Div E
While Ej 6
*/
function mostrar()
{
	let numeroIngresado;
	let acumulacion;
	let promedio;
	let contador=0;
	let acumulador = 0;

	while(contador<5)
	{
		numeroIngresado = parseInt(prompt("Ingrese su numero : "));

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;
	}
	acumulacion = acumulador;
	promedio = acumulacion / 5;

	document.getElementById("txtIdSuma").value = acumulacion;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN
/* 
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/