const { Address, Query, ContractFunction } = require('@elrondnetwork/erdjs')

const buildQuery = ({ contract, func }) => new Query({
	address: new Address(contract.address),
	func: new ContractFunction(func)
})

module.exports = {
	buildQuery
}
