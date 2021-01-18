class trash{
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
	  this.height = height;
    this.image = loadImage("paper.png");
    

    
    Matter.Bodies.circle(x,y,20,20)

   
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("white");
      ellipse(0, 0, this.width, this.height);
      image(this.image,0, 0, 80, 80);
      pop();
    }
    
  }

  

 

 
  
  
  