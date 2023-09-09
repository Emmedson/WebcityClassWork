//  var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
//  });

// con.connect(function(err) {
//   if (err) throw err;
//   // console.log("Connected!");
// });

// //   con.query("CREATE DATABASE NewJSmydb", function (err, result) {
// //     if (err) throw err;
// //     console.log("Database created");
// //   });

// // });

// // CREATE TABLES OR MODULES 

// // var con2 = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "",
// //     database: "NewJSmydb"
// //   });
// //   con2.connect(function(err) {
// //     if (err) throw err;
// //     console.log("Connected!");
// //     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
// //     con2.query(sql, function (err, result) {
// //         if (err) throw err;
// //         console.log("Table created");
// //     });
// // });

// // INSERT INTO DB

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "NewJSmydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

// Set or create Pools
// const conect3 = require ('mysql');
// const con3 = conect3.createConnection({
// host: 'localhost',
// user: "root",
// password: "",
// database: 'user'
// });

// // Connect to DB
// con3.connect(function(err){
//   if(err) throw err;
//   console.log('Best connect');
//   const query = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
 
//   // Execute the code
//   con3.query(query, function (err, result)
//   {
//     if (err) throw err;
//     console.log("1 record inserted");
//   })

// });

// host = localhost
// user = root
// password = ""

let sql = require('mysql');
let connection = sql.createConnection({
host : "localhost",
user : "root",
password : "",
database : "benjamin",
});



// connection.connect(function(err){
//   if (err) throw err
//   console.log('connected sucessfully!');
//   connection.query('CREATE DATABASE benjamin3', function(err,result){
//     if (err) throw err; {
//       console.log("data base created sucessfully!")
//     }
//   })
// });

connection.connect(function(err) {
  if (err) throw err;
  console.log("connection successful");
  // var sql = "CREATE TABLE studengreg (ID int(11), sname varchar(30), age int(3))";
  // connection.query("SELECT * FROM  studengreg ", function (err, result, fields){
  //   if (err) throw err;
  //   console.log(fields + result);
  // });
  connection.query("SELECT * FROM studrrrengegy", function (err, result,) {
    if (err) throw err;
    console.log(result);
  });
}); 