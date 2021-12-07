require("@nomiclabs/hardhat-waffle");

const projectId = `ed548dc1c1a346a0be4e88b017d1a2c2`;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337, // config standard
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts: [],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
