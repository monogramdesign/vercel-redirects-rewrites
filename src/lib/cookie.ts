/**
 * Sets a cookie in the browser.
 * @param name Name of the cookie
 * @param value Value of the cookie
 * @param days Days until the cookie expires
 */
export function setCookie(name: string, value: string, days = 10) {
	if (typeof document === 'undefined') {
		return
	}
	let expires = ''
	if (days) {
		const date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		expires = `; expires=${date.toUTCString()}`
	}
	document.cookie = `${name}=${value || ''}${expires}; path=/`
}

export function getCookie(name: string) {
	if (typeof document === 'undefined') return
	const nameEQ = `${name}=`
	const ca = document.cookie.split(';')
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) === ' ') c = c.substring(1, c.length)
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
	}
	return null
}

// export function eraseCookie(name: string) {
// 	setCookie(name, '', -1)
// }
