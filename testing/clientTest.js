/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var starttimer=0;
var endtimer;

io=require('socket.io-client');
var sockets=[];
for(var i=0;i<30;i++){
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

/*
setInterval(heartbeat, 33);
   
   function heartbeat(){
     //console.log(sockets.length);
     for(var i=0;i<sockets.length;i++){
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
     sockets[i].emit('update',data);
     sockets[i].on('hearbeat',function(){
         console.log("hel");
     });
       
       //console.log('sdas');
   };
}*/

sockets[0].on('heartbeat',function(){
    endtimer=Date.now();
    diff=endtimer-starttimer;
    
var data = {
             
         x:Math.floor(Math.random()*1000)+1,
         y:Math.floor(Math.random()*1000)+1,
         r:25,
         red:Math.floor(Math.random()*255)+1,
         green:Math.floor(Math.random()*255)+1,
         blue:Math.floor(Math.random()*250)+1,
         name:"adad"
        
     };
     console.log(diff);
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
     /*
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
 */   