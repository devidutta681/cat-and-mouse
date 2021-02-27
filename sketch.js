var cat,catimg1,cat_walking,cat_standing
var mouse,mouseimg1,mouse_walking,mouse_standing
var stage,stageImg
var gamestate = "play"
function preload() {
   catimg1 = loadImage("images/cat1.png")
   cat_walking = loadImage("images/cat2.png","images/cat3.png")
   cat_standing = loadImage("images/cat4.png") 
   mouse_walking = loadImage("images/mouse2.png","images/mouse3.png")
   mouse_standing = loadImage("images/mouse4.png")
   stageImg = loadImage("images/garden.png") 
}
function setup(){
    createCanvas(2000,1000)
    stage = createSprite(500,100,10,10)
    stage.addImage(stageImg)
    stage.scale = 1.5
    cat = createSprite(800,530,10,10)
    cat.addImage(catimg1)
    cat.scale = 0.1
    mouse = createSprite(300,530,10,10)
    mouse.addImage(mouseimg1)
    mouse.scale = 0.1
}

function draw() {
    if(gamestate === "play"){
        background("black");
        cat.velocityX = 0
        
        if(cat.x - mouse.x < (cat.width - mouse.width)/2){
            cat.changeAnimation(cat_standing)
            mouse.changeAnimation(mouse_standing)
            gamestate = "end"
            if(keyDown("left")){
            }    
        }
        else{
            if(keyDown("left")){
                keyPressed();
            }
        }
    }
    if(gamestate === "end"){
        Textsize(25)
        stroke("black")
        Text("please press space to restart",900,500)
        if(keyWentDown("space")){
            gamestate = "play";
        }
    }
    drawSprites();
}


function keyPressed(){
    cat.velocityX = -5
    cat.addAnimation(cat_walking)
    mouse.addAnimation(mouse_walking)
}
