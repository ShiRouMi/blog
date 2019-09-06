function _debounce(fn, n) {
	var timer, context, args
	return function() {
		context = this
		args = arguments
		
		clearTimeout(timer)

		timer = setTimeout(function() {
			fn.apply(context, args)
		}, n)
	}
}

function fn() {
	console.log(111)
}

