function findResult() { //Function to count number of letters from box1 in box2
	var charToFind = document.getElementById("box1").value;
	var sentence = document.getElementById("box2").value;
	var sentenceArray = sentence.split("");
	var i = 0;
	var result = 0;
	
	for (i = 0; i < sentenceArray.length;i++) {
		console.log(sentenceArray[i]);
		if (charToFind == sentenceArray[i]) {
			result++;
			console.log(result);
		}
	}
	
	document.getElementById("resultBox").value = result;
	
}

function sentenceBoxClicked() { //function to empty box when selected by user
	if (document.getElementById("box2").value == "Please enter a sentence...") {
		document.getElementById("box2").value = "";
	}
	
}

function sentenceBoxNotClicked() { //Function to put placeholder message in box if empty
	if (document.getElementById("box2").value == "") {
		document.getElementById("box2").value = "Please enter a sentence...";
	}
}