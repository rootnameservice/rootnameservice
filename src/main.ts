
import { Address } from 'viem'

export const networks = {
  porcini: {
    name: 'Porcini',
    chainId: 7672,
    ensAddress: '0xA931c1F9621ECa562c258B81bF9fA8401f12241B',
  },
  root: {
    name: 'Root',
    chainId: 7668,
    ensAddress: '0xEC58C26B8E0A4bc0fe1ad21D216e4ecAd9e037A8',
  },
}

export const addresses = {
  7672: { // Porcini
    ensBaseRegistrarImplementation: {
      address: '0x4420F023F0133F741e182f721b1DC2D3942fcb5A' as Address,
    },
    ensBulkRenewal: {
      address: '0xA7eA86ef8BeD3B3E36e8B08B108da297B8dC5A9a' as Address,
    },
    ensEthRegistrarController: {
      address: '0xd64FA152497175B18352F44D720e55bc67faB7EB' as Address,
    },
    ensNameWrapper: {
      address: '0xBDC394b7704d3E0DC963a6Cb0Db92cBA2054da23' as Address,
    },
    ensPublicResolver: {
      address: '0xaEb82E192d9DbA65478559034924e365bE366E5a' as Address,
    },
    ensRegistry: {
      address: '0xA931c1F9621ECa562c258B81bF9fA8401f12241B' as Address,
    },
    ensReverseRegistrar: {
      address: '0xDa3E37B6aA86749efF54b48983bcB908bB501c8a' as Address,
    },
    ensUniversalResolver: {
      address: '0xB3c0AE882b35E72B7b84F7A1E0cF01fBDC617170' as Address,
    },
  },
  7668: { // Root
    ensBaseRegistrarImplementation: {
      address: "0xEeD3C3c547751e23020f4cb506FbA37baEb3308D" as Address,
    },
    ensBulkRenewal: {
      address: "0x0193eFBF9504422700295C022766891b0b10049F" as Address,
    },
    ensEthRegistrarController: {
      address: "0xc85E5802BADE56Facb93bb373da6bA7c1902b19c" as Address,
    },
    ensNameWrapper: {
      address: "0x44640D662A423d738D5ebF8B51E57AfC0f2cf4Df" as Address,
    },
    ensPublicResolver: {
      address: "0x870bC2604D6EAC536c791A603bFDE1A1448e168e" as Address,
    },
    ensRegistry: {
      address: "0xEC58C26B8E0A4bc0fe1ad21D216e4ecAd9e037A8" as Address,
    },
    ensReverseRegistrar: {
      address: "0xfFF7719aaB38eadE6A1CfdA864a174B715e9d673" as Address,
    },
    ensUniversalResolver: {
      address: "0x7808dF0A1F1d58c6Ad0F3bA07E749D730F02f13A" as Address,
    },
  },
}