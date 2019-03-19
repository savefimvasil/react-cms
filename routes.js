const routes = module.exports = require('next-routes')()

routes
    .add('admin', '/admin/:slug', '/admin/edit/:id')
    .add('list', '/list/:slug')
