const {get} = require('lodash')
const match = require('@nerds.sh/js-pattern')
const {AbiRegistry, SmartContractAbi} = require('@elrondnetwork/erdjs')

const makeLoadingParameter = ({abi}) => {
	const type = get(abi, 'type', '')
	const value = get(abi, 'value', '')

	return match(type)
		.with('url', () => ({urls: [value]}))
		.with('file', () => ({files: [value]}))
		.otherwise(() => {throw new Error(`Unknown input type: ${type}`)})
}

const getInterfaceNames = ({interfaces}) => interfaces.map(({name}) => name)

const loadAbi = input => AbiRegistry.load(makeLoadingParameter(input))
	.then(abi => new SmartContractAbi(abi, getInterfaceNames(abi)))
	.then(abi => ({...input, abi}))

module.exports = {
	loadAbi
}
