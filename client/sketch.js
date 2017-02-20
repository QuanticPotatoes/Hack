
let nb = window.innerWidth /  window.innerHeight * 8
let width
let height
let randBack, randFront

let backgroundColor = [4,8,24]
let foregroundColor = 255

let graphe = []

let _supercomputer

function setup() {

    createCanvas(window.innerWidth,window.innerHeight)
    width = window.innerWidth
    height = window.innerHeight
    
    generateGraphe()
    
}

function draw() {
    
    showBackground()
    
    stroke(255)
    

    noFill()
    
    showGraphe()
    
    
}


function generateGraphe() {
    
    
    // Ordinateur central
    _supercomputer = new SuperComputer((width/2),(height/2))
    graphe.push(_supercomputer)
    
    
    let max = 6 // nb de joueurs
    for(let n = 1; n <= max; n++){
        

        let coordonnee = {}
        
        coordonnee.x = CircleToPositionX((width/2),500,360/max * n)
        coordonnee.y = CircleToPositionY((height/2),500,360/max * n)
        
        let _player = new Player(coordonnee.x,coordonnee.y)
        
        graphe.push(_player)
        
    }
    
    // node intermediaire
    
    let node_max = 6 * 2
    for(let u = 1; u <= node_max; u++){
        

        let coordonnee = {}
        
        coordonnee.x = CircleToPositionX((width/2),350,360/node_max * u -5 )
        coordonnee.y = CircleToPositionY((height/2),350,360/node_max * u -5)
        
        let _node = new Node(coordonnee.x,coordonnee.y)
        
        graphe.push(_node)
        
    }
    
    graphe.forEach((element) => {
        
        let near = []
        
        graphe.forEach((item) => {
            near.push([p5.Vector.dist(item.pos,element.pos),item])
        })
        
        near.sort()
        
        
        
        element.near.push(near[1][1])
        element.near.push(near[2][1])
        
    })
    
    
}

function CircleToPositionX(x,r,angle){
    return x + r * cos(radians(angle))
}

function CircleToPositionY(y,r,angle){
    return y + r * sin(radians(angle))
}

function showBackground() {
    
    background(backgroundColor)
    
    noStroke()
    
            
    
    randBack = random(3,4)
    
    for(let x = 0; x < nb; x++) {
        for(let y = 0; y < nb; y++) {
            
            fill(foregroundColor,100)         
            
            
            randFront = random(2.5,4)
            ellipse(x * (width / nb ) + 25 + mouseX / 150 ,y * (height / nb) + 25 + mouseY / 150,randFront,randFront);
            
            fill(foregroundColor,35)
            
            
            ellipse(x * (width / nb ) + 25 * 4 + mouseX / 300,y * (height / nb) - 25 + mouseY / 1000,randBack,randBack);
            ellipse(x * (width / nb ) - 25 * 2 + mouseX / 300,y * (height / nb) - 25 + mouseY / 1000,randBack,randBack);
            ellipse(x * (width / nb ) - 25 * 2 + mouseX / 300,y * (height / nb) + 25 * 3 + mouseY / 1000,randBack,randBack);
            ellipse(x * (width / nb ) + 25 * 4 + mouseX / 300,y * (height / nb) + 25 * 3 + mouseY / 1000,randBack,randBack);
        }
    }
    
}

function showGraphe() {
    graphe.forEach((element) => {
        
        strokeWeight(8)
        stroke(255)
        
        element.near.forEach((item) => {
             beginShape()
             vertex(item.pos.x,item.pos.y)
             vertex(element.pos.x,element.pos.y)
             endShape()
        })
        
        strokeWeight(1)
        
         element.show()
    })

}