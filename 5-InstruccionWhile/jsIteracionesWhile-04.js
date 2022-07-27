/*
Soria Paul
Div E
While Ejercicio 4/4

al presionar el botón pedir un número entre 0 y 9 inclusive. */
function mostrar()
{
	let clave;
	clave = prompt("Ingrese numero entre 0 y 9 ");
	clave = parseInt(clave);

	while( !(clave >= 0 && clave <=9) )
	{
		clave = prompt("Error, reingrese el numero ");
		clave = parseInt(clave);
	}
	document.getElementById("txtIdNumero").value = clave;


}//FIN DE LA FUNCIÓN