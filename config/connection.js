var mysql = require("mysql");

var connection; 

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3000,
        host: "localhost",
        user: "root",
        password: null,
        database: "footprints_db"
    });
};

connection.connect(function(err){
    if (eff) {
        console.error("Error Connecting: " + err.stack);
        return;
    };
    console.log("connected as id: " + connection.threadID);
});

module.exports = connection;