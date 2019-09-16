function Blob(x, y, r,red,green,blue,map) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0, 0);
  this.id="";
  this.boost=false;
  this.map=map
  this.red=red;
  this.green=green;
  this.blue=blue;
  

  this.update = function(boost,timer) {
    var newvel = createVector(mouseX - width / 2, mouseY - height / 2);
    newvel.div(5);
    if(boost && this.r>25 ){
        newvel.setMag(8);
        if(timer%30===0){
           this.boost=true; 
        }
        
    }else{
        newvel.setMag(2);
        this.boost=false;
    }
    
    newvel.limit(5);
    this.vel.lerp(newvel, 0.5);
    this.pos.add(this.vel);

    
  };


  this.constrain = function(W,H) {
    //console.log("WW",W,H);
    blob.pos.x = constrain(blob.pos.x, 0 , H );
    blob.pos.y = constrain(blob.pos.y, 0 , W );
  };
  

  this.show = function() {
   
          fill(red,green,blue);
          ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
          return;
      };
  }


