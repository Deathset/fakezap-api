const usuarioController = require('../controller/user.controller')

module.exports = server =>{
    server.post('/new/user', usuarioController.store)
}