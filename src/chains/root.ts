import { defineChain, Address } from "viem"
import { addresses } from "../addresses"

export const root = defineChain({
    id: 7668,
    name: 'Rootnet',
    nativeCurrency: { name: 'Ripple', symbol: 'XRP', decimals: 18},
    rpcUrls: {
        default: {
            http: ['https://root.rootnet.live/archive'],
        },
    },
    contracts: {
        ensDnsRegistrar: {
            address: '0xB32cB5677a7C971689228EC835800432B339bA2B' as Address,
        },
            ensDnssecImpl: {
            address: '0x0fc3152971714E5ed7723FAFa650F86A4BaF30C5' as Address,
        },
        ...addresses[7668],
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11' as Address,
            blockCreated: 14_353_601,
        },
    },
    subgraphs: {
        ens: {
            url: 'https://subgraph.rootnameservice.com/subgraphs/name/graphprotocol/rns'
        }
    },
})