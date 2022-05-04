const {SmartContract, Address} = require('@elrondnetwork/erdjs')

const makeContractInstance = ({contract, abi}) => new SmartContract({
	address: new Address(contract),
	abi
})

const initContract = input => ({
	...input,
	contract: makeContractInstance(input)
})

module.exports = {
	initContract
}
