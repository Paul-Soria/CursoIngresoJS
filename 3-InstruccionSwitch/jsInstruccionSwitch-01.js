/* 
Paul Soria
Div E
Switch Ejercicio 1
*/
function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;
	mensaje = "Usted no selecciono ningun mes valido."

	switch (mes)
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje = "a clases !!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones !!!.";
			break;
		case "Diciembre":
			mensaje = "felices fiestas !!!.";
			break;
	}
	alert(mensaje);
		
}//FIN DE LA FUNCIÓN