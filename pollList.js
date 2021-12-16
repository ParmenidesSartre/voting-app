import web3 from './web3'
const compiledPool = require('./build/poll.json')

const instance = new web3.eth.Contract(
  compiledPool,
  '0x3854c97B5EB4bc29881e97D7790D4e1eD5F61e31',
)

export default instance
