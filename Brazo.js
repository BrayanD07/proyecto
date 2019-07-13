class Brazo extends Figura
{
	constructor(id,al,an,x,y,vel)
	{
		super(id,an,al,x,y,vel);
		this.radio=this.Ancho/2;
		
	}

	Dibujar(contextoDeDibujo)
	{
		//Brazos
		contextoDeDibujo.beginPath();
		contextoDeDibujo.fillStyle="#c0c0c0"
		contextoDeDibujo.arc(this.X-0.12*this.radio,this.Y+2.7*this.radio,this.radio/2.5,0,2*Math.PI,"true");
		contextoDeDibujo.moveTo(this.X-0.4*this.radio,this.Y+2.4*this.radio);
		contextoDeDibujo.lineTo(this.X-1.5*this.radio,this.Y+5*this.radio);
		contextoDeDibujo.lineTo(this.X-0.9*this.radio,this.Y+5*this.radio);	
		contextoDeDibujo.lineTo(this.X-0.12*this.radio,this.Y+3.1*this.radio);
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
		contextoDeDibujo.closePath();

		contextoDeDibujo.beginPath();
		contextoDeDibujo.fillStyle=this.Color;
		contextoDeDibujo.arc(this.X-1.2*this.radio,this.Y+5*this.radio,this.radio/3.5,3.3,2*Math.PI,"true");
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
		//BrazoDs
		contextoDeDibujo.beginPath();
		contextoDeDibujo.fillStyle=this.Color;
		contextoDeDibujo.moveTo(this.X+2.35*this.radio,this.Y+2.4*this.radio);
		contextoDeDibujo.lineTo(this.X+3.4*this.radio,this.Y+5*this.radio);
		contextoDeDibujo.lineTo(this.X+2.8*this.radio,this.Y+5*this.radio);
		contextoDeDibujo.lineTo(this.X+2.10*this.radio,this.Y+3.1*this.radio);
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();

		contextoDeDibujo.beginPath();
		contextoDeDibujo.fillStyle=this.Color;
		contextoDeDibujo.arc(this.X+3.1*this.radio,this.Y+5*this.radio,this.radio/3.5,3.3,2*Math.PI,"true");
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();

		contextoDeDibujo.beginPath();
		contextoDeDibujo.fillStyle=this.Color;
		contextoDeDibujo.arc(this.X+2.05*this.radio,this.Y+2.7*this.radio,this.radio/2.5,0,2*Math.PI,"true");
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();	
	}

}