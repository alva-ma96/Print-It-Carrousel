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
	}
]


// EVENEMENT FLECHE CARROUSEL
// 1° Je récupère les flèches
let leftArrow = document.getElementsByClassName('arrow_left');
let rightArrow = document.getElementsByClassName('arrow_right');

// 2° J'ajoute l'événement

leftArrow.addEventListener('click', ()=> {
	// montre la photo précédente
})

rightArrow.addEventListener('click', ()=> {
	// montre la photo suivante
})

