import webBinance from './webBinance'
const compiledArmWorld = require('./build/armworld.json')

const instance = new webBinance.eth.Contract(
  compiledArmWorld,
  '0xF81b94beB72aD2eA568125c844cE1D272aAEdeC7',
)

export default instance