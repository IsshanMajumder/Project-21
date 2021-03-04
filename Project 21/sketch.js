var canvas;
var music;
var box, boximage;
var rectangle1; 
var rectangle2; 
var rectangle3; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rectangle1 = createSprite(0,600, 350, 100);
    rectangle1.shapeColor = ("blue");

    rectangle2 = createSprite(350, 600, 250, 100);
    rectangle2.shapeColor = ("red");

    rectangle3 = createSprite(650, 600, 300, 100);
    rectangle3.shapeColor = ("green");

    //create box sprite and give velocity
   box = createSprite(random(20, 750), 400, 50, 50);
   box.velocityX=20;
   box.velocityY=20;
   box.bounceOff(Edges);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();


    //add condition to check if box touching surface and make it box
    if (rectangle1.isTouching(box) && box.bounceOff(rectangle1)){
           box.ShapeColor = ("blue");
    }

    if (rectangle2.isTouching(box) && box.bounceOff(rectangle2)){
        box.ShapeColor = ("red");
    }

    if (rectangle3.isTouching(box) && box.bounceOff(rectangle3)){
        box.ShapeColor = ("green");
 }


    
    drawSprites();
}
