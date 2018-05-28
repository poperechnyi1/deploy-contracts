var fs = require('fs');
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('****'));

let publicKey = '0x372967130b1A7cd386348Bc59de905e628E36F3a';
let privateKey = '*****';

web3.eth.accounts.wallet.add("0x"+privateKey);

var contractDeploy = new web3.eth.Contract(swapABI);
