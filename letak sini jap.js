const client = require("./connectdb")
const express = require('express');
const app = express();
client.connect();



app.get('/oreo', (req, res) => {
    client.query(`SELECT * FROM geomap`, (err, result) => {
        if (!err) {
            res.send(result.rows);      
        }
    });
    client.end;
})

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/oreo ', async (req, res) => {
    console.log(req.body);
    try {
        let data = req.body
        var newTodo = await client.query("INSERT INTO restapi(username,age) VALUES ($1,$2)",[data.username][data.age]);
    } catch (err) {
        console.error(err.message);
    }
});                 


app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
