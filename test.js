class test{

  tq = ['c','a','b','d','e','f','g'];
  tca = ['a','b','c','d','e','f','g'];


    constructor(){
    test_btn = createButton('TEST','test');
    ua = [];
    
}

  hide(){
    level1_btn.hide();
    level2_btn.hide();
    level3_btn.hide();
  test_btn.hide();
     }

  display(){
  test_btn.position(displayWidth/2 - 70, displayHeight/1.5)
//alert("you are in test display");
    test_btn.mousePressed(()=>{
    console.log("entered level 1");
    level1_btn.hide();
    level2_btn.hide();
    level3_btn.hide();
    test_btn.hide();

   createQuestion(this.tq,this.tca);


    })
  }
 
  
}