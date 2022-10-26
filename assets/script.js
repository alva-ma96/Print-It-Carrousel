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
rightArrow.addEventListener('click', () => {
	let nextDot = currentDot.nextElementSibling;
	currentDot.classList.remove("dot_selected");
	nextDot.classList.add("dot_selected");
	currentDot = nextDot
console.log(currentDot);
})

leftArrow.addEventListener('click', () => {
	let prevDot = currentDot.previousElementSibling;
	currentDot.classList.remove("dot_selected");
	prevDot.classList.add("dot_selected");
	currentDot = prevDot
})


	// J'insère les bullet points dynamiquement :
let bulletPoints

slides.forEach(function(slide){

	bulletPoints = document.querySelector('.dots').innerHTML += `<div class="dot"></div>`;

})


	// Différencier le bullet point actuel des autres :
let currentDot = document.querySelector('.dot')
currentDot.classList.add("dot_selected")


// 	// J'insère les photos dynamiquement :
// let afficherImages = document.getElementById('banner')

// 	slides.forEach(function(slide) {
// 		afficherImages.innerHTML += `<img src="./assets/images/slideshow/${slides.image}">
// 		<p>${slides.tagLine}</p>`
// });

// 	// Afficher une photo à la fois :
// let hiddenImage = document.querySelector('')