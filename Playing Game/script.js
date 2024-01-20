let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown(params) {
	text.innetText = "You are in the town square. You see a sing that says Store.";

	button1.onclick = goStore;
	button2.onclick = goCave;
	button3.onclick = fightDragon;

	button1.innerHTML = "Go to store";
	button2.innerHTML = "Go to cave";
	button3.innerHTML = "Fight dragon";
}

function goStore() {
	// modify display text
	text.innetText = "You enter the store.";

	// add update for buttons
	button1.onclick = buyHealth;
	button2.onclick = buyWeapon;
	button3.onclick = goTown;

	button1.innerHTML = "Buy 10 helth (10 gold)";
	button2.innerHTML = "Buy weapon (30 gold)";
	button3.innerHTML = "Go to town square";
}

function goCave() {
	console.log("Going to cave.");
}

function fightDragon() {
	console.log("Fighting dragon.");
}
