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


	// Je récupère les flèches :
let leftArrow = document.querySelector('.arrow_left');
let rightArrow = document.querySelector('.arrow_right');


	// J'insère les bullet points dynamiquement avec une boucle:
slides.forEach(function(slide){
	
	document.querySelector('.dots').innerHTML += `<div class="dot"></div>`;
	
})

	
	// Différencier le bullet point actuel des autres en lui ajoutant une classe :
let currentDot = document.querySelector('.dot')
currentDot.classList.add("dot_selected")


 	// J'ajoute les événements sur les flèches :
let index = 0

//flèche droite
rightArrow.addEventListener('click', () => {

	if (index == slides.length - 1) {
		index = 0
		currentDot.classList.remove("dot_selected")
		currentDot = document.querySelector('.dot')
		currentDot.classList.add("dot_selected")

	}else if (index <= slides.length){
		let nextDot = currentDot.nextElementSibling;
		currentDot.classList.remove("dot_selected");	
		nextDot.classList.add("dot_selected");
		currentDot = nextDot
		index++
	}

	document.getElementById('bannerIMG').src=`./assets/images/slideshow/${slides[index].image}`
	document.getElementById('bannerP').innerHTML=slides[index].tagLine

})

//flèche gauche
leftArrow.addEventListener('click', () => {

	if (index == 0) {
		index = slides.length-1
		currentDot.classList.remove("dot_selected")
		currentDot = document.querySelectorAll('.dot')[slides.length-1]
		currentDot.classList.add("dot_selected")


	}else if (index <= slides.length){
		let prevDot = currentDot.previousElementSibling;
		currentDot.classList.remove("dot_selected");	
		prevDot.classList.add("dot_selected");
		currentDot = prevDot
		index--

		console.log(index);
	}

	document.getElementById('bannerIMG').src=`./assets/images/slideshow/${slides[index].image}`
	document.getElementById('bannerP').innerHTML=slides[index].tagLine

})