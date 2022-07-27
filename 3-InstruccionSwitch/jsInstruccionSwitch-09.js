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
	let estadia;
	let porcentajeDiez;
	let porcentajeVeinte;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	estadia = 15000;
	porcentajeDiez = (estadia*10)/100;
	porcentajeVeinte = (estadia*20)/100;

	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					precioFinal = estadia + porcentajeVeinte;
					mensaje = "El precio es : " + precioFinal;
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadia - porcentajeDiez;
					mensaje = "El precio es : " + precioFinal;
					break;
				case "Mar del plata":
					precioFinal = estadia - porcentajeVeinte;
					mensaje = "El precio es : " + precioFinal;
					break;
			}
			break;

		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					precioFinal = estadia - porcentajeVeinte;
					mensaje = "El precio es : " + precioFinal;
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadia + porcentajeDiez;
					mensaje = "El precio es : " + precioFinal;
					break;
				case "Mar del plata":
					precioFinal = estadia + porcentajeVeinte;
					mensaje = "El precio es : " + precioFinal;
					break;

			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = estadia + porcentajeDiez;
					mensaje = "El precio es : " + precioFinal;
					break;
				case "Cordoba":
					mensaje = "El precio es : " + estadia;
					break;
			}
			break;

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN