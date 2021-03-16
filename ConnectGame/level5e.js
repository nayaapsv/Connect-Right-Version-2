class level_5e{
    l5eq =  ["Don't", "count","your", "chickens", "before" ,"they","hatch"];
    l5eca = ["Don't", "count","your", "chickens", "before" ,"they","hatch"]; 
        
  constructor(){
    level5e_btn = createButton('Level - 5')
    ua = [];
 
    }
  hide(){
     level2e_btn.hide();
     level3e_btn.hide();
    level1e_btn.hide();
    level4e_btn.hide();
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
    level5e_btn.position(windowWidth/3,windowHeight/1.7)
    level5e_btn.class("customButton");
    level5e_btn.mousePressed(()=>{
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
      createQuestion(this.l5eq,this.l5eca);
      meaning2 = "Your plans might not work out, so don't start thinking about what you'll do after you succeed. Wait until you've already succeeded, and then you can think about what to do next"
    })
    
    }


}