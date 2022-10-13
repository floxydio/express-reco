const mysql = require("mysql")

const connectDB = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'reco'
})

connectDB.connect(function(err) {
  if (err) {
    console.log("Cannot connect DB:" + err.stack)
    return
  }
})

module.exports = {connectDB}