const Client = require('pg').Client;

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'Vecto_Testing',
    password: 'masterkey',
    port: 5432,
});

module.exports= client;


// fs.readFile('index .js', 'utf8', function (err, data) {

// console.log(data);

// });


// client.query("INSERT INTO Billing (userid,total) VALUES (0001,)"),
//     (err, res) => {
//         console.log(err, res);
//         client.end();
//     };
