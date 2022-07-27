/* 
Paul Soria
Div E
Ejercicio 3 IF

*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18)
	{

	alert("Es mayor de edad");
}
    else
{
    
    alert ("Tiene " + edad + " años por lo tanto no es mayor de edad");
}

}//FIN DE LA FUNCIÓN