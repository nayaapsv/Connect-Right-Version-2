class level_5{
    l5q =  ["தியாழினி", "குழலினி","மக்கள்", "மழலைச்சொல்", "தென்பதம்" ,"தவர்","கேளா"];
    l5ca = ["குழலினி", "தியாழினி","தென்பதம்", "மக்கள்", "மழலைச்சொல்" ,"கேளா","தவர்"]; 
        
  constructor(){
    level5_btn = createButton('Level - 5')
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
    level5_btn.position(windowWidth/2,windowHeight/1.7)
    level5_btn.class("customButton");
    level5_btn.mousePressed(()=>{
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
      createQuestion(this.l5q,this.l5ca);
      meaning2="."
    })
    
    }


}