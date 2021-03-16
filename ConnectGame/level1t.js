class level_1{

    //j = 0;

    l1q =  ["அகர","முதல","எழுத்தெல்லாம்","ஆதி","பகவன்","முதற்றே","உலகு"];
    l1ca = ["அகர","முதல","எழுத்தெல்லாம்","ஆதி","பகவன்","முதற்றே","உலகு"];

    constructor(){
    level1_btn = createButton('Level - 1');
    
    ua = [];
    
    }
  hide(){
    level1_btn.hide();
   test_btn.hide();
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
     }

     

  display(){
  level1_btn.position(windowWidth/2,windowHeight/4)
  
 level1_btn.class("customButton");
    
  level1_btn.mousePressed(()=>{
    console.log("entered level 1");
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
    displayAnswer = "";
   
    //alert(l1q);
    
    createQuestion(this.l1q,this.l1ca);
    meaning2="எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றனஅதுபோல  உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது."
    
    })

  }
}