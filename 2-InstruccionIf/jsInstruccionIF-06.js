/* 
Paul Soria
Div E
Ejercicio 6 IF

*/

function mostrar()
{
	//tomo la edad

	let edad;
	edad =  document.getElementById("txtIdEdad").value;

	edad = parseInt (edad);

	//If = si ... Else = si no se cumple el IF se activa Else.
	if (edad >=18)
{alert ("Usted es un adulto");}
    
    else 
	{
		if (edad >12)
		{
			alert ( "Usted es un adolescente.");}
		else {alert("Usted es un niño.")}}
}//FIN DE LA FUNCIÓN