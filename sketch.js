
let bg;
let tree, treeImg;
let cloud1, cloud2, cloudGroup;
let chao, chaoImg;
let rafaelImg, wesImg;
let rafael, wes;
let pc, pcImg;
let gameState=1;
let score=0;
let questions;





function preload(){
 cloud1=loadImage("assets/nuvens 1.png");
 cloud2=loadImage("assets/nuvens 2.png"); 
 chaoImg=loadImage("assets/chao.png");
 treeImg=loadImage("assets/arvore.png");
 rafaelImg=loadImage("assets/rafael.png");
 wesImg=loadImage("assets/wes.png");
 som1=loadSound("assets/finalruim1.mp3");
 som2=loadSound("assets/finalfeliz2.mp3");
 pcImg=loadAnimation("assets/andando1.png","assets/andando2.png", "assets/parado.png");

 

}

function setup(){
createCanvas(windowWidth, windowHeight);
tree=createSprite(300, 200, 600, 300);
tree.addImage("tree", treeImg)
tree.VelocityY=2;
 tree.y=tree.height/10;

chao = createSprite(700,500,250,20);
chao.addImage(chaoImg);
chao.scale=1.9;

pc= createSprite( 500, 539, 15, 15);
pc.addAnimation("pc", pcImg);
pc.scale=0.1;


//rafael=createSprite(750, 300, 15, 20);
//rafael.addImage("rafael", rafaelImg);
//rafael.scale=0.7;

wes=createSprite(750,400,15,20);
wes.addImage("wes", wesImg);
wes.scale=0.7;

questions=createElement("h2","o que é de comer e é amarelo?");
questions.position(400, 350);





}
function draw(){
background("lightBlue");

 if (gameState===1){
text(" coraçao "+score, 70, 50);
if (keyDown(UP_ARROW)) {
pc.position.y+=-2


}   
if (keyDown(LEFT_ARROW)){
pc.position.x+=-2

} 
// if(pc.x=600){
// pc.changeAnimation("olivia", oliviaImg)
// }
tree.velocity.y=2;
if (tree.y>height){
    tree.y=tree.height/10;
}
    Clouds();
 }
//som1.play();
//som2.play();
drawSprites();



}

function Clouds(){
    if (frameCount % 60 === 0) {
    var cloud0 = createSprite(200,100,40,10);
    cloud0.velocity.x=3
    cloud0.position.y=random(60, 150);
    cloud0.scale=0.3
    var r=Math.round(random(1, 2));
    switch(r){
        case 1: cloud0.addImage(cloud1);
        break;
        case 2: cloud0.addImage(cloud2);
        break;
        default: break;
    }
    
      }
    
  }
  
  
  



