class level_1e{

    //j = 0;

    l1eq =  ["The","is","pen","mightier","sword","than","the"];
    l1eca = ["The","pen","is","mightier","than","the","sword"];

    constructor(){
    level1e_btn = createButton('Level - 1');
    
    ua = [];
    
    }
  hide(){
    level1e_btn.hide();
   //test_btn.hide();
    level2e_btn.hide();
    level3e_btn.hide();
   
    level2_btn.hide();
    level3_btn.hide();
   level1_btn.hide();
   level4_btn.hide();
   level5_btn.hide();

   english.hide();
          tamil.hide();

     }

     

  display(){
  level1e_btn.position(windowWidth/3,windowHeight/4)
 level1e_btn.class("customButton");
    
  level1e_btn.mousePressed(()=>{
    console.log("entered level 1");
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
    displayAnswer = "";
   
    //alert(l1q);
    
    createQuestion(this.l1eq,this.l1eca);
    //meaning2="எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றனஅதுபோல  உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது."
    meaning2="Trying to convince people with ideas and words is more effective than trying to force people to do what you want."
    })

  }
}