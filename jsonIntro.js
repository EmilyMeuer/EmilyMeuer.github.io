/*
	Emily Meuer
	2/21/2018
	
	JSON Intro
*/

window.onload = function() {
	var req1 	= new XMLHttpRequest();
	var	req2	= new XMLHttpRequest();
	
	var	req1Finished	= false;
	var	req2Finished	= false;
	
	var	req1Object;
	var	req2Object;
	
	req1.onreadystatechange = function() {
		if(req1.readyState == 4 && req1.status == 200) {			
			req1Finished	= true;
			window.alert(req1.responseText);
			
			req1Object	= JSON.parse(req1.responseText);
			
			if(req1Finished && req2Finished) {
				window.alert("Both are finished!");
				checkDistance(req1Object, req2Object);
			} // check finished
		} // if
	};
	
	req2.onreadystatechange = function() {
		if(req2.readyState == 4 && req2.status == 200) {
			req2Finished	= true;
			window.alert(req2.responseText);
			
			req2Object	= JSON.parse(req2.responseText);
			
			if(req1Finished && req2Finished) {
				window.alert("Both are finished!");
				checkDistance(req1Object, req2Object);
			} // check finished
		} // if
	};
	
	req1.open("GET", "https://freegeoip.net/json/111.118.10.64", true);
	req1.send();
	
	req2.open("GET", "https://freegeoip.net/json/140.209.25.45", true);
	req2.send();
} // window.onload

function checkDistance(obj1, obj2) {
	// a = sin((latitudeDelta / 2)^2) + cos(latitude1) * cose(latitude2) * sin((longitudeDelta / 2) ^ 2)
	// c = 2 * sin^-1(sqrt(a))
	// dist = radius * c
	// (earth's radius = 3959 miles)
	
	window.alert("Would check distance here.");
} // checkDistance