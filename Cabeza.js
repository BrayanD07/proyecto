class Cabeza extends Figura{

	constructor(id,al,an,c,x,y,vel){
		super(id,an,al,c,x,y,vel);
		this.radio=this.Ancho/2;
	}
	Dibujar(contextoDeDibujo)
	{

        contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle="#000000";
        contextoDeDibujo.fillStyle="#c0c0c0";
		contextoDeDibujo.fillRect(this.X+.9*this.radio,this.Y+.05*this.radio,this.radio*.15,this.radio*-.7);
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
	    contextoDeDibujo.closePath();

	    contextoDeDibujo.beginPath();
        contextoDeDibujo.fillStyle="#808080";
        contextoDeDibujo.arc(this.X+.98*this.radio,this.Y-.8*this.radio,this.radio/10,0,2*3.1416,true);
        contextoDeDibujo.stroke();
        contextoDeDibujo.fill();

        contextoDeDibujo.beginPath();
        contextoDeDibujo.fillStyle="#808080";
        contextoDeDibujo.arc(this.X+.98*this.radio,this.Y+.05*this.radio,this.radio/3.5,0,3.1416,true);
        contextoDeDibujo.stroke();
        contextoDeDibujo.fill();

		contextoDeDibujo.beginPath();
        contextoDeDibujo.fillStyle="#c0c0c0";
        contextoDeDibujo.arc(this.X+.98*this.radio,this.Y+.5*this.radio,this.radio/1.67,0,3.1416,true);
        contextoDeDibujo.stroke();
        contextoDeDibujo.fill();

		contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle="#000000";
        contextoDeDibujo.fillStyle="#c0c0c0";
		contextoDeDibujo.fillRect(this.X+.35*this.radio,this.Y+.5*this.radio,this.radio*1.25,this.radio*2.8);
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
	    contextoDeDibujo.closePath();

	    contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle="#000000";
        contextoDeDibujo.fillStyle="#808080";
		contextoDeDibujo.fillRect(this.X+.23*this.radio,this.Y+.6*this.radio,this.radio*1.5,this.radio*.6);
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
	    contextoDeDibujo.closePath();

	    contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle="#000000";
        contextoDeDibujo.fillStyle="#ffffff";
		contextoDeDibujo.fillRect(this.X+.47*this.radio,this.Y+1.4*this.radio,this.radio*1,this.radio*.35);
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
	    contextoDeDibujo.closePath();

        contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle="#000000";
      
		contextoDeDibujo.moveTo(this.X+.47*this.radio,this.Y+1.5*this.radio)
		contextoDeDibujo.lineTo(this.X+1.45*this.radio,this.Y+1.5*this.radio)
		contextoDeDibujo.moveTo(this.X+.47*this.radio,this.Y+1.65*this.radio)
        contextoDeDibujo.lineTo(this.X+1.45*this.radio,this.Y+1.65*this.radio)
        contextoDeDibujo.moveTo(this.X+.6*this.radio,this.Y+1.4*this.radio)
        contextoDeDibujo.lineTo(this.X+.6*this.radio,this.Y+1.75*this.radio)
        contextoDeDibujo.moveTo(this.X+.8*this.radio,this.Y+1.4*this.radio)
        contextoDeDibujo.lineTo(this.X+.8*this.radio,this.Y+1.75*this.radio)
        contextoDeDibujo.moveTo(this.X+1*this.radio,this.Y+1.4*this.radio)
        contextoDeDibujo.lineTo(this.X+1*this.radio,this.Y+1.75*this.radio)
        contextoDeDibujo.moveTo(this.X+1.2*this.radio,this.Y+1.4*this.radio)
        contextoDeDibujo.lineTo(this.X+1.2*this.radio,this.Y+1.75*this.radio)
        contextoDeDibujo.moveTo(this.X+1.4*this.radio,this.Y+1.4*this.radio)
        contextoDeDibujo.lineTo(this.X+1.4*this.radio,this.Y+1.75*this.radio)
		contextoDeDibujo.stroke();
	    contextoDeDibujo.closePath();

        contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle="#000000";
        contextoDeDibujo.fillStyle="#ffffff";
        contextoDeDibujo.moveTo(this.X+.8*this.radio,this.Y+.9*this.radio)
		contextoDeDibujo.arc(this.X+.6*this.radio,this.Y+.9*this.radio,this.radio/4,0,2*Math.PI,"true");
		contextoDeDibujo.moveTo(this.X+1.55*this.radio,this.Y+.9*this.radio)
	    contextoDeDibujo.arc(this.X+1.35*this.radio,this.Y+.9*this.radio,this.radio/4,0,2*Math.PI,"true");
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
	    contextoDeDibujo.closePath();

	    contextoDeDibujo.beginPath();
        contextoDeDibujo.strokeStyle="#000000";
        contextoDeDibujo.moveTo(this.X+.57*this.radio,this.Y+.9*this.radio)
		contextoDeDibujo.lineTo(this.X+.63*this.radio,this.Y+.9*this.radio)
		contextoDeDibujo.moveTo(this.X+1.32*this.radio,this.Y+.9*this.radio)
	    contextoDeDibujo.lineTo(this.X+1.38*this.radio,this.Y+.9*this.radio)
		contextoDeDibujo.fill();
		contextoDeDibujo.stroke();
	    contextoDeDibujo.closePath();

	    


	}
}