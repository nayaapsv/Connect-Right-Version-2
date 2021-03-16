const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var test1,test_btn,q,ca,ua;
var engine, world;
var j=0;
var nameEntry;

var avatar1,avatar2,avatar3,avatar4,avatar5;

var level1 ,level2,level3,level4
var level5;

var level2_btn , level1_btn ;
var level3_btn,level4_btn,level5_btn;

var level1e ,level2e,level3e,level4e
var level5e;

var level1e_btn,level2e_btn ;
var level3e_btn,level4e_btn,level5e_btn;



var thiruvaluvar,thiruvaluvarimg;

var colour,bg1,bg2,bg3;                                                                  

var b0,b1,b2,b3,b4,b5,b6;
var displayAnswer = "";

var l1q,l1ca;
var l2q,l2ca;
var l3q,l3ca;
var l4q,l4ca;
var l5q,l5ca;


var l1eq,l1eca;
var l2eq,l2eca;
var l3eq,l3eca;
var l4eq,l4eca;
var l5eq,l5eca;

var otherLevels_btn;

var meaning1,meaning2;

var english,tamil;

var instruction2 = "Welcome to Connect Right Choose the level and click on the buttons in the correct order of the proverb or thirukural "



var title;

var score;
var score2 = 0;

function preload(){
 
  
}
function setup() {
  
 
  engine = Engine.create();
  world = engine.world;
  
nameEntry = new Form();
score = createInput('');
score.position(1700,50);
score.class("customInput2").attribute('readonly', true);


title = createInput("Connect Right").attribute('readonly', true);
title.position(150,30)
title.class("title");
}

function draw() {
 
 
 
 
 nameEntry.display();
 
  drawSprites();
}


function storeAnswer(answer){

  if (j==0) {
    yourAnswer = createInput('').attribute('readonly', true);
    yourAnswer.class("customInput");
  }
  
  if( j < 7 ) {
    ua[j++] = answer;
  
    displayAnswer = displayAnswer + " " +answer;
    
    
    yourAnswer.value(displayAnswer);
 
    yourAnswer.position(200,600);
  }

 if (j == 7){
  
  if(JSON.stringify(ua)==JSON.stringify(ca)) {
 
   displayAnswer = "";
    
    score.value(score2 = score2+10);
swal({
      title: "Correct Answer" + "  score : "+ score.value(),
      text: meaning2,
      icon: "success",
      button: "Ok !!"
    
})
.then((value) => {
  level1 = new level_1();
  level1.display();
   ua =[];
   displayAnswer = "";
   j=0
  level2 = new level_2();
  level2.display();
  ua =[];
  displayAnswer = "";
  j=0
  level3 = new level_3();
  level3.display();
  ua =[];
  displayAnswer = "";
  j=0
  level4 = new level_4();
  level4.display();
  ua =[];
  displayAnswer = "";
  j=0
  level5 = new level_5();
  level5.display();
  ua =[];
  displayAnswer = "";
  j=0


  level1e = new level_1e();
  level1e.display();
   ua =[];
   displayAnswer = "";
   j=0
  level2e = new level_2e();
  level2e.display();
  ua =[];
  displayAnswer = "";
  j=0
  level3e = new level_3e();
  level3e.display();
  ua =[];
  displayAnswer = "";
  j=0
  level4e = new level_4e();
  level4e.display();
  ua =[];
  displayAnswer = "";
  j=0
  level5e = new level_5e();
  level5e.display();
  ua =[];
  displayAnswer = "";
  j=0
  

  english.show();
  tamil.show();
  yourAnswer.hide();
  otherLevels_btn.hide()
 // meaning1.hide();
});
/*
     otherLevels_btn.mousePressed(()=>{
     
      level1 = new level_1();
      level1.display();
       ua =[];
       displayAnswer = "";
       j=0
      level2 = new level_2();
      level2.display();
      ua =[];
      displayAnswer = "";
      j=0
      level3 = new level_3();
      level3.display();
      ua =[];
      displayAnswer = "";
      j=0
      level4 = new level_4();
      level4.display();
      ua =[];
      displayAnswer = "";
      j=0
      level5 = new level_5();
      level5.display();
      ua =[];
      displayAnswer = "";
      j=0


      level1e = new level_1e();
      level1e.display();
       ua =[];
       displayAnswer = "";
       j=0
      level2e = new level_2e();
      level2e.display();
      ua =[];
      displayAnswer = "";
      j=0
      level3e = new level_3e();
      level3e.display();
      ua =[];
      displayAnswer = "";
      j=0
      level4e = new level_4e();
      level4e.display();
      ua =[];
      displayAnswer = "";
      j=0
      level5e = new level_5e();
      level5e.display();
      ua =[];
      displayAnswer = "";
      j=0
      

      english.show();
      tamil.show();
      yourAnswer.hide();
      otherLevels_btn.hide()
     // meaning1.hide();
    });
   
*/
  } else {
   
   
    swal({
      title: "Try Again",
     
      icon: "error",
     // text:score,
      button: "Ok !!"
})
ua = [];
j = 0;
displayAnswer = "";
    b0.show();
    b1.show();
    b2.show();
    b3.show();
    b4.show();
    b5.show();
    b6.show();

    yourAnswer.hide();
  }

 }
} //End of storeAnswer

function createQuestion(question,rightAnswer){

  for(var i=0; i < question.length; i++){

    switch (i){
      case 0: {

        b0 = createButton(question[i], question[i]);
        b0.position(200,300);
        b0.class("wordButton");
        b0.mousePressed(()=>{
          b0.hide();
          storeAnswer(b0.value());

        })
        break;
      }
      case 1: {

        b1 = createButton(question[i], question[i]);
        b1.position(300,200);
        b1.class("wordButton");
        b1.mousePressed(()=>{
          b1.hide();
          storeAnswer(b1.value());
        })
        break;
      }
      case 2: {

        b2 = createButton(question[i], question[i]);
        b2.position(400,100);
        b2.class("wordButton");
        b2.mousePressed(()=>{
          b2.hide();
          storeAnswer(b2.value());
        })
        break;
      }
      case 3: {

        b3 = createButton(question[i], question[i]);
        b3.position(500,300);
        b3.class("wordButton");
        b3.mousePressed(()=>{
          b3.hide();
          storeAnswer(b3.value());
        })
        break;
      }
      case 4: {

        b4 = createButton(question[i], question[i]);
        b4.position(600,400);
        b4.class("wordButton");
        b4.mousePressed(()=>{
          b4.hide();
          storeAnswer(b4.value());
        })
        break;
      }
      case 5: {

        b5 = createButton(question[i], question[i]);
        b5.position(600,200);
        b5.class("wordButton");
        b5.mousePressed(()=>{
          b5.hide();
          storeAnswer(b5.value());
        })
        break;
      }
      case 6: {

        b6 = createButton(question[i], question[i]);
        b6.position(800,300);
        b6.class("wordButton");
        b6.mousePressed(()=>{
          b6.hide();
          storeAnswer(b6.value());
        })
        break;
      }
     
    } // end of Switch

   } // end of create buttons for loop

   ca = rightAnswer;
   
}//End of createQuestion