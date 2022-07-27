/*
Soria Paul
Div E
While Ej 9

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let bandera;

	respuesta = "si";
	numeroMaximo = 0;
	numeroMinimo = 0;
	bandera = 0;

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese numero: "));

		if(bandera == 0)
		{
			numeroMaximo = numeroMaximo + numeroIngresado;
			numeroMinimo = numeroMinimo + numeroIngresado;

			bandera = 1;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{

			}
		}

	}
}//FIN DE LA FUNCIÓN