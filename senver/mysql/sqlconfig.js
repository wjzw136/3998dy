var mysql = require("mysql");
// connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
//connection.end();
var config = {
    dbhost: "127.0.0.1",
    dbuser: "root",
    dbpassword: "",
    //dbpassword: "780b123b34",
    dbdatabase: "wenzitui",
    db_qianzhui: 'wj'
};
exports.getconnect = function () {
    var connection = mysql.createConnection({
        host: config.dbhost,
        user: config.dbuser,
        password: config.dbpassword,
        database: config.dbdatabase,
        multipleStatements: true
    });
    connection.connect();
    return connection;
};