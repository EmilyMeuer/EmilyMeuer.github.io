/*
	Emily Meuer
	Feb. 9, 2018
*/

window.onload = function()
{
//	window.alert("Hello!");
	
	document.getElementById("pink").onclick = pinkClick;
	printFib();
} // window.onload

function printFib()
{
	var curNum	= 0;
	var sum		= 0;
	
	for(var i = 0; i < 10; i++)
	{
		sum	= sum + curNum;
		curNum	= curNum + 1;
	} // for
	
	console.log("sum = " + sum);
} // printFib

function pinkClick()
{
	printColor(document.getElementById("pink"));
} // pinkClick

function printColor(element)
{
	if(element == undefined)
	{
		console.log("index.js: printColor parameter is undefined");
	} // error checking
	
	element.style.backgroundColor = "#cc0099";
} // printColor