// scripts.js file

var a = prompt('Enter value a'),
	b = prompt('Enter value b'); 
	

var value = (a*a)-(2*a*b)-(b*b);

alert('value is: ' + value);

console.log('value is:', value);

if (value > 0) {
	console.log('positive result');
	alert('positive result');
} else if (value < 0) {
	console.log ('negative result');
	alert('negative result')
} else {
	console.log('result is 0');
	alert('result is 0');
}



