/*
	Emily Meuer
	2/12/2018
	
	Number-Guessing Game
*/

var	number;
var	canvas;
var	closestLow;
var	closestHigh;
var	closestLowPx;
var	closestHighPx;

window.onload=function()
{
	number	= Math.floor(Math.random() * 100);
	closestLow	= 0;
	closestHigh	= 99;

	canvas 	= document.getElementById("numberCanvas");
	closestHighPx	= (99 - closestHigh) * canvas.width / 100;
	document.getElementById("highGuess").style.left	= closestHighPx + "px";
// Onload, draw it but either fill with white, or make dimensions of filling rectangles very small
// Load the correct number and keep it somewhere

// On receiving a guess, the program will compare it to the number,
// if necessary, adjust closestLow and closestHigh, then call our draw function again
// (or just draw it again?)
}; // onload

function guessButton()
{
//	window.alert("Guess was submitted; guess = " +
//		document.getElementById("guess").value);
		
//((document.getElementById("guess").value == number);
	var context = canvas.getContext("2d");
	var	guess	= parseInt(document.getElementById("guess").value);
	var	pastGuessesElement	= document.getElementById("pastGuesses");
	
	if(isNaN(guess) || (guess < 0) || (guess > 99))
	{
		console.error("Sorry, '" + document.getElementById("guess").value + "' is not a valid guess; please enter a number from 0 - 99.");
	} else {
		if(guess == number)
		{
			// Correct guess!
			window.alert("Congratulations!  The number was indeed " + number + ". :D");
		} else if((guess > number) && (guess < closestHigh))
		{
			closestHigh	= guess;
		} else if((guess < number) && (guess > closestLow))
		{
			closestLow = guess;
		}
		
		pastGuesses.innerHTML = pastGuesses.innerHTML + "<br/>" + guess;
	}
	
	closestLowPx	= (closestLow * canvas.width) / 100;
	closestHighPx	= (99 - closestHigh) * canvas.width / 100;
	context.fillStyle	= "#cc0099";
	context.fillRect(0, 0, closestLowPx, canvas.height);
	context.fillRect((canvas.width - closestHighPx), 0, closestHighPx, canvas.height);
	
	// Easier to just put them in an element and position them at closestLowPx and closestHighPx
	document.getElementById("lowGuess").innerHTML	= closestLow;
	document.getElementById("lowGuess").style.left	= closestLowPx + "px"
	
	document.getElementById("highGuess").innerHTML	= closestHigh;
	document.getElementById("highGuess").style.left	= closestHighPx + "px";
//	context.fillText((closestHigh + ""), closestHighPx, canvas.height / 2);

	pastGuessesElement.style.visibility = "visible";
} // guessButton