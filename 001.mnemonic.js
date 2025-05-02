/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

const bip39 = require('bip39');

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

try {
// Генерируем мнемоническую фразу (seed-фразу)
    let mnemonic = bip39.generateMnemonic();
    
// Выводим сообщение на экран
    _=['Mnemonic:', mnemonic]
}

catch (error) {
// Выводим сообщение на экран
    _=['Error:', error]
}

// extend gap gate protect romance dry hen truth mind nature swap long
