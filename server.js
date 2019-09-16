require('newrelic'); //dashboard application for testing 
var currentHighScore=0;
var hSHolderName='';
var maps=[];
var blobs = [];
var foods=[];
var obstacles=[];
//var map=new Map(1000,1000);
// function used to calculate the distance between 2 blobs objects
function vectorDist(x1,y1,x2,y2){
    x2_Sub_X1=Math.pow((x2-x1),2);
    y2_Sub_Y1=Math.pow((y2-y1),2);
    d=Math.sqrt(x2_Sub_X1+y2_Sub_Y1); //distance
    //console.log(d);
    return d;
}

/* this function is used to initialise a map object
 * the map object contains the data for every instance of the game running
 * @param {type} id
 * @param {type} width
 * @param {type} height
 * @returns {Map}#
 * t
 */
function Map(id,width,height){
    this.id=id; //used to identify map object
    this.w=height;/// determine map diameters
    this.h=width;
    this.foods=[];// array of all foods in a given stance of a map
    this.blobs=[]; // every player on the map
    this.port="";
    
    this.changeSize=function(){
        //when a new player join/leave the game change the maps size
        desired=this.blobs.length*100+1000;
        //console.log(desired);
        this.h=desired;
        this.w=desired;
        //console.log(map);   
        
    };
    //push 100 food objects onto the map with a fixed radius and random colors
    this.initFood=function(){
        /*function created 100 object long array when the map in first inititalised*/
        for (var i=0;i<100;i++){
        this.foods.push({
            x:Math.floor(Math.random()*this.w)+1, //random coordinates for spawn
            y:Math.floor(Math.random()*this.h)+1,
            r:10, //fixed radius
            red:Math.floor(Math.random()*255)+1, //random color for each piece
            green:Math.floor(Math.random()*255)+1,
            blue:Math.floor(Math.random()*250)+1,
            score:1 //score value of eating a piece of food
             //val:Math.random()*10 
            });
        }
    };
    //calls blob.constrain for every player on the map
    this.constrain= function(){
        for(var i=0;i<this.blobs.length;i++){
            this.blobs[i].constrain(this);
            }
        };
              
     this.CheckPlayers=function(){
    //checks if players have collided and removes the smaller of the 2 from the blobs array
    //console.log(blobs);
            for(var i=0;i<this.blobs.length;i++){
                temp_blob=this.blobs[i];
                for(var x=0;x<this.blobs.length;x++){
                    //makes sure player doesn't eat himself 
                    if(this.blobs[i].id!==this.blobs[x].id){
                        //checks to see who eats who
                        if(this.blobs[i].eats(this.blobs[x])){
                            //emit playerlost command to client
                            io.to(this.blobs[x].id).emit('playerLost',"lost");
                            //removes dead player from player array
                            this.blobs.splice(x,1);
                        }
                    }
              }
            }
         };
     // check if players have made contact with the food   
     this.CheckFood=function(){
            //console.log(blobs[]);
            //cycle through the player array
            for(var index=0;index<this.blobs.length;index++){
                 //temp_blob=blobs[index];
                 //console.log(temp_blob.r);
                 //cycle through the foods array
                 for(var i=0;i<this.foods.length;i++){
                     //console.log(temp_blob);
                     //console.log(foods[0]);
                     //checks if player interacts with and eats food
                     if(this.blobs[index].eats(this.foods[i])){
                          //remove food from foods array
                          this.foods.splice(i,1);
                          //food.splice(i);
                      }
                  }
            }
            //console.log(blobs);   
         };
         
     this.genFood=function(timer) {
     // generate food over timer to replace the missing food on the map      
              if((timer%1===0) && (this.foods.length<(this.w/5))){
                   this.foods.push({
                       x:Math.floor(Math.random()*this.w)+1,
                       y:Math.floor(Math.random()*this.h)+1,
                       r:10,
                       red:Math.floor(Math.random()*255)+1,
                       green:Math.floor(Math.random()*255)+1,
                       blue:Math.floor(Math.random()*250)+1,
                       score:1
                       //val:Math.random()*10 
                    });
            //i++;    
          }
        
      };
}
     
