class level_2e{
    l2eq =  ["Hope", "for", "the best", "but prepare", "for", "the" ,"worst"];
    l2eca = ["Hope", "for", "the best", "but prepare", "for", "the", "worst"];  
  constructor(){
    level2e_btn = createButton('Level - 2')
    ua = [];
 
    }
  hide(){
     level2e_btn.hide();
     level3e_btn.hide();
    level1e_btn.hide();
    level5e_btn.hide();
    level2_btn.hide();
     level3_btn.hide();
    level1_btn.hide();
    level4_btn.hide();
    level5_btn.hide();

    english.hide();
          tamil.hide();
   // this.greeting.hide();
     }
    
    display(){
    level2e_btn.position(windowWidth/3,windowHeight/3)
    level2e_btn.class("customButton");
    level2e_btn.mousePressed(()=>{
      level1e_btn.hide();
    level2e_btn.hide();
    level3e_btn.hide();
    level4e_btn.hide();
    level5e_btn.hide();
    level2_btn.hide();
     level3_btn.hide();
    level1_btn.hide();
    level4_btn.hide();
    level5_btn.hide();
    english.hide();
    tamil.hide();
      createQuestion(this.l2eq,this.l2eca);
    meaning2=""
    })
    
    }


}