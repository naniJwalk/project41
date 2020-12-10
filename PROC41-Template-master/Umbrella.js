class Umbrella{
    constructor(x,y){
        var options = {
            IsStatic: true
        }
        this.body = Bodies.circle(x, y, options);
        this.width = width;
        this.height = height;
        this.image = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
        World.add(world, this.body);
    }
    display(){
        push()
        var pos =this.body.position;
        ellispeMode(CENTER);
        fill("brown");
        ellispe(pos.x, pos.y, this.radius);
        pop()
    }
}