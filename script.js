const prompt = require("prompt-sync")({ sigint: true });

let a = prompt("What is your age"); // prompts always returns a string
a = Number.parseInt(a); //convert the string to integer
// console.log(typeof a);
if (a <= 0) {
	  alert("This is an invalid age");
	  } else if (a < 9 && a > 0) {
	  	  alert("you are a Kid and you can't think of driving");
	  	  } else if (a < 18 && a > 9) {
	  	  	  alert("you are a Teenager and you can think of driving");
	  	  	  } else {
	  	  	  	  alert("You can Drive as you are above 18");
	  	  	  	  
	  	  	 	  }
	  

