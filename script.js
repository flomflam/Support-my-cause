const request = window.indexedDB.open("myCampaign", 3);
let db;

var inputName = document.querySelector("input");
var supporterText = document.querySelector("h4");

var supporterCount = 0;

request.onerror = (event) => {
	console.error("Why didn't you allow my web app to use IndexedDB?!");
  };
request.onsuccess = (event) => {
	db = event.target.result;
	supporterCount = db.transaction("myCampaign").objectStore("myCampaign");
	supporterText.innerHTML = supporterCount.get("supporterCount");
  };

  request.onupgradeneeded = (event) => {
	// Save the IDBDatabase interface
	const db = event.target.result;
  
	// Create an objectStore for this database
	const objectStore = db.createObjectStore("myCampaign", { keyPath: "supporterCount" });



	function updateDB() {
		// if the enter key is pressed
		if (event.keyCode == 13 && inputName.value.length > 0) {
			supporterCount++;
			supporterText.innerHTML = supporterCount;
			inputName.value = "";
			db.transaction("myCampaign").objectStore("myCampaign").put("supporterCount", supporterCount);
		}
	}
}

function increaseSupporter() {
	updateDB();
}