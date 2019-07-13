class persona extends Figura
{
	constructor(id,al,an,x,y,vel)
	{
		super(id,an,al,x,y,vel);
		//this.Velocidad=vel;
		this.Partes = new Array();

		
	}	
	Agregar(parte)
	{
		this.Partes.push(parte);
	}
	Dibujar(contextoDeDibujo)
	{
			super.Dibujar(contextoDeDibujo);

			this.Partes.forEach(function(element)
			{
				element.Dibujar(contextoDeDibujo);
			})
	}

	

	Mover(Direccion)
	{
		var C=5;
		switch(Direccion)
		{
			case "Derecha":
				this.Partes.forEach(function(element){element.X+=C;});
				break;

			case "Izquierda":
				this.Partes.forEach(function(element){element.X-=C;});
				break;

			case "Arriba":
				this.Partes.forEach(function(element){element.Y-=C;});
				break;
			
			case "Abajo":
				this.Partes.forEach(function(element){element.Y+=C;});
				break;
		}
	}
}	