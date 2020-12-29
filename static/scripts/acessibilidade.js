document.onkeydown = function (e) {
	e.keyCode === 13 && document.activeElement.click()
}
