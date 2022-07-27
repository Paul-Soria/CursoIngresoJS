/* 
Paul Soria
Div E
Ejercicio IF 11 (Parcial)
*/

/* Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
Curso de ingreso UTN FRA */

function mostrar()
{
    let numeroUno;
    let numeroDos;
    let suma;

    numeroUno = parseInt(prompt("Introduzca primer numero"));
    numeroDos = parseInt(prompt("Introduzca segundo numero"));

    suma = numeroUno + numeroDos;

    if (numeroUno == numeroDos)
    {
        alert("Los numeros elegidos son : " + numeroUno + " y " + numeroDos);
    }
    else 
    {
            if (numeroUno>numeroDos)
            {
                alert("Resultado : " + (numeroUno-numeroDos));
            }
            else
            {   
                   if (suma<=9)
                    {
                        alert("Resultado : " + (numeroUno+numeroDos));
                    }
                   else
                    
                    {
                        if (suma>=10)
                        alert("la suma es xxx y supero el 10. " + "Resultado : " + suma );
                    }
                      
            }
            

    }
}
