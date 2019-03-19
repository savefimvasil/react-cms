const routes = module.exports = require('next-routes')()

routes
    .add('admin', '/admin/:slug')
    .add('list', '/list/:slug')
