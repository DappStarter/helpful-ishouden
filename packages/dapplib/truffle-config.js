require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth place home hunt private bone switch'; 
let testAccounts = [
"0x6318d7d9e7bdd96da9e708d27a2211276e894f9982f5e9ea53c56b11b46657c9",
"0x3228aa184fffc0ad498c57b8174f36eb8f89af6af1c0600a84ba214b56893d0d",
"0xf6ba62f533c012323297df825347507e4240a5b4b16be0b5385beb48bef4b852",
"0x959b214b1bcd2f8e5a84683ab196dec9939d85354d5284f520bbe23388750796",
"0x7832ca9cf134b34397231f5e10451f13dfe49d09902b42b4105d884041539cdc",
"0x3979b1c6e203c74e6558ae4f989533aa0eb4609c9ced6008efe7b8cac7b52f17",
"0x08956a5b8f4884feb0a419a5d515dfa080f80bd120ea1ae7c902b1f333c05627",
"0x23d746b73b5f8267c1ed700e911339d36fe648032f76edbb8d62ee09bddfe3a4",
"0x46ddfc9d2cb071d286ad93ffed4bc367a9bbdd8e834e74533c48a5cd511b3229",
"0x39a11a058fbc641764b4cef827ec8a036c4761e28c1de0c202fe36b86465bf6b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
