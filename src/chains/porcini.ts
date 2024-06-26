import { defineChain, Address } from "viem"
import { addresses } from "../addresses"

export const porcini = defineChain({
    id: 7672,
    name: 'Porcini',
    nativeCurrency: { name: 'Ripple', symbol: 'XRP', decimals: 18},
    rpcUrls: {
        default: {
            http: ['https://porcini.rootnet.app/archive'],
        },
    },
    contracts: {
        ensDnsRegistrar: {
            address: '0xB32cB5677a7C971689228EC835800432B339bA2B' as Address,
        },
            ensDnssecImpl: {
            address: '0x0fc3152971714E5ed7723FAFa650F86A4BaF30C5' as Address,
        },
        ...addresses[7672],
        multicall3: {
            address: '0xc17Dd77E29F76A82Ca65f56E3a8c73C5CB79ff5c' as Address,
            blockCreated: 13_616_394,
        },
    },
    subgraphs: {
        ens: {
            url: 'https://subgraph-stage.rootnameservice.com/subgraphs/name/graphprotocol/ens'
        }
    },
    testnet: true,
})