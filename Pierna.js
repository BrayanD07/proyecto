class Pierna extends Figura
{
	constructor(id,al,an,x,y,vel)
	{
		super(id,an,al,x,y,vel);
		this.radio=this.Ancho/2;
	
		
	}

	Dibujar(contextoDeDibujo)
	{

		contextoDeDibujo.beginPath();
		contextoDeDibujo.fillRect(this.X+.2*this.radio,this.Y+6*this.radio,this.radio/1.7,this.radio*2.5);
		contextoDeDibujo.arc(this.X+0.48*this.radio,this.Y+8.5*this.radio,this.radio/2.3,0,Math.PI,"true");
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();

		contextoDeDibujo.beginPath();
		contextoDeDibujo.fillRect(this.X+1.2*this.radio,this.Y+6*this.radio,this.radio/1.7,2.5*this.radio);
		contextoDeDibujo.arc(this.X+1.5*this.radio,this.Y+8.5*this.radio,this.radio/2.3,0,Math.PI,"true");
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
	}
}