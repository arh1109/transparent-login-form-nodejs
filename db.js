const mysql = require('mysql');

// Need all this info in a database running locally...
const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'blahblah', 
    user: 'andy',
    database: 'users',
    host: 'local',
    port: '3306'
});

let userdb = {};

// Handles all calls to database
userdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users`, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

// query for id and password
userdb.one = (id, pw) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE id = ? AND password = ?`, [id, pw], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

module.exports = userdb;