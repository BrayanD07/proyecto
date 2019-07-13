class Torax extends Figura
{
	constructor(id,al,an,x,y,vel)
	{
		super(id,an,al,x,y,vel);
		this.radio=this.Ancho/2;
		
	}
	Dibujar(contextoDeDibujo)
	{  

		contextoDeDibujo.beginPath();
		contextoDeDibujo.fillStyle="#808080";
		contextoDeDibujo.moveTo(this.X-0.25*this.radio,this.Y+2.3*this.radio);
        contextoDeDibujo.lineTo(this.X+.3*this.radio,this.Y+1.9*this.radio);
		contextoDeDibujo.lineTo(this.X+1.65*this.radio,this.Y+1.9*this.radio);
		contextoDeDibujo.lineTo(this.X+2.15*this.radio,this.Y+2.3*this.radio);
		contextoDeDibujo.lineTo(this.X+2.05*this.radio,this.Y+6*this.radio);
		contextoDeDibujo.lineTo(this.X-0.1*this.radio,this.Y+6*this.radio);
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
        contextoDeDibujo.closePath();

        contextoDeDibujo.beginPath();
        contextoDeDibujo.fillStyle="#c0c0c0";
		contextoDeDibujo.fillRect(this.X+.2*this.radio,this.Y+2.8*this.radio,this.radio*1.55,this.radio*2.8);
		contextoDeDibujo.strokeStyle="#000000";contextoDeDibujo.strokeStyle="#000000";
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
	    contextoDeDibujo.closePath();

	}
}