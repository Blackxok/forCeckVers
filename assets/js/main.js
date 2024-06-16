//////////////////////////////////// nav
document.addEventListener('DOMContentLoaded', function () {
	let number_item = document.querySelectorAll('.l_d_num')
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

// l_detail.addEventListener('mouseover', e => {
// 	var item1 = document.getElementsByClassName('l_d_num')
// 	var item2 = document.getElementsByClassName('l_detail')
// 	item1.setAttribute('style', 'transform:translateX(10px);')
// 	item2.setAttribute('style', 'background-color:blue;')
// })

l_detail.forEach(e => {
	e.addEventListener('click', () => {
		console.log(e)
	})
})
