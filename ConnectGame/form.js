class Form {

    constructor() {
     
      this.tamilplay = createButton("PLAY").style('font-size','30px');
    this.tamilplay.class("customButton");
    
      this.greeting = createElement('h1');
      this.instruction1 = createElement('h2');
      
      this.greeting2= createElement('h1')
     
   
    }
    hide(){
      this.greeting.hide();
      this.tamilplay.hide();
      this.name.hide();
      this.englishplay.hide();
      
     // this.title.hide();
    }
  
    display(){
     
      
      this.tamilplay.position(750,500);

     
     this.tamilplay.mousePressed(()=>{

      english = createInput('English').style('width','200px').attribute('readonly', true);
      tamil = createInput('Tamil').style('width','200px').attribute('readonly', true);
    
    english.class("customInput");
    tamil.class("customInput");
      
    english.position(windowWidth/3,windowHeight/5);
    tamil.position(windowWidth/2,windowHeight/5);
    
      
        this.tamilplay.hide();
        swal.getState(swal.overlay);
        swal({
          title: "Game Instructions :",
          text: instruction2,
          icon: "success",
          button: "I am Ready for the game",
          
    })
      
    level1 = new level_1();
    level1.display();
    level2 = new level_2();
    level2.display();
    level3 = new level_3();
    level3.display();
    level4 = new level_4();
    level4.display();
    level5 = new level_5();
    level5.display();

    level1e = new level_1e();
    level1e.display();
    level2e = new level_2e();
    level2e.display();
    level3e = new level_3e();
    level3e.display();
    level4e = new level_4e();
    level4e.display();
    level5e = new level_5e();
    level5e.display();
  
    
    
      });
      
  }
}
