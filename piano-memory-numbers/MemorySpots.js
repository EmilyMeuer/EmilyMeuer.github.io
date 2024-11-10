"use strict";
/*
	Emily Meuer
	04/20/2015
	CISC 131

	What does the program do?
	* AMDG *
*/

window.onload = function()
{
  var bartok;
  var haydn;
  
  bartok = document.getElementById("bartok");
  haydn = document.getElementById("haydn");
  
  //Haydn();
	//window.setInterval(Haydn, (getRandomInteger(5000) + 7000));
	
	haydn.onclick = runHaydn;
	bartok.onclick = runBartok;
};

/*
function memoryNumbers ()
{
  memory.innerHTML = getRandomInteger(7) + 4;
}
*/

// Consolidate into one function, depending on which variable is clicked?

function runBartok()
{
  bartokSpots();
  window.setInterval(bartokSpots, (getRandomInteger(5000) + 7000));
}

function runHaydn ()
{
  haydnSpots();
  window.setInterval(haydnSpots, (getRandomInteger(5000) + 7000));
}

function haydnSpots ()
{
  var haydn;
  haydn = ["1","2","3","4","5","6","7","8","8a","9","10","11"];
  numbers.innerHTML = haydn[getRandomInteger(haydn.length - 1)];
}

function bartokSpots ()
{
  var bartok;
  bartok = ["1","1b","1c","2","3","4","4b","5","6","7","7b","8","8b","9","10"];
  numbers.innerHTML = bartok[getRandomInteger(bartok.length - 1)]
}

function getRandomInteger(upperLimit)
{
	var result;
	result = Math.random();
	result = result * (upperLimit + 1);
	result = Math.floor(result);
	return result;
}	// getRandomInteger

function getRandomRGB()
{
	var red;
	var green;
	var blue;
	var result

	red = getRandomInteger(255);
	green = getRandomInteger(255);
	blue = getRandomInteger(255);

	result = "rgb(" + red + ", " + green + ", " + blue + ")";
	return result;
} // getRandomRGB