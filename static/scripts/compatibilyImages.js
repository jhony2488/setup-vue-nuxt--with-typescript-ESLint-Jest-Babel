function getBrowsers() {
	navigator.sayswho = (function () {
		const ua = navigator.userAgent
		let tem
		let M =
			ua.match(
				/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
			) || []
		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || []
			return 'IE ' + (tem[1] || '')
		}
		if (M[1] === 'Chrome') {
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
			if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera')
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']
		if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
		return M.join(' ')
	})()
	return navigator.sayswho
}

const browser = getBrowsers()
console.log(
	'Olá dev tudo bem? o navegador que você esta utilizando e o: ' + browser
)
let browserGet = browser.replace(/[0-9]/g, '')
let count = 0
browserGet = browserGet.replace(' ', '')
browserGet = browserGet.toLowerCase()
$('img')
	.on('load', function () {
		if (count <= 0) {
			console.log('as imagens nesta página foram carregadas corretamente')
			count++
		}
	})
	.on('error', function () {
		if (count <= 0) {
			console.log('error no carregamento das imagens')
			if (
				browserGet == 'internet explore' ||
				browserGet == 'edger' ||
				browserGet == 'chrome' ||
				browserGet == 'ie'
			) {
				alert(
					'algumas imagens podem não ter sido carregadas corretamente, por favor  baixe a versão nais recente do google Chrome para melhorar sua experiência no nosso site'
				)
				window.open('https://www.google.com/intl/pt-BR/chrome/')
			} else if (browserGet == 'firefox') {
				alert(
					'algumas imagens podem não ter sido carregadas corretamente, por favor  baixe a versão nais recente do Firefox para melhorar sua experiência no nosso site'
				)
				window.open('https://www.mozilla.org/pt-BR/firefox/new/')
			} else if (browserGet == 'opera') {
				alert(
					'algumas imagens podem não ter sido carregadas corretamente, por favor  baixe a versão nais recente do Opera para melhorar sua experiência no nosso site'
				)
				window.open('https://www.opera.com/pt-br')
			} else if (browserGet == 'safari') {
				alert(
					'algumas imagens podem não ter sido carregadas corretamente, por favor  baixe a versão nais recente do Safari para melhorar sua experiência no nosso site'
				)
				window.open('https://www.techtudo.com.br/tudo-sobre/safari.html')
			} else {
				alert(
					'algumas imagens podem não ter sido carregadas corretamente, por favor  baixe a versão nais recente do google Chrome para melhorar sua experiência no nosso site'
				)
				window.open('https://www.google.com/intl/pt-BR/chrome/')
			}
			count++
		}
	})
