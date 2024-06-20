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
            address: '0xB5c68a77ec2d7ea4E7599cc167164Bd79E4d58eF' as Address,
            blockCreated: 13_546_153,
        },
    },
    subgraphs: {
        ens: {
            url: 'https://subgraph.rootnameservice.com/subgraphs/name/graphprotocol/rns'
        }
    },
})