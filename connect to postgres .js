const {Client} = require('pg')

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "masterkey",
  database: "Vecto_Testing"
})

client.connect();

client.query('Select * from public.electricity', (err, res)=>{
    if(!err){
         console.log(res.rows);
    }else {
         console.log(err.message);
    }
    client.end;
})
