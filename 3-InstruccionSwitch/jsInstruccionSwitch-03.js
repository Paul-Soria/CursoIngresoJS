/* 
Paul Soria
Div E
Switch Ejercicio 3
*/
function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Febrero":
			mensaje = " Este mes no tiene más de 29 días.";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN