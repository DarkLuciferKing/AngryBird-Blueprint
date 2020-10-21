class Pig {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.radius = r;
      
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };