/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

const bip39 = require('bip39');
const {BIP32Factory} = require('bip32');
const ecc = require('tiny-secp256k1')
const bip32 = BIP32Factory(ecc);

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

const mnemonic = 'extend gap gate protect romance dry hen truth mind nature swap long';
// Private Key: d00756656485e2067f09160b61e371ea1d5049bfd1536f37a6fdb350fe53aace

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

(async (req, res) => {
    try {
    // Convert the mnemonic phrase to a seed
        const seednew = await bip39.mnemonicToSeed(mnemonic);
        
    // Create a new BIP32 node from the seed
        const node = await bip32.fromSeed(seednew);
        let countvalue = 1;
        
    // Derive a child key from the BIP32 node using the specified path
        const child = await node.derivePath(`m/44'/195'/0'/0/${countvalue}`);
        
    // => d00756656485e2067f09160b61e371ea1d5049bfd1536f37a6fdb350fe53aace
        const privateKey = await child.privateKey.toString('hex');
        
    // Выводим сообщение на экран
        _=['Private Key:', privateKey]
    }
    
    catch (error) {
    // Выводим сообщение на экран
        _=['Error occurred during wallet generation:', error]
    }
})();
