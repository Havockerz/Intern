var message="holla";
var topic="testnodejs/1";
//publish every 5 secs
var timer_id=setInterval(function(){publish(topic,message,options);},5000);

//publish function
function publish(topic,msg,options){
  console.log("publishing",msg);
if (client.connected == true){
  client.publish(topic,msg,options);
}