const reformatResult = values => values.map(value => {
	let result = {}

	value.forEach(entry => {
		Object.entries(entry).forEach(([key, value]) => {
			result[key] = value
		})
	})

	return result
})

module.exports = {
	reformatResult
}
