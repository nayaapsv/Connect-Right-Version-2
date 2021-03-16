class level_3e{
  l3eq =  ["Don't","the","hand","bite","that","feeds","you"];
  l3eca = ["Don't","bite","the","hand","that","feeds","you"];   
  
  constructor(){
    level3e_btn = createButton('Level - 3');
    ua = [];
 
    }
  hide(){
    level3e_btn.hide();
    level2e_btn.hide();
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
    level3e_btn.position(windowWidth/3,windowHeight/2.4)
    level3e_btn.class("customButton");
    level3e_btn.mousePressed(()=>{
   
    level3e_btn.hide();
    level2e_btn.hide();
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
    createQuestion(this.l3eq,this.l3eca);
    meaning2="If someone's paying you or helping you out, you have to be careful not to make them angry or say bad things about them. "
    })

  }
}