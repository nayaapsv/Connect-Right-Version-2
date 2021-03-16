class level_4{
    l4q =  ["அன்பும்", "அறனும்","உடைத்தாயின்", "இல்வாழ்க்கை", "பண்பும்" ,"பயனும்","அது"];
    l4ca = ["அன்பும்", "அறனும்","உடைத்தாயின்", "இல்வாழ்க்கை", "பண்பும்" ,"பயனும்","அது"];  
  constructor(){
    level4_btn = createButton('Level - 4')
    ua = [];
 
    }
  hide(){
     level2_btn.hide();
     level3_btn.hide();
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
    
   // this.greeting.hide();
     }
    
    display(){
    level4_btn.position(windowWidth/2,windowHeight/2)
    level4_btn.class("customButton");
    level4_btn.mousePressed(()=>{
      level1_btn.hide();
    level2_btn.hide();
    level3_btn.hide();
    level4_btn.hide();
    level5_btn.hide();
    level1e_btn.hide();
    level2e_btn.hide();
    level3e_btn.hide();
    level4e_btn.hide();
    level5e_btn.hide();
    english.hide();
    tamil.hide();
      createQuestion(this.l4q,this.l4ca);
      meaning2="."
    })
    
    }


}