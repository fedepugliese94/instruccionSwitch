function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);
	switch(mesDelAño)
		{
			case "Febrero":
				alert("Este mes tiene 28 dias");
			break;

			case "Enero":
			case "Marzo":
			case "Mayo":
			case "Julio":
			case "Agosto":
			case "Octubre":
			case "Diciembre":
				alert("Este mes tiene 31 dias");
			break;

			default:
				alert("este mes tiene 30 dias");
			break;
		}
	



}//FIN DE LA FUNCIÓN