/*
	Emily Meuer
	2/12/2018
	
	Number-Guessing Game
*/

function guessButton()
{
	window.alert("Guess was submitted; guess = " +
		document.getElementById("guess").value);
		
	var canvas 	= document.getElementById("canvas");
	var context = canvas.getContext("2d");
	
	context.fillStyle	= "#ffccff";
	context.fillRect(0, 0, 0, 50);
}