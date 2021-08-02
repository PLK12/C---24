class CannonBall
{
    constructor(x,y,r)
    {
        var options = 
        {
            restitution: 0.85,
            isStatic: true,
            friction: 1,
            density: 1,
        };
        this.image = loadImage("assets/cannonball.png");    
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(myWorld, this.body);
    
    }

    shoot()
    {
        // Body.setVelocity(this.body, {x: 10, y:-12})
   

         var velocity = p5.Vector.fromAngle(cannon.angle);
         velocity.mult(15);
         Body.setStatic(this.body, false);
         Body.setVelocity(this.body, {x: velocity.x, y: velocity.y});

    }

     display()
     {
         /* part1 without image
        var pos = this.body.position; 
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r, this.r);
        pop();

        */

        //part2

        var pos = this.body.position; 
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);;
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
        pop();

     }   
}   