/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

const bip39 = require('bip39');
const {BIP32Factory} = require('bip32');
const ecc = require('tiny-secp256k1')
const bip32 = BIP32Factory(ecc);
const {TronWeb} = require('tronweb');

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

const mnemonic = 'extend gap gate protect romance dry hen truth mind nature swap long';
// Private Key: d00756656485e2067f09160b61e371ea1d5049bfd1536f37a6fdb350fe53aace

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

// const HttpProvider = TronWeb.providers.HttpProvider; // This provider is optional, you can just use a url for the nodes instead

// const fullNode = new HttpProvider('https://nile.trongrid.io'); // Full node http endpoint
// const solidityNode = new HttpProvider('https://nile.trongrid.io'); // Solidity node http endpoint
// const eventServer = new HttpProvider('https://nile.trongrid.io'); // Solidity node http endpoint

// const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);

(async (req, res) => {
    try {
    // Convert the mnemonic phrase to a seed
        const seednew = await bip39.mnemonicToSeed(mnemonic);
        
    // Create a new BIP32 node from the seed
        const node = await bip32.fromSeed(seednew);
        let countvalue = 1;
        
    // Derive a child key from the BIP32 node using the specified path
        const child = await node.derivePath(`m/44'/195'/0'/0/${countvalue}`);
        const privateKey = await child.privateKey.toString('hex');
        
    // d00756656485e2067f09160b61e371ea1d5049bfd1536f37a6fdb350fe53aace
        console.log('Private Key:\n', privateKey);
        
    // Generate the TRON address from the private key
        // const address = await tronWeb.address.fromPrivateKey(privateKey);
        // console.log('Generated Address:', address);
        
    } catch (error) {
        console.log('Error occurred during wallet generation:\n', error);
    }
})();
