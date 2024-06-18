// const slider = document.querySelector('.items')
// const slides = document.querySelectorAll('.item')
// const button = document.querySelectorAll('.button')

// let current = 0
// let prev = 4
// let next = 1

// for (let i = 0; i < button.length; i++) {
// 	button[i].addEventListener('click', () => (i == 0 ? gotoPrev() : gotoNext()))
// }

// const gotoPrev = () =>
// 	current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1)

// const gotoNext = () => (current < 4 ? gotoNum(current + 1) : gotoNum(0))

// const gotoNum = number => {
// 	current = number
// 	prev = current - 1
// 	next = current + 1

// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].classList.remove('active')
// 		slides[i].classList.remove('prev')
// 		slides[i].classList.remove('next')
// 	}

// 	if (next == 5) {
// 		next = 0
// 	}

// 	if (prev == -1) {
// 		prev = 4
// 	}

// 	slides[current].classList.add('active')
// 	slides[prev].classList.add('prev')
// 	slides[next].classList.add('next')
// }

// for (let i = 0; i < button.length; i++) {
// 	button[i].addEventListener('mousemove', () =>
// 		i == 0 ? gotoPrev() : gotoNext()
// 	)
// }
// ---------------------------------------------------------------------------
// ---------------------------for teacher boxes------------------------------------------------
const slider = document.querySelector('.items')
const slides = document.querySelectorAll('.item')
const button = document.querySelectorAll('.button')

let current = 0
let prev = 4
let next = 1

// Add click event listeners to each button
button.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		index === 0 ? gotoPrev() : gotoNext()
	})
})

// Add click event listeners to each slide
slides.forEach((slide, index) => {
	slide.addEventListener('click', () => {
		gotoNum(index)
	})
})

// Add mouseover event listener to slider container
slider.addEventListener('click', () => {
	gotoNext()
})

const gotoPrev = () => {
	current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1)
}

const gotoNext = () => {
	current < 4 ? gotoNum(current + 1) : gotoNum(0)
}

const gotoNum = number => {
	current = number
	prev = current - 1
	next = current + 1

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active', 'prev', 'next')
	}

	if (next === slides.length) {
		next = 0
	}

	if (prev === -1) {
		prev = slides.length - 1
	}

	slides[current].classList.add('active')
	slides[prev].classList.add('prev')
	slides[next].classList.add('next')
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
if (window.screen.availWidth < 768) {
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
} else if (window.screen.availWidth < 1000) {
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
} else {
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
}

// ----------------------------------------------------------------
