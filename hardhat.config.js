require('@nomiclabs/hardhat-waffle');
const { PRIVATE_KEY, PROJECT_ID } = require('./sensitive-data');

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337, // config standard
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts: [],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
