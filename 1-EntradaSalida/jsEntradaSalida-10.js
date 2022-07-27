/*
Paul Soria
Div E
Ej 10 E/S

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro variable
	let importe;
	let descuento;
	let resultado;

	//Todos los valores
	importe = document.getElementById("txtIdImporte").value;
	
	importe = parseInt(importe);

	//Descuento de 25 %
	descuento = (25/100)*importe;
	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
	alert("El importe con el 25 % de descuento aplicado es de: " + resultado)

}
