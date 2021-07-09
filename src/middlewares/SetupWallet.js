const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction

const infuraUrl = 'https://mainnet.infura.io/v3/403b3c51c39940d2b9f289c564b2c9de'
const address1= "0x85BFaE63bD1D35C9Af950518A596f48236d10d9C"
const address2 = "0x23d55De66C665396e1ff21B6256A6806567Ea7B4"
const keyPrivate1 = "cf3eb41803ce3f07d49197d7214fb2aaa0290b214bf7c6e999c6b938a2fc2bb1"
const keyPrivate2 = new Buffer.from("14fa55843d853ba8e9862241b390c79b12ecd82e2b7f703b63141d0fef175813","hex")

const init = async()=>{
    const web3 = new Web3(Web3.givenProvider || infuraUrl);
    const networkId = await web3.eth.net.getId();
    let accounts = await web3.eth.getAccounts()
   /* web3.eth.getTransactionCount(address2 , (err,txCount)=>{
        //creacion del objeto de transaccion
        let rawTx = {
            nonce: web3.utils.toHex(txCount),
            gasPrice: web3.utils.toHex(web3.utils.toWei('2','gwei')),
            gasLimit: web3.utils.toHex(210000),
            to: address1,
            value: '0x00',
        }
        // firma de la transaccion
        var tx = new Tx(rawTx, {'chain':'ropsten'});
        tx.sign(keyPrivate2);

        var serializedTx = tx.serialize().toString('hex');
        //web3.eth.sendSignedTransaction('0x' + serializedTx)
        //.on('receipt', console.log);
    })*/
    
}

init()
/*
let web3 = new Web3(Web3.givenProvider || nodo);
web3.eth.getBalance(address,(err,_balance)=>{
    console.log(web3.utils.fromWei(_balance, 'ether'))
})
*/