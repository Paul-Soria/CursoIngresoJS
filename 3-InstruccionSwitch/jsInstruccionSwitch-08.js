/*
Paul Soria
Div E
Switch Ejercicio 8
*/

function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "FRIO";
			break;

		case "Cataratas":
		case "Mar del plata":
			mensaje = "CALOR";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
/* 
Al selecionar un destino ,
 indicar el punto cardinal de nuestro pais en donde se encuentra Norte,
  Sur, Este u Oeste
*/