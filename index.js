/*▄────────▄
  █        █
  █  Ядро  █
  █        █
  ▀────────▀*/
require('core'); // Ядро
require('mvc');  // Работа с MVC-моделью
const {TronWeb} = require('tronweb');

/*▄───────────────▄
  █               █
  █  Точка входа  █
  █               █
  ▀───────────────▀*/
// entrypoint = (...args) => {

//     const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privatekey);
//     const trxTransfer = async () => {
//         try {
//          const recieverAddress="TCCABp3tuctUUhtBrNPhvuffdNhYPPcZYF"
//             let amount=1000000
//             const tradeobj = await tronWeb.transactionBuilder.sendTrx(recieverAddress, amount);
//             const signedtxn = await tronWeb.trx.sign(tradeobj);
//             const result = await tronWeb.trx.sendRawTransaction(signedtxn);
//             console.log(result);
//         } catch (error) {
//           console.log(error)
//         }
//     }
//     trxTransfer()
// };
// const tronWeb = new TronWeb(
//     "http://192.168.1.109:9090",
//     "http://192.168.1.109:9090",
//     "http://192.168.1.109:9090",
//     'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
// )
const tronWeb = new TronWeb({
    fullNode: 'http://192.168.1.109:19090',
    solidityNode: 'http://192.168.1.109:19090',
    // eventServer: 'http://192.168.1.109:19090',
    privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'
});






const trxTransfer = async () => {
    try {
        // const recieverAddress = 'TTZRS2tFaB2vwQVz6SE9FYGz3pRwCkQWaN';
        // const fromAddress = 'TGQaxUePYeNTzi64dh8vCnkiFsLtW8rz1y';
        // let amount = 1000000;
        // const tradeobj = await tronWeb.transactionBuilder.sendTrx(
        //     recieverAddress,
        //     amount,
        //     fromAddress
        // );
        // _=JSON.stringify(tradeobj);
        let json = {"visible":false,"txID":"9f4cdd03d4c9f6a88ca6b57aa5ff1c1fbf5730b26c3f67f1b640d54513b9c914","raw_data_hex":"0a02d13a22088a2e334e98907f774098fcceefe9325a67080112630a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412320a1541309e53014d0c6f143a28a54fec00445a8af7cdee12154118634f3f39e232209f87dfac2246a97241918c3218c0843d70b8a7cbefe932","raw_data":{"contract":[{"parameter":{"value":{"to_address":"4118634f3f39e232209f87dfac2246a97241918c32","owner_address":"41309e53014d0c6f143a28a54fec00445a8af7cdee","amount":1000000},"type_url":"type.googleapis.com/protocol.TransferContract"},"type":"TransferContract"}],"ref_block_bytes":"d13a","ref_block_hash":"8a2e334e98907f77","expiration":1746406719000,"timestamp":1746406659000}};
        let privatekey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0';
        const signedtxn = await tronWeb.trx.sign(json, privatekey);
        // const result = await tronWeb.trx.sendRawTransaction(signedtxn);
        console.log(signedtxn);
    } catch (error) {
        console.log(error)
    }
};
trxTransfer();