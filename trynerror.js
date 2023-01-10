var fs = require('fs');
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'Vecto_Testing',
    password: 'masterkey',
    port: 5432,
});

client.connect()



// fs.readFile('VolvoGebengKuantan.geojson', 'utf8', function (err, data) {

//     console.log(data);

//     parseGeo(data)
// });



// function parseGeo(data) {

//     //PARSE JSON 
//     geoJson = JSON.parse(data)

//     //ACCESS JSON OBJECT 
//     if (geoJson.features.length > 0) {

//         //GET POLYGON ARR
//         let latLngArr = geoJson.features[0].geometry.coordinates

//         //ACCESS 2D
//         let newLat = []
//         if (latLngArr.length > 0) {
//             latLngArr[0].map((a, i) => {

//                 latLngArr[0][i] = "" + [latLngArr[0][i][1], latLngArr[0][i][0]] + "" //DO SHIFTING
//                 newLat.push(latLngArr[0][i])  //PUSH NEW ARRAY


//             })

//             console.log("NEW ARR: ", newLat)

            client.query("INSERT INTO billing (userid, username, watt, voltage, ampere) VALUES (8744,'Mugiwara', 500, 280, 220)"),
                (err, res) => {
                    console.log(err, res);
                    client.end();
                };
//         }



//     }



// }