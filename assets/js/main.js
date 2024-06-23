//////////////////////////////////// nav
document.addEventListener('DOMContentLoaded', function () {
	let buttons = document.querySelectorAll('.nav_btn')
	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			buttons.forEach(function (btn) {
				btn.classList.remove('active')
			})
			this.classList.add('active')
		})
	})
	//////////////////////////////////// item numbers lesson detail section
	let number_item = document.querySelectorAll('.l_d_num')
	number_item.forEach((e, x) => {
		e.innerHTML = x + 1
	})
	//////////////////////////////////// outside effect
	const color = 'rgba(0, 26, 255, 1)'
	const r = 10
	const n = Math.ceil(2 * Math.PI * r)
	var str = ''
	for (var i = 0; i < n; i++) {
		const theta = (2 * Math.PI * i) / n
		str +=
			r * Math.cos(theta) +
			'px ' +
			r * Math.sin(theta) +
			'px 0 ' +
			color +
			(i == n - 1 ? '' : ',')
	}
	document.querySelector('.va').style.textShadow = str
})
//////////////////////////////////// outside effect
function acardion() {
	const h3 = document.querySelectorAll('.r_side_item_title')
	h3.forEach(h3_item => {
		let visible = false
		h3_item.addEventListener('click', () => {
			const p = h3_item.nextElementSibling
			visible = !visible
			p.style.display = visible ? 'block' : 'none'
			if (p.style.display == 'block') {
				h3_item.classList.add('active')
			} else {
				h3_item.classList.remove('active')
			}
		})
	})
}
acardion()
//  some hover effect
//  some hover effect
//  some hover effect
//  some hover effect
let l_detail = document.querySelectorAll('.lesson_detail')

l_detail.forEach(e => {
	e.addEventListener('mouseover', () => {
		e.querySelector('img').style.marginRight = '15px'
		e.querySelector('.reverse_strelka').style.marginLeft = '15px'
		e.querySelector('.reverse_strelka').style.marginRight = '0px'
	})
	e.addEventListener('mouseout', () => {
		e.querySelector('img').style.margin = '0px'
		e.querySelector('.reverse_strelka').style.marginLeft = '0px'
	})
}, false)
// Img TILT effect === === === === === ===
// Img TILT effect === === === === === ===
// Img TILT effect === === === === === ===
// Img TILT effect === === === === === ===
window.onload = function () {
	const imageElement = document.querySelector('.tilt_image')
	if (imageElement) {
		const handleMouseMove = e => {
			let rect = imageElement.getBoundingClientRect()
			let x = e.clientX
			let y = e.clientY

			let dx = (x - rect.width / 2) / (rect.width / 2)
			let dy = (y - rect.height / 2) / (rect.height / 2)

			imageElement.style.transform = `translateX(-35px) perspective(500px) rotateY(${
				dx * 6
			}deg) rotateX(${-dy * 6}deg)`
		}
		const handleMouseLeave = () => {
			imageElement.style.transform = ''
		}
		imageElement.addEventListener('mousemove', handleMouseMove)
		imageElement.addEventListener('mouseleave', handleMouseLeave)
	}
}
