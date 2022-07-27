/*
Paul Soria
Div E
Ej 8 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro las variables

	let dividendo;
	let divisor;
	let resultado;
	let resto;

	//Tomo los valores por ID
	dividendo = document.getElementById ("txtIdNumeroDividendo").value;
	divisor = document.getElementById ("txtIdNumeroDivisor").value;

	//proceso
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);
	
	resultado = dividendo / divisor;
	resto = dividendo % divisor;


	alert("El resultado es " + resultado.toFixed(1) + " y el resto es " + resto);
}
