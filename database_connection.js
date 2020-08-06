const mysql = require('mysql');
const dbConfig = require("./config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

// testing MySQL connection
function testing_connection(){
    connection.connect(error => {
        if (error) throw error;
        console.log("Successfully connected to the database.");
      });
}

function sqlQueries(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, result) => {
      if (error) {
        // console.log(error)
        return reject(error);
      }
      // console.log(JSON.stringify(result));
      return resolve(result);
    });
  });
}

module.exports = { testing_connection,sqlQueries };
