/*
Paul Soria
Div E
EJ 6 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	//variables
	let numeroUno;
	let numeroDos;
	let resultado;
	
	//tomamos los datos por ID (inicializamos o las usamos)
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//transformamos a enteros
	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	//operamos
	resultado = numeroUno + numeroDos;

	//mostrar resultado
	alert("El resultado es " + resultado);
}

/*  */