// Blob objects is used for the player and food objects 
function Blob(id, x, y, r,red,green,blue,name) {
  this.id=id; //unique id
  this.x=x; //x coordinate
  this.y=y; //y coordinate
  this.r = r; //radius
  this.red=red; //color
  this.green=green;
  this.blue=blue;
  this.score=0; //default score
  this.name=name; //player name
  //this.map=map;
  //this.length=10;
  this.cells=[];
  console.log(this.name);
  //this function updates blob as it moves or eats
  this.update=function(pointX,pointY){
    var newvel = createVector(pointX - width / 2, pointY - height / 2);
    var newvelX = pointX - width / 2;
    var newvelY= pointY-height/2;
    newvel.div(50);
    //newvel.setMag(3);
    newvel.limit(5);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);     
  };
  
  /*checks if 2 blobs objects are in close proximity if the criteria a object is removed
  from whatever instance of a Map it belongs to
  */  
  this.eats = function(other) {
      
    var d = vectorDist(this.x,this.y,other.x,other.y); //calculate distance between blob and food or other blob
    //check if blob eating is at least 1.5 times bigger than what it's eating
    if (d < this.r + other.r && this.r>(other.r*1.5)) {
      //calculate and set new size for the blob  
      var sum = Math.PI * this.r * this.r + Math.PI * other.r * other.r;
      //console.log(this.r);
      //calculate new radius for blob
      this.r = Math.sqrt(sum / Math.PI);
      //console.log(this.r);
      //increase player score
      this.score+=other.score;
      //temp =new Blob(this.x,(this.y)+10,this.r,red,blue,green)
      //this.cells.push(temp);
      //this.r += other.r;
      //console.log(this.r);
      return true;
    } else {
        //console.log(false);
      return false;
    }
  };
  // limits where the blob can be on a map
  this.constrain = function(map) {
    this.x=Math.min(Math.max(0, this.x), map.w);
    this.y=Math.min(Math.max(0, this.y), map.h);
    //this.x = Math.(this.x, 0 , map.w);
    //this.y = Math.clamp(this.y, 0 , map.h );
  };
  
  /*leave a trail of food in the oposite direction the food is travelling
  and shrinks the Player  
  */
  this.leaveTrail=function(dx,dy,map){
      //console.log(dx)
      //console.log(dy);
      //pushing food back onto map from blob
      map.foods.push({
               x:this.x+((10+this.r)*dx),
               y:this.y+((10+this.r)*dy),
               r:10,
               red:Math.floor(Math.random()*255)+1,
               green:Math.floor(Math.random()*255)+1,
               blue:Math.floor(Math.random()*250)+1,
               score:1
               //val:Math.random()*10  
            }); 
               //calculating and setting player's new size 
               var sum = Math.PI * this.r * this.r - Math.PI * 5 * 5;
               //this.r = Math.sqrt(sum / Math.PI);
         //new radius      
         this.r -=4;
         //negative score
         this.score-=1;
  };
}

   
for( var num=0;num<10;num++){
    obstacles.push({
        x:Math.floor(Math.random()*2000)+1,
        y:Math.floor(Math.random()*2000)+1,
        id:num
    });
}
    
/*function CheckPlayers(){
    //checks if players are on top of each other
    //console.log(blobs);
    for(var i=0;i<blobs.length;i++){
        temp_blob=blobs[i];
        //blobs[i]=
        for(var x=0;x<blobs.length;x++){
            if(blobs[i].id!==blobs[x].id){
                if(blobs[i].eats(blobs[x])){    
                    io.to(blobs[x].id).emit('playerLost',"lost");
                    blobs.splice(x,1);
                }
            }
      }
    }
 }
 
 function constrainPlayers(){
     for(var i=0;i<blobs.length;i++){
         blobs[i].constrain();
     }
 };
 
function CheckFood(){
    //console.log(blobs[]);
    for(var index=0;index<blobs.length;index++){
         //temp_blob=blobs[index];
         //console.log(temp_blob.r);
         for(var i=0;i<foods.length;i++){
             
             //console.log(temp_blob);
             //console.log(foods[0]);
             if(blobs[index].eats(foods[i])){
                  foods.splice(i,1);
                  //food.splice(i);
              }
          }
    }
    //console.log(blobs);   
}
  */  

// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io')(server);
timer=0;

//set call timer, 30 frames a seconds
setInterval(heartbeat,100);
function heartbeat() {
  /*go through every map(room) instance 
   * and call the neccassry functions to update the map
   * @type Number
   */
  //cycle through all the games/rooms running on the server
  for(var g=0;g<maps.length;g++){
       //call genFood function with each heartbeat
       maps[g].genFood(timer);
       //console.log(1);
       //call CheckPlayers function with each heartbeat
       maps[g].CheckPlayers();
       //console.log(2);
       //call CheckFood function with each heartbeat
       maps[g].CheckFood();
       //console.log(3);
       //call constrain function with each heartbeat
       maps[g].constrain();
       //console.log(4);
       //console.log("room"+g);
       //testing
       if(timer%50===0){    
           //console.log(io.sockets);
           //console.log('heartbeat', maps[g].blobs)
           //console.log(maps[g].blobs)
       }
       /* emit data to players in a given room*/
       io.sockets.in('room'+g).emit('heartbeat', maps[g].blobs);
       //io.sockets.emit('heartbeat', maps[g].blobs);
       //console.log(5)
       io.sockets.in('room'+g).emit('foods', maps[g].foods);
         //console.log(6);
       io.sockets.in('room'+g).emit('obs',obstacles);
  } 
  timer++; //increment timer
}

