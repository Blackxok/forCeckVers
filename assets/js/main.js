document.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('.nav_btn')

	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			buttons.forEach(function (btn) {
				btn.classList.remove('active')
			})
			this.classList.add('active')
		})
	})
})
