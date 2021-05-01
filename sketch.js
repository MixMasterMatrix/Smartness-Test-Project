var canvas, gameState = 0, contestantCount, database, question, contestant

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz1 = new Quiz()
  quiz1.getState();
  quiz1.start();
   
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
}
if(gameState === 1){
    clear();
    quiz.play();
  }
  quiz1.start()
  quiz1.getState()
}
