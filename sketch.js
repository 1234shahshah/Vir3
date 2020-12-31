//Create variables here
var dog1
var happyDog
var database
var foods 
var foodStock
var fedTime
var lastFed
var foodObj
var gameState
var changeState
var readState
var garden
var bedroom
var bathroom

function preload()
{
  //load images here
  dog=loadImage("images/Dog.png")
  happyDog=loadImage("images/Happy.png")
  sadDog=loadImage("images/Vaccination.jpg")
  garden=loadImage("images/Garden.png")
  bedroom=loadImage("images/Bed Room.png")
  bathroom=loadImage("images/Wash Room.png")
 

}

function setup() {
	createCanvas(500, 500);
  
database=firebase.database()

dog1 = createSprite(250,250)
  dog1.addImage("d",dog)
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  fedTime=dataBase.ref("feedTime")
  fedTime.on("value",function(data){
    lastFed=data.val()
  })
  foo = new Food(250,250)
  readState=database.ref("gameState")
  readState.on("value",function(data){
    gameState=data.val()
  })
  feed=createButton("Click")
  feed.position(700,95)
  feed.mousePressed(feedDog)
  addFood=createButton("needfood")
  addFood.position(700,95)
  addFood.mousePressed(addFoods)
}


function draw() {  
background(46,139,87)
if (keyDown(UP_ARROW))
{
  foodStock=foodStock-1
  dog1.addImage("do",happyDog)
}
if (keyDown("A_ARROW"))
{

} 
if (keyDown("Q_ARROW"))
{
  
}
  drawSprites();
if (gameState!="Hungry")
{
  feed.hide()
  addFood.hide()
  dog.remove()
} else{
  feed.show()
  addFood.show()
  dog.addImage(sadDog)
}
currentTime=hour()
if(currentTime==(lastFed+1))
{
update("Playing")
foodObj.garden()
}else if (currentTime==(lastFed+2)){
  update("Sleeping")
  foodObj.bedroom()
}else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4))
{
  update("Bathing")
  foodObj.bathroom()
}else{
  update("Hungry")
  foodObj.display()
}
  //add styles here

}
function readStock(data)
{
  foods=data.val()
}

function writeStock(x)
{
  if(x<=0)
  {
    x=0
  } else{
    x=x-1
  }
  database.ref("/").update({Food:x})
}




