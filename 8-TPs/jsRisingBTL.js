/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

	var edad=1;
 	var sexo= -1;
 	var estadoCivil= -1;
 	var sueldoBruto=1;
 	var legajo=1;
 	var nacionalidad=-1;
 	


 			
 	while(edad < 18 || edad > 90)
 		{
 			alert("Ingresar edad entre 18 y 90 años");
 			edad = prompt("Ingrese edad entre 18 y 90 años");
 			continue;
 		}
 		document.getElementById('Edad').value = edad;
		
	while(sexo > 0 || sexo <3)
		{
		 	alert("Ingrese sexo M si es masculino o F si es femenino");
		 	sexo = prompt("Ingrese su sexo");
		 	continue;
		}
		 document.getElementById('Sexo').value = sexo;
		 		
		

	while(estadoCivil>5 || estadoCivil <0)
		{
				alert("Ingresar estado civil siendo 1-soltero, 2-casado, 3-divorciado y 4-viudo");
				estadoCivil = prompt("Ingrese su estado civil");
				continue;
		}	
		document.getElementById('EstadoCivil').value=estadoCivil;


	while(sueldoBruto<8000)
		{
			alert("Su sueldo no puede ser menor a $8000 bruto");
			sueldoBruto = prompt("Ingrese su sueldo bruto");
		}	
		document.getElementById('Sueldo').value=sueldoBruto;


	while(legajo<1000)
		{
			alert("El legajo no debe tener ceros a la izquierda");
			legajo= prompt("Ingresar legajo de cuatro cifras");
		}	
		document.getElementById('Legajo').value = legajo;


	while(nacionalidad>0 || nacionalidad <4)
		{
			alert("Ingresar A si es argentino, E si es extranjero y N si es nacionalizado");
			nacionalidad=prompt("Ingrese su nacionalidad");
		}	
		document.getElementById('Nacionalidad').value=nacionalidad;

}
 	




