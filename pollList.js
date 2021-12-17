import web3 from './web3'
const compiledPool = require('./build/poll.json')

const instance = new web3.eth.Contract(
  compiledPool,
  '0x07bE87a28767B69D12f78D4dbb17c7fD172f4cD2',
)

export default instance
