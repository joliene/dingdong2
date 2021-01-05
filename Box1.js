class Box1 {
  constructor(x, y, width, height) {
      var options = {
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
     // this.image = loadImage("boy.png");
      World.add(world, this.body);
    }
    display(){
     /* if(this.body.speed < 3){
      var pos =this.body.position;
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
    //  rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("lavender");
      rect(0, 0, this.width, this.height);
      pop();
      }*/
      if(this.body.speed > 3){
        push();
        World.remove(world, this.body);
        
        this.Visiblity = this.Visiblity - 5;
        //tint(255,this.Visiblity);
        //rect(this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
    }
};