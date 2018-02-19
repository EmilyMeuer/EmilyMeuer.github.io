/*
	Emily Meuer
	2/19/2018
	
	Canvas Tutorial:
	https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
*/

window.onload=draw;

function draw() {
	var canvas	= document.getElementById("tutorial");
	var	ctx = canvas.getContext("2d");
	
	/*
	// Red/Blue overlapping rects:
	ctx.fillStyle	= "rgb(200, 0, 0)";
	ctx.fillRect(10, 10, 50, 50);
	
	ctx.fillStyle	= "rgba(0, 0, 200, 0.5)";
	ctx.fillRect(30, 30, 50, 50);
	*/
	
	/*
	// Black/white/gray inlaid rectangles:
	ctx.fillRect(25, 25, 100, 100);	// Black 	
	ctx.clearRect(45, 45, 60, 60);	// White 
	ctx.strokeRect(50, 50, 50, 50);	// Gray rect outline
	*/
	
	/*
	// Triangle:
	ctx.beginPath();
	ctx.moveTo(75, 50);
	ctx.lineTo(100, 75);
	ctx.lineTo(100, 25);
	ctx.fillStyle	= "rgb(150, 50, 150)";
	ctx.fill();
	*/
	
	/*
	// Smiley (take out moveTo to see the inbetween lines):
	ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
	*/
	
	/*
	// Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();	// Notate bene! This is necessary for stroke() but not fill().
    ctx.stroke();
	*/
	
	/*
	// Speech bubble with quadratic curves:
	ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
	
	// Heart w/bezier curves:
	ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
	*/
	
	/*
	// Colors with strokeStyle:
	for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
                         Math.floor(255 - 42.5 * j) + ')';
        ctx.beginPath();
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        ctx.stroke();
      }
    }
	*/
	/*
	// Line joins:
	var lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 10;
  for (var i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
	*/
	
	// Linear gradient:
	var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
	lineargradient.addColorStop(0, 'white');
	lineargradient.addColorStop(1, 'black');
	ctx.fillStyle(lineargradient);
} // canvasFunction