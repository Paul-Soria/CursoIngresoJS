/* 
Paul Soria
Div E
Ejercicio 7 BIS V1

*/
function mostrar()
{
	let edad;
	let mensaje;

	edad = parseInt (document.getElementById("txtIdEdad").value);

	if (edad < 13)
	{
		 mensaje = "Feliz día";
	}
	else
	{
		if((edad >=13) && (edad <=16))
		{
			mensaje = "Es adolescente";
		}
		
	
		if (edad == 17)
		{
				mensaje = mensaje + ", Último año !!!" ;
		}
		else
		{
			if ((edad>=18) && (edad != 33) && (edad <60))
				{
					mensaje = adulto;
				}
				else
				{
					if(edad == 33)
					{
						mensaje = adulto + ", como Cristo <3 ";
					}
					else
					{
						if ((edad>=60) && (edad != 88))
						{
							mensaje = adulto + ", a jubilarse";
						}
						else
						{
							if (edad == 88)
							{
								mensaje = adulto  + " lindo numero";
							}
						}
					}
				}
			}
		
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN

/*  El siguiente ejercicio debe tener un solo alert escrito en el código
SI SI , uno solo.
La palabra alert escrita una sola vez.
Si si nuevamente , una sola vez en todo su código
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
Si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
Si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
Si tiene 33 años , además mostrar el mensaje “como cristo”
Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
Si tiene 88, además mostrar el mensaje “lindo número''
Si la edad es par , además mostrar , “sos par!!”.
*/
