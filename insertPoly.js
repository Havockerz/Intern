
let a = [1.0,2.0,3.0]
client.query("insert into mapgeo (poligon) VALUES ($1)",[a]),
 (err, res) => {
    console.log(err, res);
    client.end();
};

