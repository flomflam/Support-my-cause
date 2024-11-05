const db = window.localStorage;

var inputName = document.querySelector("input");
var supporterText = document.querySelector("h4");

var supporterCount = db.getItem("supporterCount") || 0;
supporterText.innerHTML = supporterCount;

function increaseSupporter() {
	// if the enter key is pressed
	if (event.keyCode == 13 && inputName.value.length > 0) {
		supporterCount++;
		db.setItem("supporterCount", supporterCount);
		supporterText.innerHTML = supporterCount;
		inputName.value = "";
	}
}
