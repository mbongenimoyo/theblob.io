
 
 //THIS CREATES A NUMBER  OF ZOMBIE CLIENTS THAT FEED THE SERVER RANDOM DATA.
 //DURING THAT TIME THE SCRIPT IS WRITING DOWN THE AVERAGE RESPONSE TIME AND IN 
 //EXTERNAL CSV FILE ,THAT WE USE TO CREATE A MEAN AVERAGE AND PLOT IT ONTO A GRAPH
 //THIS FILE HAS 4 DEPENDANCIES(SOCKET.IO,CSVToJSON AND json2csv)
 // ADJUST THE NUMBER OF CLIENT RUN BY CHANGE FOR LOOP

const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

/*CSVToJSON().fromFile("./source.csv").then(source => {
    source.push({
        "avg": "34890"
        
    });
    var csv = JSONToCSV(source, { fields: ["avg" ]});
    FileSystem.writeFileSync("./source.csv", csv);
});*/

var results=[];
//var data = json2csv({ data: results});
var starttimer=0;
var endtimer;

io=require('socket.io-client');
var sockets=[];
//SET NUMBER OF CLIENTS
for(var i=0;i<60;i++){
    sockets[i] = io('http://localhost:3000',{'timeout':500000, 'connect timeout': 500000});
    var data = {
    id:sockets[i].id,
    x:300,
    y:300,
    //cells:snake.cells,
    r: 25,
    red:255,
    green:0,
    blue:0,
    name:"sda"
    };
  
  sockets[i].emit('start', data);
    
}
//console.log(sockets);
/*for(var i=0;i<10;i++){
    console.log(sockets[i].id);
}*/


/*setInterval(heartbeat, 33);
 function heartbeat(){
     res.attachment('filename.csv');
     res.status(200).send();
 
};*/

sockets[0].on('heartbeat',function(){
    endtimer=Date.now();
    diff=endtimer-starttimer;
    
var data = {
         //RANDOMLY GENERATE USERDATA
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:25,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     // WRITE TO DATA INTO EXISTING CSV FILE
     results.push(diff);
     CSVToJSON().fromFile("./shard6.csv").then(source => {
     source.push({
        "avg": diff
     });
    var csv = JSONToCSV(source, { fields: ["avg" ]});
    FileSystem.writeFileSync("./shard6.csv", csv);
});
     sockets[0].emit('update',data);
     starttimer=Date.now();
     });
    
sockets[1].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:25,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     sockets[1].emit('update',data);
     });


sockets[2].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:30,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
    // console.log(2);
     sockets[2].emit('update',data);
     
     });
     

sockets[3].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(3);
     sockets[3].emit('update',data);
     });
    
    
sockets[4].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(4);
     sockets[4].emit('update',data);
     });
    
sockets[5].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:25,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //.log(5);
     sockets[5].emit('update',data);
     });
    
    
sockets[6].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:10,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     sockets[6].emit('update',data);
     });
     
sockets[7].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:25,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(7);
     sockets[7].emit('update',data);
     });
sockets[8].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:25,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     //sockets[8].emit('update',data);
     });
     
sockets[9].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:30,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(9);
     sockets[9].emit('update',data);
     });
     
sockets[10].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:30,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(10);
     sockets[10].emit('update',data);
     });
sockets[11].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(11);
     sockets[11].emit('update',data);
     });
    
sockets[12].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(12);
     sockets[12].emit('update',data);
     });


sockets[13].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(13);
     sockets[13].emit('update',data);
     });
 

sockets[14].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(14);
     sockets[14].emit('update',data);
     });
    
    
sockets[15].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(15);
     sockets[15].emit('update',data);
     });
    
sockets[16].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
    /// console.log(16);
     sockets[16].emit('update',data);
     });
    
    
sockets[17].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(17);
     sockets[17].emit('update',data);
     });
     
sockets[18].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     sockets[18].emit('update',data);
     });
sockets[19].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(19);
     sockets[19].emit('update',data);
     });
sockets[20].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:30,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(20);
     sockets[20].emit('update',data);
     });
sockets[21].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(21);
     sockets[21].emit('update',data);
     });
    
sockets[22].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(22);
     sockets[22].emit('update',data);
     });


sockets[23].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(23);
     sockets[23].emit('update',data);
     });
 

sockets[24].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(24);
     sockets[24].emit('update',data);
     });
    
    
sockets[25].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(25);
     sockets[25].emit('update',data);
     });
    
sockets[26].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(26);
     sockets[26].emit('update',data);
     });
    
    
sockets[27].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(27);
     sockets[27].emit('update',data);
     });
     
sockets[28].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     sockets[28].emit('update',data);
     });
sockets[29].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(29);
     sockets[29].emit('update',data);
     });

sockets[30].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:30,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(10);
     sockets[30].emit('update',data);
     });
sockets[31].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(31);
     sockets[31].emit('update',data);
     });
    
sockets[32].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(12);
     sockets[32].emit('update',data);
     });


sockets[33].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(13);
     sockets[33].emit('update',data);
     });
 

sockets[34].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(14);
     sockets[34].emit('update',data);
     });
    
    
sockets[35].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(15);
     sockets[35].emit('update',data);
     });
    
sockets[36].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
    /// console.log(16);
     sockets[36].emit('update',data);
     });
    
    
sockets[37].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(17);
     sockets[37].emit('update',data);
     });
     
sockets[38].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     sockets[38].emit('update',data);
     });
sockets[39].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(39);
     sockets[39].emit('update',data);
     });
     
sockets[40].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:30,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(10);
     sockets[40].emit('update',data);
     });
sockets[41].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(11);
     sockets[41].emit('update',data);
     });
    
sockets[42].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(12);
     sockets[42].emit('update',data);
     });


