var fs = require('fs');
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('****'));

let publicKey = '0x372967130b1A7cd386348Bc59de905e628E36F3a';
let privateKey = '*****';

web3.eth.accounts.wallet.add("0x"+privateKey);

var contractDeploy = new web3.eth.Contract(swapABI);

contractDeploy.deploy({
    data: swapByteCode,
    arguments:[]
}).send({
    from: publicKey,
    gas: 30000000,
    gasPrice: '210000000'
}, function (error, transactionHash) {
}).on('error', function (error) {
    console.log('error', error);
}).on('transactionHash', function (transactionHash) {
    console.log('transactionHash', transactionHash);
}).on('receipt', function (receipt) {
    console.log('receipt', receipt.contractAddress);
}).on('confirmation', function (confirmationNumber, receipt) {
    console.log('confirmation', confirmationNumber);
}).then(function (new_contract) {
    console.log('Contract Deployed');
    console.log(new_contract.options.address);
});
