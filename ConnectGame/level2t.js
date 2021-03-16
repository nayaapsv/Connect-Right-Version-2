class level_2{
    l2q =  ["விழுப்பந்","தரலான்","ஒழுக்கம்","ஒழுக்கம்","ஓம்பப்","உயிரினும்","படும்"];
    l2ca = ["ஒழுக்கம்","விழுப்பந்","தரலான்","ஒழுக்கம்","உயிரினும்","ஓம்பப்","படும்"];  
  constructor(){
    level2_btn = createButton('Level - 2')
    ua = [];
 
    }
  hide(){
     level2_btn.hide();
     level3_btn.hide();
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
    level2_btn.position(windowWidth/2,windowHeight/3)
    level2_btn.class("customButton");
    level2_btn.mousePressed(()=>{
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
      createQuestion(this.l2q,this.l2ca);
      meaning2="ஒழுக்கமே எல்லார்க்கும் மேன்மையைத் தருவதாக இருப்பதால், அந்த ஒழுக்கமே உயிரை விடச் சிறந்ததாகப் போற்றப்படும்."
    })
    
    }


}