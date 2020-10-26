//Create variables here

var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  dogimg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200,200,20,50)
  dog = addImage("dogImg")

  

}


function draw() {  
  dog.display();
  drawSprites();
  //add styles here

}




