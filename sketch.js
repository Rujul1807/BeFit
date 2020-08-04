    var button,button1,button2, Explain;
    var home;
    var ageval=0;
    var heightval=0;
    var exercise;
    var exercise1;
    var exercise2;
    var ageinput,heightinput, enterAge, enterHeight;
    var getHeading,matter;
    var vegetables,Fruits;
    var veggeval=0;
    var fruitval=0;
    var Dryfruits,Junkfood;
    var NONVEG,BEVERAGES;
    var RICE,WHEAT; 
    var riceval=0;
    var wheatval=0;
    var nonvegval=0;
    var BEVERAGESval=0;
    var Dryfruitsval=0
    var Junkfoodval=0;
    var total=0;
    var HOME1;
    var test; 
    var donebutton;
    var Addbutton;
    var result;
    var Landing, Para;
    var veghead,fruhead,beverhead,nonhead,junkhead,richead,wheahead,dryhead;
    
    function setup(){
    result=createElement("h2");
    button=select('#btn');
    button.hide();
    Explain=select('#explain');
    Explain.hide();
    button1=select('#btn1');
    button1.hide();
    button2=select('#btn2');
    button2.hide();
    button2.mousePressed(exercisepage);
    ageinput=select('#age');
    heightinput=select('#height');
    enterAge = select('#EnterAge');
    enterHeight= select('#EnterHeight');
    enterAge.hide();
    enterHeight.hide();
    Befit=select('#befitheading');
    Befit.hide();
    HOME1=select('#home1');
    HOME1.hide();
    exercise=createElement("h3")
    exercise1=createElement("h3");
    exercise2=createElement("h3");
    donebutton=select('#done');
    donebutton.hide();
    //result=select('#resultelement');
    veghead=select('#veggehead');
    veghead.hide();
    fruhead=select('#fruithead');
    fruhead.hide();
    dryhead=select('#dryfruithead');
    dryhead.hide();
    nonhead=select('#nonveghead');
    nonhead.hide();
    wheahead=select('#wheathead');
    wheahead.hide();
    richead=select('#ricehead');
    richead.hide();
    beverhead=select('#beveragehead');
    beverhead.hide();
    junkhead=select('#junkfoodhead');
    junkhead.hide();
    test=createElement("h3");
    home=select('#homebutton');
    home.hide();
    Landing=select('#landing');
    Para=select('#para');

    //GetStarted page Function 
    Landing.mousePressed(()=>{
    Befit.show();
    button.show();
    Explain.show();
    Landing.hide();
    Para.hide();    
    })
    

    Addbutton=select('#add');
    Addbutton.hide();
    vegetables=select('#veggeis');
    Fruits=select('#fruits');
    Dryfruits=select('#dryfruits');
    Dryfruits.hide();
    Junkfood=select('#junkfood');
    Junkfood.hide();
    NONVEG=select('#non-veg');
    NONVEG.hide();
    RICE=select('#rice');
    RICE.hide();
    WHEAT=select('#wheat');
    WHEAT.hide();
    BEVERAGES=select('#beverages');
    BEVERAGES.hide();
    vegetables.hide();
    Fruits.hide();
    ageinput.hide();
    heightinput.hide();
    getHeading=select('#getheading');
    matter=select('#addmatter');
    getHeading.hide();
    matter.hide();

    button.mousePressed(()=>{
        enterAge.show();
        enterHeight.show();    
        home.show();
        Befit.hide();
        ageinput.show();
        heightinput.show();
        button.hide();
        button1.show();
        Explain.hide();

        home.mousePressed(()=>{
            Befit.show();
            button.show();
            button1.hide();
            Explain.show();
            getHeading.hide();
            matter.hide();
            home.hide();
            enterAge.hide();
            enterHeight.hide();
            ageinput.hide();
            heightinput.hide();
        })
    });

    button1.mousePressed(()=>{
        Befit.hide();
        button.hide();
        button1.hide();
        button2.hide();
        vegetables.show();
        Fruits.show();
        Dryfruits.show();
        BEVERAGES.show();
        Addbutton.show();
        donebutton.show();
        Addbutton.mousePressed(calculate);
        veghead.show();
        fruhead.show();
        dryhead.show();
        nonhead.show();
        wheahead.show();
        richead.show();
        beverhead.show();
        result.show();
        junkhead.show();
        RICE.show();
        WHEAT.show();
        Junkfood.show();
        NONVEG.show();
        HOME1.show();
        home.hide();
        matter.hide();
        enterAge.hide();
        enterHeight.hide();
        ageinput.hide();
        heightinput.hide();
       test.show();
        HOME1.mousePressed(()=>{
            Befit.show();
        button.show();
        Explain.show();
            vegetables.hide();
            Fruits.hide();
            Dryfruits.hide();
            BEVERAGES.hide();
            Addbutton.hide();
            veghead.hide();
            fruhead.hide();
            dryhead.hide();
            nonhead.hide();
            wheahead.hide();
            richead.hide();
            beverhead.hide();
            junkhead.hide();
            RICE.hide();
            WHEAT.hide();
            Junkfood.hide();
            NONVEG.hide();
            HOME1.hide();
        result.hide();
        donebutton.hide();
        exercise.hide();
        exercise2.hide();
        exercise1.hide();
        test.hide();
        })
        donebutton.mousePressed(exercisepage);
    })
    }


    function draw(){
        drawSprites();
    }

    function calculate(){
        Dryfruitsval=int(Dryfruits.value()*4);
        Junkfoodval=int(Junkfood.value()*300);
        BEVERAGESval=int(BEVERAGES.value()*2);
        nonvegval=int(NONVEG.value());
        riceval=int(RICE.value()*200);
        wheatval=int(WHEAT.value()*4);
        veggeval=int(vegetables.value()*70);
        fruitval=int(Fruits.value()*65);
        ageval=int(ageinput.value());
        heightval=int(heightinput.value());
    total=Dryfruitsval+veggeval+fruitval+BEVERAGESval+nonvegval+wheatval+riceval+Junkfoodval;
    result.html("Calories eaten are ="+total+"cals");
    result.position(10,340);

    if(total<1900&&ageval<=10&&heightval<=140){
        test.html( "calories that needs to be burnt="+0+"cals");
        test.position(10,370);

    }
    if( total >= 1900&& ageval<=10&& heightval<=140){
    test.html("caloriesthat needs to be burnt="+(total-1900)+"cals");
    test.position(10,370);
    
    }


    }
    function exercisepage(){
        exercise.show();
        exercise1.show();
        exercise2.show();
      
        button.hide();
        button1.hide();
        button2.hide();
        vegetables.hide();
        Fruits.hide();
        Dryfruits.hide();
        BEVERAGES.hide();
        Addbutton.hide();
        donebutton.hide();
        veghead.hide();
        fruhead.hide();
        dryhead.hide();
        nonhead.hide();
        wheahead.hide();
        richead.hide();
        beverhead.hide();
        result.hide();
        junkhead.hide();
        RICE.hide();
        WHEAT.hide();
        Junkfood.hide();
        NONVEG.hide();
        HOME1.show();
        test.hide();
        if((total-1900)>=200){
            exercise.html("Skipping-100 times OR");
            exercise.position(50,50);
            exercise1.html("Dancing-20 mins OR");
            exercise1.position(50,80);
            exercise2.html("Swimming- 30 mins");
            exercise2.position(50,110);
        // exercise1.html("")
        }
    if((total-1900)<200){
        exercise.html("Brisk Walking- 30 mins OR");
        exercise.position(50,50);
        exercise1.html("Yoga - 30 mins OR");
        exercise1.position(50,80);
        exercise2.html("Jogging - 20 mins");
        exercise2.position(50,110);
    } 

    }







