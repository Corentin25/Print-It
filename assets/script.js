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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot")
const bannerImg = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")

let i = 0;

function updateSlide() {
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerText.innerHTML = slides[i].tagLine;
	dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === i);
	});
}

arrowRight.addEventListener("click", () => {
	i++;
	if (i >= slides.length) i = 0;
	updateSlide();
});

arrowLeft.addEventListener("click", () => {
	i--;
	if (i < 0) i = slides.length - 1;
	updateSlide();
});

updateSlide();