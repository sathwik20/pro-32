class Robot{
    constructor(x,y,width,height){
    var options = {
    
    restitution:0.4,
    friction:1.0
    
    }
    this.image=loadImage("D4.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    //this.Visibility = 255
    }
    display(){
    
    //if(this.body.speed<3){
    
     // var angle = this.body.angle;
      var pos = this.body.position;
      push();
     // translate(pos.x,pos.y);
      //rotate(angle)
      imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width, this.height); 
      //pop();
    
    }
    
    // else{
    //     World.remove(world,this.body);
    //  //   push ()
    //   //  this.Visibility = this.Visibility - 5;
    //    // tint(255,this.Visibility)
    //     imageMode(CENTER);
    //     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    //     //pop ();
    // }
    // } 
    }