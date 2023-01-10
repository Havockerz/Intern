const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.emqx.io') //Address of the host 
	


client.on('connect', function () {
  client.subscribe('mqtt-java/1', function (err) {   //Function help client to receive data from host 
    if (!err){  										//If in the error have a value then executed the code,if null dont execute
      client.publish('mqtt-java/1',  'Hello testing mqtt to Javascript')   //Client send message to host
    }
  })
})
	{
		client.on('message', function (topic, message) {   //Topic connected client and broker 		
			console.log(message.toString())   //Read data from the buffer and returned it 
			
	  })
	}


	//HANTAR JSON DATA (temp ,  voltage  , current) , value dalam interger, send over mqtt 