const client = require("./connectdb")
const express = require('express');
const app = express();
client.connect();



app.get('/havoc', (req, res) => {
    client.query(`SELECT * FROM public.billing`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})


var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/havoc', async (req, res) => {
  console.log(req.body);
    try {
        let data  = req.body
        const newTodo = await client.query ("INSERT INTO RestAPI(username) VALUES ($1)",[data.username]
        );
      // res.json(newTodo.rows[0]);  
    } catch (err) {
      console.error(err.message);  
    }
});


   //     client.query(insertQuery, (err, result) => {
//         if (!err) {
//             res.send('Insertion was successful')
//         }
//         else { console.log(err.message) }
//     })
//     client.end;
// })

app.listen(3000, () => {
            console.log("Listening on port 3000...");
        });

