require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember smile just entire swallow sketch'; 
let testAccounts = [
"0xb0e6dc97f45e640eb72b95bba93b158c96e407e33eeb1048c19532d9cbc0c61d",
"0x8768832d5bc719128ea0de688921ae3fa4109841c50f8e30a9b34ed863da33ca",
"0x8ee3b4d760d83d0055ccb96cb406639047388ae15865ceb227d394ca85a5fdbb",
"0xf75b2a46c70ece7b4c7263c74c64a8e2bf5acb4a040abf2cd16db824a6c95c59",
"0x7299338f1992edd78ec6cc34d97c7a0d46d90c69f873035659bdd1ee893d6995",
"0x72921d18aaf5b0a4478731f78b41b51f2af4682fc5625f0597301ef1da517b39",
"0x42f7198690fac200f15ab7aeee9d6413b0b364796a7cca533912d7fc2dd4fd57",
"0x8c0c3ab95f1162561825d7c438009fb4747e63b3a7b8dfc863d5c031034b6b73",
"0xf8529e237aa28df8e4f2e81cbaa1d39658ef783451f01703644e4c87a00db43a",
"0x014e6fb97eb22f25ef4f48a71f610eb5eafe87b9068fc3f2edaae7a35b4db47e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


