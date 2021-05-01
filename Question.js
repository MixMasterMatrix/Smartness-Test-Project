class Question {

    constructor() {
        this.question = createElement("h2")
        this.option1 = createElement("h3")
        this.option2 = createElement("h3")
        this.option3 = createElement("h3")
        this.option4 = createElement("h3")
        
    }
/*    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    } */
  
    display(){
      var title = createElement('h1')
      title.html("My Quiz Game:");
      title.position(displayWidth/2 - 450, 0);
  
      this.question.html("Question: Which came first, the chicken or the egg?");
      this.question.position(150,80);   
      this.option1.html("1. Chicken");
      this.option1.position(150,120);
      this.option2.html("2. Egg");
      this.option2.position(150,160);
      this.option3.html("3. Why are you asking this?");
      this.option3.position(150,200);
      this.option4.html("4. Subscribe to NicTacToe!");
      this.option4.position(150,240);
  
    }
  }