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

const locations = [
	{
		name: "town square",
		"button text": ["Go to store", "Go to cave", "Fight dragon"],
		"button functions": [goStore, goCave, fightDragon],
		text: 'You are in the town square. You see a sign that says "Store".',
	},
	{
		name: "store",
		"button text": [
			"Buy 10 health (10 gold)",
			"Buy weapon (30 gold)",
			"Go to town square",
		],
		"button functions": [buyHealth, buyWeapon, goTown],
		text: "You enter the store.",
	},
];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
	button1.innerHTML = "Go to store";
	button2.innerHTML = "Go to cave";
	button3.innerHTML = "Fight dragon";
	button1.onclick = goStore;
	button2.onclick = goCave;
	button3.onclick = fightDragon;
	text.innetText =
		'You are in the town square. You see a sing that says "Store".';
}

function goTown() {
	update();
}

function goStore() {}

function goCave() {
	console.log("Going to cave.");
}

function fightDragon() {
	console.log("Fighting dragon.");
}