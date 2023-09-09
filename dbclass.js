
// host : "localhost",
// user : "class6",
// password : ")K5u@@z30Hm3r(K("

const mydb = require("mysql");
const connection = mydb.createConnection({
    host : "localhost",
    user : "class6",
    password : ")K5u@@z30Hm3r(K(",
    database : "newschool2"
});


connection.connect(function(err, result){
    if (err) throw err;
    console.log("Connected!");

    // CREATE DATABASE
    // connection.query("CREATE DATABASE newschool2", function(err, result){
    //     if (err) throw err;
    //     console.log("DB Created!");
    // });


    // CREATE TABLE
    connection.query("CREATE TABLE studentReg (ID int(11), firstName varchar(50), lastName varchar(50) )", function(err, result){
        if (err) throw err;
        console.log("Table Created Successfully!");
    });


    // INSERT INTO DATABASE
    connection.query("INSERT INTO studentreg (ID, firstName, lastName) VALUES(12, 'Pelumi', 'Joan')", function(err, result){
        if (err) throw err;
        console.log("Data Inserted Successfully!");
    });

    //  UPDATE DATABASE RECORD

    connection.query("UPDATE studentreg SET firstName='Mary' WHERE lastName='joan' ", function(err, result){
        if (err) throw err;
        console.log("Data Updated Successfully!");
    });

});



