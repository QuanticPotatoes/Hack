class Node { 
    
    constructor(x,y){
        this.pos = createVector(x,y)
        this.near = []
    }
    
    show() {
        fill(25)
        ellipse(this.pos.x,this.pos.y,15,15) 
    }
    
    collider(entity,dis){
        let d = p5.Vector.dist(entity.pos,this.pos)
        if(d < dis){
            console.log("colision")
        }
    }
}

class SuperComputer extends Node {
    constructor(x,y){
        super(x,y)
    }
    
    show() {
        fill(155)
        rect(this.pos.x - 15,this.pos.y - 15,30,30)
    }
    
}

class Player extends Node {
    constructor(x,y,name) {
        super(x,y)
        this.name = name;
    }
    
    show() {
        fill(25)
        ellipse(this.pos.x,this.pos.y,20,20)
    }
}