sockets[43].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(13);
     sockets[43].emit('update',data);
     });
 

sockets[44].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(14);
     sockets[44].emit('update',data);
     });
    
    
sockets[45].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(15);
     sockets[45].emit('update',data);
     });
    
sockets[46].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
    /// console.log(16);
     sockets[46].emit('update',data);
     });
    
    
sockets[47].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(17);
     sockets[47].emit('update',data);
     });
     
sockets[48].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     sockets[48].emit('update',data);
     });
sockets[49].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(19);
     sockets[49].emit('update',data);
     });
sockets[50].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:30,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(20);
     sockets[50].emit('update',data);
     });
sockets[51].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(21);
     sockets[51].emit('update',data);
     });
    
sockets[52].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(22);
     sockets[52].emit('update',data);
     });


sockets[53].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(23);
     sockets[53].emit('update',data);
     });
 

sockets[54].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(24);
     sockets[54].emit('update',data);
     });
    
    
sockets[55].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(25);
     sockets[25].emit('update',data);
     });
    
sockets[56].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(26);
     sockets[56].emit('update',data);
     });
    
    
sockets[57].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(27);
     sockets[57].emit('update',data);
     });
     
sockets[58].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     sockets[58].emit('update',data);
     });
sockets[59].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(29);
     sockets[59].emit('update',data);
     });
/*
sockets[60].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:30,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(10);
     sockets[60].emit('update',data);
     });
sockets[61].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(31);
     sockets[61].emit('update',data);
     });
    
sockets[62].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(12);
     sockets[62].emit('update',data);
     });


sockets[63].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(13);
     sockets[63].emit('update',data);
     });
 

sockets[64].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(14);
     sockets[64].emit('update',data);
     });
    
    
sockets[65].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(15);
     sockets[65].emit('update',data);
     });
    
sockets[66].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
    /// console.log(16);
     sockets[66].emit('update',data);
     });
    
    
sockets[67].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(17);
     sockets[67].emit('update',data);
     });
     
sockets[68].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     //console.log(1);
     sockets[38].emit('update',data);
     });
sockets[69].on('heartbeat',function(){
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:20,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(19);
     sockets[69].emit('update',data);
     });
     
	*/ 
	 
	
	
	
	//==============================================================================
	//=============================================================================
	
	
	
	sockets[20].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[20].disconnect();
       
      sockets[20] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
  sockets[21].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[21].disconnect();
       
      sockets[21] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[22].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[22].disconnect();
       
      sockets[22] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
   sockets[23].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[23].disconnect();
       
      sockets[23] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[24].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[24].disconnect();
       
      sockets[24] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[25].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[25].disconnect();
       
      sockets[25] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[26].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[26].disconnect();
       
      sockets[26] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[27].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[27].disconnect();
       
      sockets[27] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[28].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[28].disconnect();
       
      sockets[28] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[29].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[29].disconnect();
       
      sockets[29] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  

	  sockets[30].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[30].disconnect();
       
      sockets[30] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
  sockets[31].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[31].disconnect();
       
      sockets[31] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[32].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[32].disconnect();
       
      sockets[32] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
   sockets[33].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[33].disconnect();
       
      sockets[33] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[34].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[34].disconnect();
       
      sockets[34] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[35].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[35].disconnect();
       
      sockets[35] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[36].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[36].disconnect();
       
      sockets[36] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[37].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[37].disconnect();
       
      sockets[37] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[38].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[38].disconnect();
       
      sockets[38] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[39].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[39].disconnect();
       
      sockets[39] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });

  	  sockets[30].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[30].disconnect();
       
      sockets[30] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
  sockets[41].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[41].disconnect();
       
      sockets[41] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[42].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[42].disconnect();
       
      sockets[42] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
   sockets[43].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[43].disconnect();
       
      sockets[43] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[44].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[44].disconnect();
       
      sockets[44] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[45].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[45].disconnect();
       
      sockets[45] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[46].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[46].disconnect();
       
      sockets[46] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[47].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[47].disconnect();
       
      sockets[47] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[48].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[48].disconnect();
       
      sockets[48] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[49].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[49].disconnect();
       
      sockets[49] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
 
	  sockets[50].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[50].disconnect();
       
      sockets[50] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
  sockets[51].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[51].disconnect();
       
      sockets[51] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[52].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[52].disconnect();
       
      sockets[52] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
   sockets[53].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[53].disconnect();
       
      sockets[53] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[54].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[54].disconnect();
       
      sockets[54] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[55].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[55].disconnect();
       
      sockets[55] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[56].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[56].disconnect();
       
      sockets[56] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[57].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[57].disconnect();
       
      sockets[57] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[58].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[58].disconnect();
       
      sockets[58] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[59].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[59].disconnect();
       
      sockets[59] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
  
  });
  /*
 	  sockets[60].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[60].disconnect();
       
      sockets[60] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
  sockets[61].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[61].disconnect();
       
      sockets[61] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[62].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[62].disconnect();
       
      sockets[62] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
  
   sockets[63].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[63].disconnect();
       
      sockets[63] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[64].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[64].disconnect();
       
      sockets[64] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[65].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[65].disconnect();
       
      sockets[65] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[66].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[66].disconnect();
       
      sockets[66] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[67].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[67].disconnect();
       
      sockets[67] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[68].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[68].disconnect();
       
      sockets[68] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
  
    sockets[69].on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      sockets[69].disconnect();
       
      sockets[69] = io.connect('http://172.19.40.142:'+3000); //ahmed
      //sockets[30] = io.connect('http://172.19.34.94:'+3000); //jay
      //sockets[30].disconnect();
      //setup();
      //console.log(sockets[30]);
      
  });
 */