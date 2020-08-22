class player {
    constructor(x,y,r){
      var options={
        isStatic : false,
        density : 0.04,
        friction : 0.5,
        restitution : 0.5
      }  
      
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
       World.add(world, this.body);
       }

       display(){
           var angle = this.body.angle;
           push();
           translate(this.body.position.x, this.body.position.y);
           fill("blue");
           ellipseMode(RADIUS);
           ellipse(0,0,this.r,this.r);
           pop();

       }
};
    


