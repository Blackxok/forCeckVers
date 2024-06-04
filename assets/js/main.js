document.addEventListener('DOMContentLoaded', function () {
	let buttons = document.querySelectorAll('.nav_btn')
	let number_item = document.querySelectorAll('.l_d_num')

	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			buttons.forEach(function (btn) {
				btn.classList.remove('active')
			})
			this.classList.add('active')
		})
	})

	// console.log(detail_item)

	number_item.forEach((e, x) => {
		e.innerHTML = x + 1
	})
})
