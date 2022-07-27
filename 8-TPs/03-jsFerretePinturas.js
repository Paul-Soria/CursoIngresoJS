/*2.
Paul Soria
Div E
TP ejercicio 3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//variables
    let tempFahrenheit;
    let tempCentigrados;

    //datos y parseo
    tempFahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    //formula ((℉ - 32)/1.8000)
    tempCentigrados = (tempFahrenheit - 32 )/ 1.8000;

    alert(tempFahrenheit + " grados Fahrenheit equivalen a " + tempCentigrados.toFixed(2) + " grados centigrados");
}

function CentigradosFahrenheit () 
{
    //variables
	let tempFahrenheit;
    let tempCentigrados;

    //datos y parseo
    tempCentigrados = parseInt(document.getElementById("txtIdTemperatura").value);

    //formula ((℃ * 1.8000) + 32)
    tempFahrenheit = (tempCentigrados * 1.8000) + 32.00;
    
    alert(tempCentigrados + " grados centigrados equivalen a " + tempFahrenheit.toFixed(2) + " grados Fahrenheit");
}
