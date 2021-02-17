class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attatch(body){
        this.sling.bodyA = body;
    }

    display(){
         
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#301608")
            strokeWeight(6);

            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x -20, pointA.y, pointB.x + 20, pointB.y);
        }
    }
    
}