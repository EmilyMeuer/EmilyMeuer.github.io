/*
	Emily Meuer
	02/23/2018
	
	Promises
*/

window.onload = function() {

}; // window.onload

function example() {
	var delayed_promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("delayed complete");
		}, 1000);
	}); // delayed_promise
	
	
	var immediate_promise = new Promise((resolve, reject) => {
		resolve("immediate complete");
	}); // immediate_promise
	
	// Sending data or error to "then()":
	delayed_promise.then(data => {
		console.log(data);
	}, error => {
		console.log(error);
	});
	
	// Better:
	immediate_promise.then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});
} // example