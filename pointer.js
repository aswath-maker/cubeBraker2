class pointer {
    constructor(x,y,width,height,color){
        this.color = color;
        this.x = x;
        this.y = y;
        var options={
            isStatic : false,
            restitution : 1      
                        
}

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        World.add(world, this.body);
        this.Visiblity = 255;   
    }


   


        display(){
           if(this.body.speed < 30){
            
            push();
            fill(this.color);
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle)
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
           }else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            
            pop();

           }
        }


                
    
    }

   




