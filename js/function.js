window.addEventListener("DOMContentLoaded",() => {
	const c = new Switch("#switch");
});

class Switch {
	constructor(el) {
		this.el = document.querySelector(el);
		this.el?.addEventListener("change",this.removePristine);
	}
	removePristine() {
		this.removeAttribute("data-pristine");
	}
}




const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');

prevBtn.addEventListener('click', () => {
  carousel.style.animationPlayState = 'paused';
  carousel.style.animationDirection = 'reverse';
});

nextBtn.addEventListener('click', () => {
  carousel.style.animationPlayState = 'paused';
  carousel.style.animationDirection = 'normal';
});
