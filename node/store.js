const knex = require('knex')

module.exports = {
    createUser ({ username, password }) {
        console.log(`Add user ${username} with password ${password}`)
        
        return knex('users').insert(data)
    }
}
