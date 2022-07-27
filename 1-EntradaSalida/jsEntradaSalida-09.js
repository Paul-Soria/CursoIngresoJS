/*
Paul Soria
Div E
Ej 9 Bis E/S

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento
en el cuadro de texto "RESULTADO".

El usuario debe ingresar el porcentaje del aumento
y debemos mostrar el valor del porcentaje del aumento 
por ALERT */

function mostrarAumento()
{

	//variables
	let sueldo;
	let aumento;
	let porcentajeAumentado;
	let resultado;

	//datos
	sueldo = document.getElementById("txtIdSueldo").value;
	porcentajeAumentado = prompt("ingrese el porcentaje");

	//parseo
	sueldo = parseInt(sueldo);
	porcentajeAumentado = parseInt(porcentajeAumentado);

	//calculo
	aumento = (porcentajeAumentado/100)* sueldo;
	resultado = sueldo + aumento;

	//mostrar resultado con el aumento
	document.getElementById("txtIdResultado").value = resultado;


	//mostrar el aumento
	alert("su amuento es de: " + aumento);

}
