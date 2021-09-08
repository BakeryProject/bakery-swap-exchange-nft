import { HardhatUserConfig } from 'hardhat/types/config'

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-solhint'
import 'hardhat-abi-exporter'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'
import 'hardhat-docgen'
import 'hardhat-gas-reporter'
import 'hardhat-typechain'
import 'hardhat-watcher'
import 'solidity-coverage'
import '@openzeppelin/hardhat-upgrades'

const INFURA_API_KEY = 'YOU_API_KEY'
const PRIVATE_KEY: string = process.env.PRIVATE_KEY || '0x1a'
const ETHERSCAN_API_KEY = 'YOU_API_KEY'

const config: HardhatUserConfig = {
  paths: {
    sources: './contracts',
  },
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.7.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
      evmVersion: 'istanbul',
    },
  },
  networks: {
    rinkeby: {
      chainId: 4,
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
    bsct: {
      chainId: 97,
      url: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
      accounts: [PRIVATE_KEY],
    },
    bsc: {
      chainId: 56,
      url: 'https://bsc-dataseed.binance.org',
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 21,
    enabled: true,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
}

export default config