//console.log(foods[1].colour)
// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function(socket) {
    //display message when client connects successfully  
    console.log("We have a new client: " + socket.id); 
    //start command - starts game with given data 
    socket.on('start',
      function(data) {
        //console.log(socket.id + " " + data.x + " " + data.y + " " + data.r);
        //total numbers of players at the time
        totalPlayer=0;
        switched=false;
               //cycle through rooms to check how many players connected 
               for(var t=0;t<maps.length;t++){
                   totalPlayer+=maps[t].blobs.length;
               }
               //if max players in a room change room/port and start a game there
               if(totalPlayer>20 && !switched){
                   console.log("changePort");
                   io.to(socket.id).emit('changeport',80);
                   switched=true;
               }
        if(maps.length===0 && !switched){
            //create map and draw blob
            maps.push(new Map(0,1000,1000))    ;
            // console.log(maps.length);
            maps[0].blobs.push(new Blob(socket.id, data.x, data.y, data.r,data.red,data.green,data.blue));
            //console.log(1);
            //check size of map based on number of players present
            maps[0].changeSize();
            //console.log(2);
            /*var tempmap={
                w:maps[0].x,
                h:maps[0].y
            };*/
              //console.log("room"+num+1);
            //room number (1st toom)
            socket.join('room0');
            io.sockets.emit('map',maps[0]);
            //console.log(3);
            //call food function
            maps[0].initFood();
            //console.log(4);
            //call constrain
            maps[0].constrain();
            //console.log(maps.length);
       }else if(!switched) {
            playerJoin=false;
            for(var num=0;num<maps.length;num++){
               /*if(maps[num].blobs.length>1 && maps[num].id===maps[maps.length-1].id){     
               }*/
               if(maps[num].blobs.length<5 && !playerJoin) {
                   //creating new rooms and adding players
                   socket.join("room"+(num));
                   console.log("add player room"+(num));
                   maps[num].blobs.push(new Blob(socket.id, data.x, data.y, data.r,data.red,data.green,data.blue,data.name));
                   //changing map size
                   maps[num].changeSize();
                   io.sockets.in('room'+(maps.length-1)).emit('map',maps[num]);
                   playerJoin=true;
               }
                  
              }
              
               if(!playerJoin ){
                    maps.push(new Map(0,1000,1000)); 
                   socket.join("room"+(maps.length-1)); 
                   maps[maps.length-1].blobs.push(new Blob(socket.id, data.x, data.y, data.r,data.red,data.green,data.blue,data.name));
                   maps[maps.length-1].changeSize();
                   maps[maps.length-1].initFood();
                   //console.log(4);
                   maps[(maps.length-1)].constrain();
                   io.sockets.in('room'+maps.length-1).emit('map',maps[maps.length-1]);
        }
        //map.changeSize();
        //console.log(map);
        //console.log('SSS');
      }}
    );

    //update command
    socket.on('update',
      function(data) {
        //console.log(socket.id + " " + data.x + " " + data.y + " " + data.r);
        //console.log(data);
        //console.log(socket.id);
        //cycle through rooms
        for(var z=0;z<maps.length;z++){
          //cycle through all players available  
          for (var i = 0; i < maps[z].blobs.length; i++) {
            //console.log(2);
            //check id 
            if (socket.id === maps[z].blobs[i].id) {
            //blob = blobs[i];
            //console.log(3);
            //update position and size
            maps[z].blobs[i].x = data.x;
            maps[z].blobs[i].y = data.y;
            maps[z].blobs[i].r = data.r;
            //check if boost activated
            if(data.boost){
                   //console.log(4);
                   //x direction
                   directionX=maps[z].blobs[i].x-data.x;
                   //y direction
                   directionY=maps[z].blobs[i].y=data.y;
                   //check travel direction and oush food in the opposite direction while reducing size
                   if(directionX<=0){
                       directionX=-1;
                   }else{
                       directionX=1;
                   }
                   if(directionY<=0){
                       directionY=-1;
                   }else{
                       directionY=1;
                   }
                   //console.log(maps[z]);
                   //console.log(5);
                   maps[z].blobs[i].leaveTrail(directionX,directionY,maps[z]);                     
                }
                //console.log(data);
                //console.log(5);
                }
                //console.log(maps[z]);
            }
        }
    }
);
    //disconnect command - when player dies 
    socket.on('disconnect', function() {
        //console.log(socket.id);
        //console.log("ahhh");
        //cycle through rooms  
        for(var num=0;num<maps.length;num++){
                for(var count=0;count<maps[num].blobs.length;count++){
                    //cycle through players to find the one that died
                    if(maps[num].blobs[count]['id']===socket.id){
                       //remove from players array 
                       maps[num].blobs.splice(count,1);
                       //change map size - shrink 
                       maps[num].changeSize();
                       console.log("Client has disconnected");
                       io.sockets.in('room'+num).emit('map',maps[num]);
                    }
                }
            }   
        }
    );
    
    //food delete command
    socket.on('foodDelete',function(data){
        //cycle through rooms
        for(var f=0;f<maps.length;f++){
                //cycle through foods array
                for(var i=0;i<maps[f].foods.length;i++){
                    //identify eaten food
                    if(maps[f].foods[i]['x']===data.x && maps[f].foods[i]['y']===data.y){
                        //console.log(foods);
                        //remove food from foods array
                        maps[f].foods.splice(i,1);
                    }
                }  
            }
        }
    );
    
    //when a player is eat by another player remove the player from the blobs array 
    //and sent a message to the eaten player that they lost
    //eat player command
    socket.on('eatPlayer',function(data){
           //cycle through rooms
           for(var c=0;c<maps.length;c++){
           //cycle through players array    
           for (var i=0;i<maps[c].blobs.length;i++){
               //identify eaten player
               if(maps[c].blobs[i]['id']===data.id){
                   //console.log(blobs);
                    if(maps[c].blobs[i].score>currentHighScore){
                        //set global highscore
                        currentHighScore=maps[c].blobs[i].score;
                        //set highscore holder name 
                        hSHolderName=maps[c].blobs[i].id; 
                        //pass highscore
                        io.to(data.id).emit('playerLost',currentHighScore,);
                        //remove player from player array
                        maps[c].blobs.splice(i,1);
                        //change map size - shrink
                        maps[c].changeSize();
                        io.sockets.in('room'+c).emit('map',maps[c]);
                        };                   
                    }
                }
            }
        });
    }
);
