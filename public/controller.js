broker = "wss://test.mosquitto.org:8081/mqtt";//broker to connect with
client = mqtt.connect(broker);
var subTopic = "erimjakeniel";
var pubTopic = "erimjakeniel/fan/status";
var Payload ="";
var timestamp = moment().format('MMMM D YYYY, h:mm:ss a')

$("#btn1").click(function(){
  $("#status").text("The fan is currently turned at 1")
  Payload = "The fan is currently turned at 1" +  timestamp
  client.subscribe(subTopic)
  client.publish(pubTopic, Payload)

  
})
$("#btn2").click(function(){
  $("#status").text("The fan is currently turned at 2")
  Payload = "The fan is currently turned at 2" + timestamp
  client.subscribe(subTopic)
  client.publish(pubTopic, Payload)

})
$("#btn3").click(function(){
  $("#status").text("The fan is currently turned at 3")
  Payload = "The fan is currently turned at 3" + timestamp
  client.subscribe(subTopic)
  client.publish(pubTopic, Payload)
})
$("#off").click(function(){
  $("#status").text("The fan is currently turned off")
  Payload = "The fan is currently turned off" + timestamp
  client.subscribe(subTopic)
  client.publish(pubTopic, Payload)

})












