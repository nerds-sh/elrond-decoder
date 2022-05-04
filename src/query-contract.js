const {buildQuery} = require('./build-query')
const {getProxy} = require('./get-proxy')

const queryContract = input => {
	const {contract} = input

	return contract.runQuery(getProxy(input), buildQuery(input))
		.then(response => contract.methods.getWinners().interpretQueryResponse(response))
}

module.exports = {
	queryContract
}
