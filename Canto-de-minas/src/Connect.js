const mysql = require('serverless-mysql')({
  config: {
    host: 'localhost',
    database: 'mogoose',
    user: 'root',
    password: '1234'
  }
});

module.exports = mysql;