
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        port: '3306',
        user: "root",
        password: "root",
        database: "instant_magique"
    }
});

knex('users').select("*")
    .then(resultats => console.log(resultats));
