console.log("app.js linked");



function generateFortuneCookie() {

	var fortunes = ["You will die.", "You will not die... yet.", "I don't know about your future, but I feel good.", "A Husky will eat you.", "A Nykosaur will maul you... and then eat you.", "A beetle gets squished.", "You will pay Edsen P. Casintahan $1.00 USD for his birthday, if its after his birthday (January 06) you will pay $100.00 USD.", "You win! Go tell your teacher.", "You lose! Go tell your mom...", "You'll see a ghostly beetle. He will ask you WHY YOU LET ME DIE. selfish human..."];
	var fortuneDraw = fortunes[Math.floor((Math.random() * 10) + 1)];
	var node = document.createElement("li");
	var fortuneCookieText = document.getElementById("fortuneCookieText");
	var textNode;

	if (fortuneDraw == undefined) {

		var textNode = document.createTextNode("Sorry, your future isn't clear. Check your wifi...");

	}else{

		var textNode = document.createTextNode(fortuneDraw);

	}

	node.appendChild(textNode);
	document.getElementById("previousFortunes").appendChild(node);
	fortuneCookieText.innerHTML = fortuneDraw;

	console.log("Generated fortune");
}
