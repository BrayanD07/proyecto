var objPersona1;
var objtijera1;

function main()
{
	objtijera1 = new tijera(01,"orange", 100,70, 10, 10);
	objPersona1 = new persona(1,20,150,70,40,50);

	objPersona1.Agregar(new Cabeza(1,20,150,70,40,50));
	objPersona1.Agregar(new Brazo(1,20,150,70,40,50));
	objPersona1.Agregar(new Torax(1,20,150,70,40,50));
	objPersona1.Agregar(new Pierna(1,20,150,70,40,50));
		
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
    objtijera1.Dibujar(context);
    objPersona1.Dibujar(context);
/*
    objtijera1.bind("EnterFrame", function () 
    {
    if (objPersona1.x < objtijera1.x + objtijera1.width &&
   objPersona1.x + objPersona1.width > objtijera1.x &&
   objPersona1.y < objtijera1.y + objtijera1.height &&
   objPersona1.height + objPersona1.y > objtijera1.y)
    {
        // collision detected!
        this.color("green");
    } else {
        // no collision
        this.color("blue"); 
    }
});
*/
}
var id1;
var t = 0;

function iniciarAnimacion()
{
	id1 = setInterval(animacion,42);
}
function animacion()
{
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	if(objtijera1.X <= 0)
		objtijera1.X=0;
	if(objtijera1.X+90>= myCanvas.width)
		objtijera1.X=myCanvas.width-90;
	if(objtijera1.Y <= 10)
		objtijera1.Y=10;
	if(objtijera1.Y+120>= myCanvas.height)
		objtijera1.Y=myCanvas.height-120;


  
	if(objPersona1 != 'undefined')
		objPersona1.Dibujar(context);
    if(objtijera1 != 'undefined')
		objtijera1.Dibujar(context);
	
	t+=42;

}



function detenerAnimacion()
{
	if(id1 != null)
		clearInterval(id1);
}
function onkeyup_event()
{
	
	switch(event.keyCode)
	{
		case 37:
			console.log("Izquierda");
			objPersona1.Mover("Izquierda");
			break;
		case 38:
			console.log("Arriba");
			objPersona1.Mover("Arriba");
			break;
		case 39:
			console.log("Derecha");
			objPersona1.Mover("Derecha");
			break;
		case 40:
			console.log("Abajo");
			objPersona1.Mover("Abajo");
			break;

		case 65:
			console.log("Izquierda");
			objtijera1.Mover("Izquierda");
			break;
		case 87:
			console.log("Arriba");
			objtijera1.Mover("Arriba");
			break;
		case 68:
			console.log("Derecha");
			objtijera1.Mover("Derecha");
			break;
		case 83:
			console.log("Abajo");
			objtijera1.Mover("Abajo");
			break;
	}
}
/*
function crearPersona()
{

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	//Declaración, Creación e Inicialización de un arreglo
	arregloArboles = new Array(
			new Arbol(01,"orange", 150, 120, 10, 10));
			
	for (var i = arregloArboles.length - 1; i >= 0; i--) 
	{
		arregloArboles[i].Dibujar(context);
	}

	arregloPersonas = new Array(new Persona(01,"juan", 18, "red", 50, 30, 90, 10,15));
			
	for (var e = arregloPersonas.length - 1; e >= 0; e--) 
	{
		arregloPersonas[e].Dibujar(context);
	}
}
*/