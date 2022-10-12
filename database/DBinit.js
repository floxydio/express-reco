const mysql = require("mysql")

const connectDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lookme'
})

connectDB.connect()

module.exports = {connectDB}