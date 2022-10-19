const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]


// // let dots = Array.from(dot.children);

// EVENEMENT CARROUSEL

	// Je récupère les flèches :
let leftArrow = document.querySelector('.arrow_left');
let rightArrow = document.querySelector('.arrow_right');


 	// J'ajoute les événements :
leftArrow.addEventListener('click', e => {

	let prevDot = currentDot.previousElementSibling;

	currentDot.classList.remove("dot_selected");
	prevDot.classList.add("dot_selected");

})

rightArrow.addEventListener('click', e => {

	let nextDot = currentDot.nextElementSibling;

	currentDot.classList.remove("dot_selected");
	nextDot.classList.add("dot_selected");

})


	// J'insère les bullet points dynamiquement :
let bulletPoints

slides.forEach(function(slide){

	bulletPoints = document.querySelector('.dots').innerHTML += `<div class="dot"></div>`;

})


	// Différencier le bullet point actuel des autres :
let currentDot = document.querySelector('.dot')
currentDot.classList.add("dot_selected")
