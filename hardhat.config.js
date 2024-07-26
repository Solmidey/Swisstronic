require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xee2ab869f643ba6fbe014ce55e5d43b098e0b8e2e8fce82ab6f6f299cd228fa8"], //Your private key starting with "0x"
    },
  },
};
