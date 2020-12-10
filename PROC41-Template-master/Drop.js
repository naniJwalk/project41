class Drops{
    constructor(x,y){
        var options = {
         friction: 0.1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r=r;
        World.add(world, this.body);
    }
    display(){
    if(this.rain.position.y>height){
        Matter.body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
    }
    push()
    var pos =this.body.position;
    ellispeMode(CENTER);
    fill("brown");
    ellispe(pos.x,pos.x, this.radius);
    pop()
    }
}