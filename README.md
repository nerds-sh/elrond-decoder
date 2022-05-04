# Nerds' Elrond Decoder

Npm package for decoding Elrond smart contract queries based on ABIs.

## Installation

Using npm:

```sh
npm install -E @nerds.sh/elrond-decoder
```

Using yarn:

```sh
yarn add -E @nerds.sh/elrond-decoder
```

## Example

```js   
const { decode } = require('@nerds.sh/elrond-decoder')

const input = {
	abi: {
		type: 'file',
		value: './raffle.abi.json',
	},
	contract: 'erd1qqqqqqqqqqqqqpgqvul86784zrj47hkn0y0pd4pzn8qyw0z6c32q558mf5',
	environment: 'devnet',
	func: 'getWinners',
    // optional preserveTypes flag to preserve type information
}

decode(input)
    .then(console.log)
    .catch(console.error)   
```

```
