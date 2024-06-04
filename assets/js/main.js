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
	// outside effect
	const color = 'rgba(0, 26, 255, 1)' /* white outline */
	const r = 10 /* width of outline in pixels */
	const n = Math.ceil(2 * Math.PI * r) /* number of shadows */
	var str = ''
	for (
		var i = 0;
		i < n;
		i++ /* append shadows in n evenly distributed directions */
	) {
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
