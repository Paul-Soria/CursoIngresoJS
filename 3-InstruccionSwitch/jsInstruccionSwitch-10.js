/* 
Paul Soria
Div E
Switch Ejercicio 9
*/

function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value ;
	destino = document.getElementById("txtIdDestino").value ;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "Se viaja";
					break;			
				default:
					mensaje = "No se viaja"
					break;
			}
			break;

		case "Verano":
			switch(destino)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;
			}
			break;

		case "Otoño":
			switch(destino)
			{
				case "Cataratas":
				case "Mar del plata":
				case "Bariloche":
				case "Cordoba":
					mensaje = "Se viaja";
					break;
			}
			break;

		case "Primavera":
			switch(destino)
			{
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja";
					break;
				case "Bariloche":
					mensaje = "No se viaja";
					break;
			}
			break;

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
 informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche 
*/