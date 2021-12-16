const routes = require('next-routes')();

routes
  .add('/','/')
  .add('/polls','/polls')
  .add('/vote','/vote')
  .add('/buy','/buy')

module.exports = routes;