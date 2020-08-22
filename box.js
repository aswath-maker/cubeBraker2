class box {
    constructor(x,y,width,height){

        var options={
            isStatic : true        
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        World.add(world, this.body);
         
    }


        


        display(){
           
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill("blue");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
           

            
        
        }


        display2(){
           
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            fill("#6C4929");
            rect(0,0,this.width,this.height);
            pop();
       


    }




};
