/* 
Paul Soria
Div E
Switch Ejercicio 4
*/

function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 dias.";
		
			break;
		case "Febrero":
			mensaje = " Este mes tiene 28 días.";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
/* 
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/