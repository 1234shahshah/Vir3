class Food 
{
constructor()
{
var foodStock
var lastFed
var milk1 
  }
  
  milk=loadImage("milk.png")
  mik=loadImage("mik.png")
  getFoodStock()
  {

  }

  updateFoodStock()
  {

  }

  deductFood()
  {

  }
  bedroom()
  {
background(bedroom,550,500)
  }
  garden()
  {
    background(garden,550,500)
  }
  bathroom()
  {
    background(bathroom,550,500)
  }
  display()
  {
      if (keyDown(UP_ARROW))
      {
        milk1=addImage("mik",milk)
      }else
      {
       milk1=addImage("mi",mik)
      }
  }
}
