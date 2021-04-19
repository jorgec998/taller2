const kenx = require('knex');

module.exports = kenx({
    client: 'pg',
    connection: 'postgres://postgres:789456@localhost:5434/mibancos',
    pool: { min: 1, max: 2},
    acquireConnectionTimeout: 5000,
})