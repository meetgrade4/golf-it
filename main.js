
canvas = new fabric.Canvas('mycanvas');

ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(img){
		hole_object = img;
		hole_object.scaleToHeight(50);
		hole_object.scaleToWidth(50);
		hole_object.set({
			top : hole_y,
			left : hole_x
		});
		canvas.add(hole_object);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(img){
		ball_object = img;
		ball_object.scaleToHeight(50);
		ball_object.scaleToWidth(50);
		ball_object.set({
			top :ball_y,
			left :ball_x
		});
		canvas.add(ball_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x == hole_x && ball_y == hole_y){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML = "you won*******!!!@@##";
		document.getElementById("mycanvas").style.borderColor = "red"; 
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y > 0) {
			ball_y = ball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when up arrow is pressed, x  = " + ball_x + "and y = " + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		if (ball_y < 450) {
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when down arrow is pressed, x  = " + ball_x + "and y = " + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
				ball_x = ball_x - block_image_height;
				console.log("block image height = " + block_image_height);
				console.log("when left arrow is pressed, x  = " + ball_x + "and y = " + ball_y);
				canvas.remove(ball_object);
				new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height;
				console.log("block image height = " + block_image_height);
				console.log("when right arrow is pressed, x  = " + ball_x + "and y = " + ball_y);
				canvas.remove(ball_object);
				new_image();
		}
	}
	
}

