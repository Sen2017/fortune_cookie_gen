console.log("js linked");

function generateFortuneCookie() {

	var fortunes = ["You will die", "You will not die... yet", "Edsen is the best", "A Husky will eat you", "A Nykosaur will maul you... and then eat you", "A beetle gets squished", "You will pay Edsen P. Casintahan $1.00 USD for his birthday, if its after his birthday (January 06) you will pay $100.00 USD", "You win! Go tell your teacher", "You lose! Go tell your mom", "You see a ghostly beetle. He asks you WHY YOU LET ME DIE"];
	var changeDiv = document.getElementByID("fortuneCookieText"); 
	changeDiv.innerHTML = fortunes[5];
	console.log("CHECK");

}