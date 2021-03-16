class level_3{
  l3q =  ["இனிய","உளவாக","இன்னாத","கூறல்"," கனிஇருப்பக்","காய்கவர்ந்","தற்று"];
  l3ca = ["இனிய","உளவாக","இன்னாத","கூறல்"," கனிஇருப்பக்","காய்கவர்ந்","தற்று"];    
  constructor(){
    level3_btn = createButton('Level - 3');
    ua = [];
 
    }
  hide(){
    level3_btn.hide();
    level2_btn.hide();
    level1_btn.hide();
    level5_btn.hide();
    level1e_btn.hide();
    level2e_btn.hide();
    level3e_btn.hide();
    level4e_btn.hide();
    level5e_btn.hide();
    english.hide();
          tamil.hide();
   // this.greeting.hide();
     }
    
    display(){
    level3_btn.position(windowWidth/2,windowHeight/2.4)
    level3_btn.class("customButton");
    level3_btn.mousePressed(()=>{
   
    level3_btn.hide();
    level2_btn.hide();
    level1_btn.hide();
    level4_btn.hide();
    level5_btn.hide();
    level1e_btn.hide();
    level2e_btn.hide();
    level3e_btn.hide();
    level4e_btn.hide();
    level5e_btn.hide();
    english.hide();
    tamil.hide();
    createQuestion(this.l3q,this.l3ca);
    meaning2="."
    })

  }
}