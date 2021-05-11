class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

async start(){
  if(gameState === 0){
    player = new Player();
    var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val();
      player.getCount();
    }
    form = new Form()
    form.display();


    //circle1=new Circle(200,200,5,5);
    //circle1.addImage(circle1Img);
    //circle2=new Circle(300,300,5,5);
    //circle2.addImage(circle2Img);
    //circle3=new Circle(400,400,5,5);
    //circle3.addImage(circle3Img);
    circle4=new Circle(500,500,5,5);
    //circle4.addImage(circle4Img);
    //circles=[circle1,circle2,circle3,circle4];
  }
  }

    play(){
      console.log("play")
      //form.hide();
      //circle1.display();
      ///circle2.display();
      //circle3.display();
      circle4.display();
    //Player.getPlayerInfo();
  }
    
 //if(keyIsDown(LEFT_ARROW)){
//  circle5.velocityX=-5;
 //}

 //if(keyIsDown(RIGHT_ARROW)){
   //circle5.velocityX=5;
 //}
  
//if(player.score>=5){
  //gameState=2;
  //}

  //circle5=new Circle(200,500,30,30);
//var rand = Math.round(random(1,4));
//switch(rand) {
 // case 1: circle5.addImage(circle1Img);
   //       break;
  //case 2: circle5.addImage(circle2Img);
        //  break;
  //case 3: circle5.addImage(circle3Img);
        //  break;
  //case 4: circle5.addImage(circle4Img);
       //   break;
  
  //default: break;
//}
  //if(circle5.addImage(circle1Img)&&circle1.isTouching(circle5)){
//score+=1
  //}

  //else if (circle5.addImage(circle2Img)&&circle2.isTouching(circle5)){
//score+=1
//  }

//else if(circle5.addImage(circle3Img)&&circle3.isTouching(circle5)){
//score+=1;
//}

//else if(circle5.addImage(circle4Img)&&circle4.isTouching(circle5)){
//score+=1;
//}

//circle1.velocityY=7;
//circle2.velocityY=7;
//circle3.velocityY=7;
//circle4.velocityY=7;



    //end(){
     //gameState=0;
     //score=0
    //}
  }
