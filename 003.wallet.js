/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

require('dotenv').config();
const {TronWeb} = require('tronweb');

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

const privateKey = 'd00756656485e2067f09160b61e371ea1d5049bfd1536f37a6fdb350fe53aace';

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

(async (req, res) => {
    try {
        const tronWeb = new TronWeb({
            fullHost: 'https://api.trongrid.io',
            headers: {
                'TRON-PRO-API-KEY': 'your api key'
            },
            privateKey: privateKey
        });
    }
    
    catch (error) {
    // Выводим сообщение на экран
        _=['Error occurred during wallet generation:', error]
    }
})();
_=process.env.['TRON-PRO-API-KEY']