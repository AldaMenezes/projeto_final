require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = "";

const RINKEBY_PRIVATE_KEY = "";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY_URL}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: "",
    },
  },
};
