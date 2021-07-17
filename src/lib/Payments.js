"use strict"
const axios = require('../lib/Axios')
const Web3 = require('web3')

class Payment {
    constructor (){
        this.publicAddresTo=''
        this.publicAddresFrom=''
    }

    async getWallet(){
        const res = await axios.post('api/v1/address') 
        this.publicAddresTo=res.data.address
        return res.data.address
    }

    async isConnect(){
        return true
        
    }
    
    async connect(wallet){
        try {
         switch (wallet) {
             case 'metamask':
                 if (window.ethereum) {
                     try {
                         await window.ethereum.request({method:'eth_requestAccounts'})
                         web3 = new Web3(window.ethereum)
                         let accounts = await web3.eth.getAccounts()
                         
                         this.publicAddresFrom=accounts[0] 
                         this.publicAddresTo = await this.getWallet()
                         /*web3.eth.getBalance(accounts[0])
                         .then(console.log);*/ 
                         return true
                     } catch (error) {
                         alert('connection refused')
                     }
                     
                 }else{
                     alert('install metamask')
                 }
                 
                 break;
              case 'paypal':
                 alert('paypal')
              break;
             default:
                 alert('default')
                 break;
         }
        } catch (error) {
            console.error(error)
        }
         
    }

    async transact(amount){
        
        if (Number(amount)<=0) {
            alert('Illegal value')
            return
        }
        
        if (!web3.utils.isAddress(this.publicAddresTo) ) {
            alert('Invalid address')
            return
        }

         var transactionObject={
            from:this.publicAddresFrom,
            to:this.publicAddresTo,
            value:web3.utils.toWei(amount.toString(),'ether'),
            chain:'mainnet'
        }
        web3.eth.sendTransaction(transactionObject,(error,hash)=>{
            if (error) {
                alert(error.message)
            }
           
        })  
       
    }
    
}



export default Payment