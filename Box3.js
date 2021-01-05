class Box3 {
    constructor(x, y, width, height) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
       // var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
      //  rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("pink");
        rect(0, 0, this.width, this.height);
        pop();
      }
  };