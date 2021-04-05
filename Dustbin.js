class Dustbin {
  constructor(x, y) {
    var options = {
        'isStatic': true
    }
    this.dwidth = 200;
    this.dheight = 100;
    this.thickness = 20;
    this.bodyb = Bodies.rectangle(x, y, 200,250, options);
    this.image=loadImage("dustbingreen.png");
    World.add(world,this.bodyb);
   
    
    
    
  }
  display(){
    push ();
    translate(this.bodyb.position.x,this.bodyb.position.y); 
    imageMode(CENTER);
    image(this.image,0,-90,200,250)
    
    pop ();

    
  }
};