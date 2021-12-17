import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  // mainnet
  web3 = new Web3('https://bsc-dataseed1.binance.org:443');
} else {
  // We are on the server *OR* the user is not running metamask
  web3 = new Web3('https://bsc-dataseed1.binance.org:443');
}

export default web3;