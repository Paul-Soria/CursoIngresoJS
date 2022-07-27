/*
Soria Paul
Div E
While Ejercicio 4/3

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	clave = prompt("Ingrese la clave. ");

	while(clave != "utn750")
	{
		clave = prompt("Error, reingrese la clave. ");
	}
	console.log("Pase, contraseña correcta. ");


}//FIN DE LA FUNCIÓN
