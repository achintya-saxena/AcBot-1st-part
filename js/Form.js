class Form {

  constructor() {
 

    this.input = createInput("").attribute("placeholder", "Name");
// this.input2 = createInput("").attribute("placeholder", "Ask me ");
    this.button = createButton('Submit');
   // this.button2 = createButton('Enter');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.reset = createButton('Reset');
    radio = createRadio();
    radio.option('Weather');
    radio.option('News');
    radio.option('Games');
    radio.option('Task Manager');
    radio.style("width", "50px");
    
  
 this.functionSubmitBtn=createButton('Submit');
     
}
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    radio.hide();
    this.functionSubmitBtn.hide();
  
  }
  display(){
    background(startBg);
    
   
    this.title.html("Ac Bot");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();

var time=new Date();
var hour=time.getHours();
console.log(hour);

if(hour>'06' && hour<='12') {
 var greet="Good Morning" ;
 background(morningBg);
}
else if(hour>'12' && hour<='15') {
 greet="Good Afternoon" ;
 background(noonBg);
}
else{
  greet="Good Evening";
  background(eveningBg);
}

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
     
      player.updateCount(playerCount);
      this.greeting.html(greet+" " + player.name+"<br><br>" + "How can I help you?")
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);

      radio.position(displayWidth/2,displayHeight/2); 
      //this.newsBtn.position(displayWidth/2 - 70, displayHeight/4+250);
      //this.gamesBtn.position(displayWidth/2 - 70, displayHeight/4+300);
      //this.taskManagerBtn.position(displayWidth/2 - 70, displayHeight/4+350);
      this.functionSubmitBtn.position(displayWidth/2 +20, displayHeight/4+450);

      this.functionSubmitBtn.mousePressed(()=>{
        var val = radio.value();
       //hw
       if(val==='Weather'){
 console.log("weather");
 window.open("https://www.bbc.com/weather");
        }
     else if(val==='News')  {
       console.log("news");
       window.open("https://www.bbc.com/");
     }
     else if(val==='Games') {
       console.log("games");
       window.open("Games.html");
     }
     else if(val==='Task Manager') {
//console.log("task manager");
//window.open("test.html");
task=new TaskManager();
task.display();
     }
        

        })

     // this.input2.position(displayWidth/2 - 70, displayHeight/4+200);
      //this.button2.position(displayWidth/2 - 70, displayHeight/4+250);
      player.update();
    });
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    
    database.ref("/").update({
      players: null,
      finishedPlayers: 0,
    });});
  }

  enter() {
    this.title.hide();
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount++;
    player.index = playerCount;
    player.updateName();
    player.updateCount(playerCount);

    this.greeting.html("Welcome " + player.name + "!");
    this.greeting.position(
      displayWidth / 2.1 - player.name.length * (displayWidth / 110),
      125
    );
  }




}


