const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'masterkey',
    port: 5432,
});

// const execute = async (query) => {
//     try {
//         await client.connect();     // gets connection
//         await client.query(query);  // sends queries
//         return true;
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     } finally {
//         await client.end();         // closes connection
//     }
// };

client.query("SELECT * FROM public.geojson",(err,res)=>{
    console.log(err,res)
    client.end()
})