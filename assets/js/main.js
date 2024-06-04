document.addEventListener('DOMContentLoaded', function () {
<<<<<<< HEAD
	let buttons = document.querySelectorAll('.nav_btn')
	let number_item = document.querySelectorAll('.l_d_num')

=======
	//////////////////////////////////// nav
	var buttons = document.querySelectorAll('.nav_btn')
>>>>>>> a299558bb184407b21829046209d116c533ed91f
	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			buttons.forEach(function (btn) {
				btn.classList.remove('active')
			})
			this.classList.add('active')
		})
	})
<<<<<<< HEAD

	// console.log(detail_item)

	number_item.forEach((e, x) => {
		e.innerHTML = x + 1
=======
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
	//////////////////////////////////// outside effect
})
const h3 = document.querySelectorAll('.r_side_item_title')

h3.forEach(h3_item => {
	h3_item.addEventListener('click', () => {
		const p = h3_item.nextElementSibling // Get the next paragraph element
		p.style.display = p.style.display
		if (p.style.display === 'none') {
			p.style.display = 'block'
			console.log(h3_item)
			h3_item::after
		} else {
			p.style.display = 'none'
			// h3_item.classList.remove('.active')
		}
>>>>>>> a299558bb184407b21829046209d116c533ed91f
	})
})
