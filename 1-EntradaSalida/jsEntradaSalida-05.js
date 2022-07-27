/*
Paul Soria
Div E
Ej 5 E/S

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	//creamos variables
	let nombreIngresado;
	let edadIngresada;

	//tomamos datos por ID
	//donde guardo - que guardo

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;
	
	//mostrar los datos
	//cada vez que querramos concatenar una variable con un mensaje
	//usamos el simbolo +



	alert(" Su nombre es " + nombreIngresado + " y tiene " + edadIngresada + " años.");



}

