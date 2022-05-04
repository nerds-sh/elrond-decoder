const match = require('@nerds.sh/js-pattern')

const formatValue = value => match(value.constructor.name)
	.with('Address', () => value.toString())
	.with('BigNumber', () => value.toString())
	.otherwise(() => value)

const formatField = input => field => ({
	[field.name]: input.preserveTypes ? field.value.value : formatValue(field.value.value)
})

const flattenResults = input => ({values}) => values.map(({items}) => items.map(({fields}) => fields.map(formatField(input))))

module.exports = {
	flattenResults
}
