/*
This game was tough to make.
There is a bug which does not allow
the snake to grow more than 2 segments.
So I added a score function to compromise
*/
var dir;
var snake;
var score = 0;
var endgame = false;
var dofoodLocation = true
function setup() {
    createCanvas(2000, 2000);
    snake = new Snake()
    dir = 0
    
    
}
function draw() {
    frameRate(100);
    if (endgame){
        background(255, 0, 0);
        dofoodLocation = false;
    }else{
    background(255);
    if (dofoodLocation == true) {
        pos = foodLocation();
        dofoodLocation = false;
    }
    move();
    push();
    fill(255, 0, 0)
    rectMode(CENTER)
    rect(pos.x, pos.y, 100, 100);
    pop();
    //console.log(dir);
    snake.display();
    textSize(50)
    text("Score:"+score, 1800, 100)
    }
}
function move() {
    
    if (keyIsDown(UP_ARROW)) {
        dir = 0
    }
    if (keyIsDown(DOWN_ARROW)) {
        dir = 180
    }
    if (keyIsDown(LEFT_ARROW)) {
        dir = 90
    }
    if (keyIsDown(RIGHT_ARROW)) {
        dir = 270
    }
}
function foodLocation(){
    rectMode(CENTER);
    var position = [50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450, 1550, 1650, 1750, 1850, 1950]
    var x = position[Math.round(random(0, 19))];
    var y = position[Math.round(random(0, 19))]; 
    var vec = createVector(x, y)
    return vec;
}  