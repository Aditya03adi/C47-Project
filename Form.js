class Form {

    constructor() {
     
      this.button = createButton('Lets GO!');
      this.greeting = createElement('h2');
      this.title = createElement('game');
      this.input= createInput('Enter Name')
      
    }
    hide(){
      console.log("hi")
      this.greeting.hide();
      this.button.hide();
      this.title.hide();
      this.input.hide();
    }
  
    display(){
      this.title.html("Match IT");
      this.title.position(displayWidth/2 , 0);
  
      
      this.button.position(displayWidth/2 , displayHeight-750);
      this.input.position(displayWidth/2,displayHeight-700)
  
      this.button.mousePressed(()=>{
        console.log("hello")
       // form.hide();
        this.input.hide();
        this.button.hide();
        player=new Player();
        player.name = this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      
  
    }
  }
  