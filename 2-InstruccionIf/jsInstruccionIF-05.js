/* 
Paul Soria
Div E
Ejercicio 5 IF

*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);
	
	if (edad <=12 || edad >= 18)
{
	alert ("Usted no es adolescente ");

}

}//FIN DE LA FUNCIÓN