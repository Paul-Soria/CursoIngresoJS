/* 
Paul Soria
Div E
Ejercicio 4 IF

*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);
	
	if (edad >=13 && edad <= 17)
{
    alert ("Usted es adolescente");
}
else 
{
    alert ("Usted no es adolescente");
}
}//FIN DE LA FUNCIÓN