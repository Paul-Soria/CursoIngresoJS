/*
Paul Soria
Div E
TP ejercicio 4 (Switch)

 */
function CalcularPrecio () 
{
    let lamparas;
    let cantidad;
    let marca;
    let porcentaje;
    let descuento;
    let precioFinal;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    lamparas = 35;

    switch(cantidad)
    {
        case 1:            
        case 2:
            porcentaje = 0;
            break;
        case 3:
        case 4:
        case 5:
            
        default:
            porcentaje = 50;
            break;

    }
    lamparas = cantidad * 35;
    descuento = (porcentaje*lamparas)/100;
    precioFinal = lamparas - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
} //Fin

/* 
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  
se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/