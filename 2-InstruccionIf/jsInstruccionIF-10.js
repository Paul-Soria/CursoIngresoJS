/* 
Paul Soria
Div E
Ejercicio 10 IF

*/
function mostrar()
{
	let calificacion;

	calificacion = Math.floor(Math.random()*(10 - 1 + 1) + 1);


	if (calificacion >8)
	{
		alert("EXCELENTE ");
	}
	else
	{ 
	    if ((calificacion <=8) && (calificacion >3))
						
		{
			alert("Aprobó ");
		}
					
		else
		{
			alert("Vamos, la proxima se puede ");
		}
	}

}//FIN DE LA FUNCIÓN