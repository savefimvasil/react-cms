const routes = module.exports = require('next-routes')()

routes
    .add('admin')
    .add('admin/edit', 'admin/edit/:slug')
    .add('admin/add')
    .add('list', '/list/:slug')
