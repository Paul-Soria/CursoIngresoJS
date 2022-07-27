/*
Soria Paul
Div E
While Ejercicio 5

Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let genero;

	genero = prompt("Ingrese su genero");

	while ( !(genero == 'f' || genero == 'm') )
	{
		alert("Dato incorrecto");
		genero = prompt("Ingrese su genero");
	}

	document.getElementById("txtIdSexo").value = genero;
}//FIN DE LA FUNCIÓN