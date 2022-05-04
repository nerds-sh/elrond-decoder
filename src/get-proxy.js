const { ProxyProvider } = require('@elrondnetwork/erdjs')
const {providers} = require('./providers')

const getProxy = ({environment}) => new ProxyProvider(providers[environment], {timeout: 4000})

module.exports = {
	getProxy
}
