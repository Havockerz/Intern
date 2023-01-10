var fs = require('fs');
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'geojson',
    password: 'masterkey',
    port: 5432,
});

client.connect()



fs.readFile('SKVE.geojson', 'utf8', function (err, data) {

    console.log(data);

    parseGeo(data)
});



function parseGeo(data) {

    //PARSE JSON 
    geoJson = JSON.parse(data)

    //ACCESS JSON OBJECT 
    if (geoJson.features.length > 0) {

        //GET POLYGON ARR
        let latLngArr = geoJson.features[0].geometry.coordinates

        //ACCESS 2D
        let newLat = []
        if (latLngArr.length > 0) {
            latLngArr[0].map((a, i) => {

                latLngArr[0][i] = "" + [latLngArr[0][i][1], latLngArr[0][i][0]] + "" //DO SHIFTING
                newLat.push(latLngArr[0][i])  //PUSH NEW ARRAY


            })

            console.log("NEW ARR: ", newLat)

            client.query("INSERT INTO geomap  (userid, highwayname,highwaytype,polygon) VALUES (8790,'SKVEHIGHWAY','SKVE',$1)", [newLat]),
                (err, res) => {
                    console.log(err, res);
                    client.end();
                };
        }



    }



}
