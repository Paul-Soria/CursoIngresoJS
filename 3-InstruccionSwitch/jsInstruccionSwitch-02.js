/* 
Paul Soria
Div E
Switch Ejercicio 2
*/
function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje = "Ya pasamos el frio, ahora hace calor";
			break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
/* 
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.

marzo a junio = "Falta para el invierno.";
julio y agosto = "Abrigate que hace frio.";
septiembre a febrero ="Ya pasamos el frio, ahora calor!!!."; 
*/