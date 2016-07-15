/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad = document.getElementById('Cantidad').value;
 	var marca = document.getElementById('Marca').value;
 	var precioBruto;
	var descuento;
	var precioNeto;
	var precioDescuento;
 	//alert(cantidad);
 	//alert(marca);	
 	precioBruto = 35 * cantidad;
 	switch(marca)
 		{
 			case "ArgentinaLuz":
 				if (cantidad == 3) 
 					{
 						
 					 descuento = 0.85;

 					}
 					else (cantidad == 4)
 						{
 							
 							 descuento = 0.75;

 						}
 						if (cantidad==5) 
 							{
 								descuento = 0.60;
 							}
 							else (cantidad > 5) 
 								{
 									descuento = 0.50;
 								}
 			break;




 			case "FelipeLamparas":
 				if (cantidad = 3) 
 					{
 						descuento = 0.90;
 					}
 					else (cantidad = 4)
 						{
 							descuento = 0.75;
 						}
 						if (cantidad = 5) 
 							{
 								descuento = 0.70;
 							}
 							else (cantidad >= 6) 
 								{
 									descuento = 0.50;
 								}
 			break;

 			case "JeLuz":
 				if (cantidad = 3) 
 					{
 						descuento = 0.95;

 					}
 					else (cantidad = 4)
 						{
 							descuento = 0.80;
 						}
 						if (cantidad = 5) 
 							{
 								descuento = 0.70;
 							}
 							else (cantidad > 5)
 								{
 									descuento = 0.5;
 								}
 			break;

 			case "HazIluminacion":
 				if (cantidad = 3) 
 					{
 						descuento = 0.95;
 					}
 					else (cantidad = 4)
 						{
 							descuento = 0.80;
 						}
 						if (cantidad = 5) 
 							{
 								descuento = 0.70;
 							}
 							else (cantidad > 5)
 								{
 									descuento = 0.5;
 								}
			break;

 			case "Osram":
 				if (cantidad = 3) 
 					{
 						descuento = 0.95;
 					}
 					else (cantidad = 4)
 						{
 							descuento = 0.80;
 						}
 						if (cantidad = 5) 
 							{
 								descuento = 0.70;
 							}
 							else (cantidad > 5)
 								{
 									descuento = 0.5;
 								}
 			break;


 			

 		}//switch(marca)

 		precioNeto = precioBruto * descuento;
		precioDescuento = document.getElementById('precioDescuento').value=precioNeto;
		/*if (precioDescuento > 120) 
 			{
 				precioDescuento*0.90;
 			}*/

}//function CalcularPrecio


/* if (cantidad >= 6) 
	{
		descuento = 0.5;
	}
	else 
		{
		if (cantidad == 5) 
			{
				switch(marca)
					{
						case "ArgentinaLuz":
							descuento=0.6;
						break;	
					}
			}
		}*/