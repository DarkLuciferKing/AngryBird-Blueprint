class Logs {
    constructor(x, y, h, a) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, h, options);
      this.width = 20;
      this.height = h;
      Matter.Body.setAngle(this.body, a)
      
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };