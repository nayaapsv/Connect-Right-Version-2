class level_4e{
    l4eq =  ["You", "a book", "by" ,"its"," cover", "can't","judge"];
    l4eca = ["You", "can't","judge", "a book", "by" ,"its"," cover"];  
        
  constructor(){
    level4e_btn = createButton('Level - 4')
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
    level4e_btn.position(windowWidth/3,windowHeight/2)
    level4e_btn.class("customButton");
    level4e_btn.mousePressed(()=>{
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
    createQuestion(this.l4eq,this.l4eca);
    meaning2="Things sometimes look different than they really are. A restaurant that looks old and small might have amazing food"
    })
    
    }


}