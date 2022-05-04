import { flatten } from 'lodash'
import { reformatResult } from './reformat-result'
import { flattenResults } from './flatten-results'
import { queryContract } from './query-contract'
import { initContract } from './init-contract'
import { loadAbi } from './load-abi'

type Input = {
    abi: {
        type: string,
        value: string
    },
    environment: 'testnet' | 'devnet' | 'mainnet',
    contract: string,
    func: string,
    preserveTypes?: boolean,
}

export const decode = (input: Input) => loadAbi(input)
    .then(initContract)
    .then(queryContract)
    .then(flattenResults(input))
    .then(flatten)
    .then(reformatResult)
