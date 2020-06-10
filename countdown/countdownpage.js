// Perfect Squares Countdown

window.onload = function() {
	// Calculate the remaining days:
	var weddingDate = new Date('2020-10-02 16:00');
	var currentDate = Date.now();	
		
	var daysRemaining = Math.floor((weddingDate - currentDate) / (1000 * 60 * 60 * 24));
	document.getElementById('numDays').innerText = daysRemaining + ' days until Oct. 2, 2020!';
	
	// Create the table:	
	var table = document.createElement('TABLE');
	var countdownSquaresDiv = document.getElementById('perfectSquaresCountdown');
	countdownSquaresDiv.append(table);
	var row = table.insertRow(0);
	
	var square = 1;
	var daysGoingBackwards = [];
	
	// Calculate the squares:
	for (var i = 0; i < daysRemaining; i++)
	{
		if (i === (square * square)) {
			daysGoingBackwards[i] = 's';
			square++;
		}
	}
		
	var numPerfectSquaresElement = document.getElementById('numPerfectSquares');
	numPerfectSquaresElement.innerText = 'There are ' + (square - 1) + ' perfect squares left before the wedding:';
	
	square = 1;
	var cellIndex = 0;
	for (var i = 0; i < daysRemaining; i++)
	{
		var newCell = row.insertCell(cellIndex);
		cellIndex++;
		newCell.innerText = daysRemaining - i;
		if (daysGoingBackwards[daysRemaining - i] === 's') {
			newCell.classList = ['squares'];
			
			row = table.insertRow(square);
			square++;
			cellIndex = 0;
		}
	}
};
