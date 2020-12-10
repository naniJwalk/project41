
var umbrella;
var maxDrops=100;
var drops;
var thunder1,thunder1Img,thunder2,thunder2Img,thunder3,thunder3Img,thunder4,thunder4Img;
function preload(){
    thunder1Img=loadImage("images/thunderbolt/1.png");
    thunder2Img=loadImage("images/thunderbolt/2.png");
    thunder3Img=loadImage("images/thunderbolt/3.png");
    thunder4Img=loadImage("images/thunderbolt/4.png")
}

function setup(){
   umbrella= new Umbrella(displayWidth/2,100,50,50)
   maxDrops= new Drops();
    thunder1.createSprite(displayWidth/2,displayHeight/2,400,750);
    thunder2.createSprite(displayWidth/2,displayHeight/2,400,750);
    thunder3.createSprite(displayWidth/2,displayHeight/2,400,750);
    thunder4.createSprite(displayWidth/2,displayHeight/2,400,750);
    
    if(frameCount%12===0){
      var rand=Math.round(random(1,4));
      switch(rand){
         case 1: thunder1.addImage(thunder1Img);
         break;
         case 2: thunder2.addImage(thunder2Img);
         break;
         case 3: thunder3.addImage(thunder3Img);
         break;
         case 4: thunder4.addImage(thunder4Img);
         break;
      }
     }
}

function draw(){
   createCanvas(displayWidth,displayHeight);
   background("black");
   
   umbrella.display();
   drops.display();


   for(var i=0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)));
   }

   
    
}   

