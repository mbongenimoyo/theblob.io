var socket;

var blob;
var W=1000; //used do define the width of the map
var H=1000; //used to alter the size of the map
var foods=[]; // contains the coordinates of all food food objects
var blobs = []; // contains all players
var zoom = 1;  //adjusts camera zoom
var timer=0;
w0=0;
h0=0;
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");

console.log(queries[1]);
if(queries[1]==='1'){
    socket = io.connect('http://172.19.34.94:'+3000);//jay server
            
}
else if(queries[1]==='2'){
    socket = io.connect('http://172.19.40.142:'+3000);//ahmed server
}



//socket = io.connect('http://172.19.34.94:'+3000); //jay
//socket.heartbeatTimeout = 2000000;
function setup() {
   
  createCanvas(document.body.clientWidth, windowHeight); //initialise the canvas using p5
 
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  //socket = io.connect('http://172.19.40.142:'+3000); //ahmed
  
  //socket.emit("Hello");
  //socket.on("waveback",data);
  if(queries[0]==="Red"){
      blob = new Blob(300, 300, 25,255,0,0,);
  }
  else if(queries[0]==="Green"){
      blob = new Blob(300, 300, 25,0,255,0,);
  }
  else if(queries[0]==='Blue'){
      blob = new Blob(300, 300, 25,0,0,255,);
  }
  else if(queries[0]==='Yellow'){
      blob = new Blob(300, 300, 25,255,255,0,);
  }
 //when the player connects create a instance of the player class and send its data to the server
  //blob = new Blob(300, 300, 25,255,255,255,);// 
  // Make a little object with  and y
  var data = {
    id:socket.id,
    x:blob.pos.x,
    y:blob.pos.y,
    //cells:snake.cells,
    r: blob.r,
    red:blob.red,
    green:blob.green,
    blue:blob.blue,
    name:queries[2]
  };
  console.log(blob);
  socket.emit('start', data);
  
  socket.on('foods',
    function(data){
      foods=data;
    });
    
    
  socket.on('heartbeat',
    function(data) {
      //console.log(data);
      
      blobs = data;
      for(var i=0;i<blobs.length;i++){
          if(blobs[i].id==socket.id){
              
              blob.r=blobs[i].r;
              //console.log(blob.r);
          }
      }
    }
  );
  
  socket.on('map',
  function(data){
       W=data.w;
       H=data.h;
       console.log(data);
  });
  
  socket.on('playerLost',function(){
      
      //socket = io.connect('http://localhost:3000');
      //blob = new Blob(100, 100, 25,255,255,255,);
      //Window
      window.location="index.html";
      alert("you Died");
      
  });
  socket.on('changeport',function(data){
      //window.location='http://172.19.40.142:'+3000;
      socket.disconnect();
       
      socket = io.connect('http://172.19.40.142:'+3000); //ahmed
      //socket = io.connect('http://172.19.34.94:'+3000); //jay
      //socket.disconnect();
      setup();
      console.log(socket);
      
  });
}

function draw() { 
  background(0);
 
  //console.log("there",W,H)
 // console.log(blob.pos.x, blob.pos.y);
  //console.log(blob);
  translate(width / 2, height / 2);
  var newzoom = 70 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  
  translate(-blob.pos.x, -blob.pos.y);
  
  fill(255);
  rect(w0,h0,W,H);
  
  for (var i = blobs.length - 1; i >= 0; i--) {
    
    if (blobs[i].id !== socket.id) {
      fill(blobs[i].red, blobs[i].green, blobs[i].blue);
      ellipse(blobs[i].x, blobs[i].y, blobs[i].r * 2, blobs[i].r * 2);
      stroke(0);
      fill(255);
      textAlign(CENTER);
      textSize(blobs[i].r/3);
      text(blobs[i].name, blobs[i].x, blobs[i].y + blobs[i].r);
    }
     //console.log(blobs[i].x,blobs[i].y,blobs[i].r,255,255,255);
     
     /*temp=new Blob(blobs[i]['x'],blobs[i]['y'],blobs[i]['r'],255,255,255);
     if (blobs[i].id!==socket.id  && blob.eats(temp)) {
         
         
       blobs.splice(i, 1);
     }
     console.log(socket.id);*/
     
  }


  //console.log(blob.r);
  
  blob.show();
  food=[];
  for(var i=0;i<foods.length;i++){
      x=foods[i];
      
      food[i] = new Blob(foods[i]['x'], foods[i]["y"], foods[i]['r'],foods[i]['red'],foods[i]['green'],foods[i]['blue']);
       //console.log("//>:",foods[i]['red'],foods[i]['green'],foods[i]['blue']);
      //console.log(x);
      noStroke();
      food[i].show();
  }
   
    
  if(keyIsDown(32)){
       blob.update(true,timer);
  } 
  else{
      blob.update(false,timer);
  }
 
  blob.constrain(W,H);
  temp=[];
 
  
  var data = {
    id:socket.id,
    x: blob.pos.x,
    y: blob.pos.y,
    r: blob.r,
    red:blob.red,
    green:blob.green,
    blue:blob.blue,
    name:"",
    boost:blob.boost
  };
  //console.log(data);
  socket.emit('update', data);
  
timer++;

}