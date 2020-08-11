var button,button1,button2, Explain;
var home;
var ageval=0;
var heightval=0;
var exercise, exercise1, exercise2, exercise3, exercise4,exercise5, exercise6, exercise7;
var exerciseheadline;
var ageinput,heightinput, enterAge, enterHeight;
var getHeading,matter;
var vegetables,Fruits;
var veggeval=0;
var fruitval=0;
var Dryfruits,Junkfood;
var NONVEG,BEVERAGES;
var WHEAT; 
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
var Pulses;
var pulsesval=0;
var veghead,fruhead,beverhead,nonhead,junkhead,wheahead,dryhead,pulseshead;
var excalkids=0, excaltween=0, excalteen=0,excaladults1=0, excaladults2=0, excaladults3=0, excalsenior=0;
var skip=0, swim=0, cycle=0, yoga=0, run=0, jog=0, brisk=0, dance=0;
var category;





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
Pulses=select('#pulses');
Pulses.hide();
exercise=createElement("h4")
exercise1=createElement("h4");
exercise2=createElement("h4");
exercise3=createElement("h4");
exercise4=createElement("h4");
exercise5=createElement("h4");
exercise6=createElement("h4");
exercise7=createElement("h4");
donebutton=select('#done');
donebutton.hide();
//result=select('#resultelement');
veghead=select('#veggehead');
pulseshead=select('#pulsehead');
pulseshead.hide();
veghead.hide();
fruhead=select('#fruithead');
fruhead.hide();
dryhead=select('#dryfruithead');
dryhead.hide();
nonhead=select('#nonveghead');
nonhead.hide();
wheahead=select('#wheathead');
wheahead.hide();
beverhead=select('#beveragehead');
beverhead.hide();
junkhead=select('#junkfoodhead');
junkhead.hide();
test=createElement("h3");
home=select('#homebutton');
home.hide();
Landing=select('#landing');
Para=select('#para');
exerciseheadline=createElement("h3");
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
WHEAT=select('#carbs');
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
//DEFINING CALORIES FOR PARTICULAR AGE
excalkids = total-1900;
excaltween = total - 2400;
excalteen = total-2600;
excaladults1 = total-2800;
excaladults2 = total-2600;
excaladults3 = total-1600;
excalsenior = total-1400;

Befit.hide();
button.hide();
button1.hide();
button2.hide();
Pulses.show();
vegetables.show();
Fruits.show();
Dryfruits.show();
BEVERAGES.show();
Addbutton.show();
donebutton.show();
Addbutton.mousePressed(calculate);
veghead.show();
pulseshead.show();
fruhead.show();
dryhead.show();
nonhead.show();
wheahead.show();
beverhead.show();
result.show();
junkhead.show();
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
Pulses.hide();
Fruits.hide();
Dryfruits.hide();
BEVERAGES.hide();
Addbutton.hide();
veghead.hide();
pulseshead.hide();
fruhead.hide();
dryhead.hide();
nonhead.hide();
wheahead.hide();
beverhead.hide();
junkhead.hide();
WHEAT.hide();
Junkfood.hide();
NONVEG.hide();
HOME1.hide();
result.hide();
donebutton.hide();
exercise.hide();
exercise1.hide();
exercise2.hide();
exercise3.hide();
exercise4.hide();
exercise5.hide();
exercise6.hide();
exercise7.hide();

test.hide();
exerciseheadline.hide();
})
donebutton.mousePressed(exercisepage);
})
}


function draw(){
drawSprites();
}

function calculate(){
    //DEFINING CALORIES FOR PARTICULAR AGE
excalkids = total-1900;
excaltween = total - 2400;
excalteen = total-2600;
excaladults1 = total-2800;
excaladults2 = total-2600;
excaladults3 = total-1600;
excalsenior = total-1400;

    Dryfruitsval=int(Dryfruits.value()*4);
    Junkfoodval=int(Junkfood.value()*300);
    BEVERAGESval=int(BEVERAGES.value()*2);
    nonvegval=int(NONVEG.value()*220);
    wheatval=int(WHEAT.value()*4);
    pulsesval=int(Pulses.value()*104);
    veggeval=int(vegetables.value()*70);
    fruitval=int(Fruits.value()*65);
    ageval=int(ageinput.value());
    heightval=int(heightinput.value());

    if(Dryfruitsval!==null||Junkfoodval!==null|| BEVERAGESval!==null  || nonvegval!==null 
    || wheatval!==null  ||veggeval!==null||fruitval!==null||pulsesval!=null){

        total=Dryfruitsval+veggeval+fruitval+BEVERAGESval+nonvegval+wheatval+Junkfoodval+pulsesval;
        result.html("Calorie intake:"+total+"cals");
        result.position(10,340);

        if(total < 1900 && ageval <= 10 && heightval <= 200){
            test.html( "You need to burn: "+0+" cals");
            test.position(10,370);
        }
        else if( total >= 1900  && ageval<=10 && heightval >=140 && heightval <= 200){
            test.html("You need to burn: "+ excalkids +"cals");
            test.position(10,370);
        }
      
        else if(total < 2400 && ageval>10 && ageval <= 14){
            test.html( "You need to burn: "+0+" cals");
            test.position(10,370);
        }
        else if(total>=2400 &&  ageval>10 && ageval <= 14 ){
            test.html("You need to burn: "+ (total-2400)+" cals");
            test.position(10,370); 
        }

        else if(total < 2600 && ageval>14 && ageval <= 18 ){
            test.html( "You need to burn: "+0+"cals");
            test.position(10,370);
        }
        else if(total>= 2600 && ageval>14 && ageval <= 18 ){
            test.html("You need to burn: "+ (total-2600)+" cals");
            test.position(10,370); 
        }
        else if(total >= 2800 && ageval >18 && ageval <=25 ){
            test.html("You need to burn: "+(total-2800) +" cals");
            test.position(10,370); 
        }
        else if(total < 2800 && ageval>18 && ageval <= 25 ){
            test.html( "You need to burn: "+0+"cals");
            test.position(10,370);
        }
               
        else if(total<2600 && ageval>25 && ageval<=35){
            test.html( "You need to burn: "+0+"cals");
            test.position(10,370);
        }
        else if(total>=2600 && ageval>25 && ageval<=35 ){
            test.html("You need to burn: "+ (total-2600) +"cals");
            test.position(10,370); 
        }
        else if(total<1600 && ageval>35 && ageval<50){
            test.html( "You need to burn: "+0+"cals");
            test.position(10,370);
        }
        else if(total>=1600 && ageval>35 && ageval<50 ){
            test.html("You need to burn: "+(total-1600)+"cals");
            test.position(10,370); 
        }
        else if(total<1400 && ageval>50){
            test.html( "You need to burn: "+0+"cals");
            test.position(10,370);
        }
        else if(total>=1400 && ageval>50 ){
            test.html("You need to burn: "+ (total-1400) +"cals");
            test.position(10,370); 
        }
       
    }
}
function exercisepage(){
//DEFINING CALORIES FOR PARTICULAR AGE
excalkids = total-1900;
excaltween = total - 2400;
excalteen = total-2600;
excaladults1 = total-2800;
excaladults2 = total-2600;
excaladults3 = total-1600;
excalsenior = total-1400;

exercise.show();
exercise1.show();
exercise2.show();
exercise3.show();
exercise4.show();
exercise5.show();
exercise6.show();
exercise7.show();
exerciseheadline.show();
button.hide();
button1.hide();
button2.hide();
vegetables.hide();
Pulses.hide();
Fruits.hide();
Dryfruits.hide();
BEVERAGES.hide();
Addbutton.hide();
donebutton.hide();
veghead.hide();
pulseshead.hide();
fruhead.hide();
dryhead.hide();
nonhead.hide();
wheahead.hide();
beverhead.hide();
result.hide();
junkhead.hide();

WHEAT.hide();
Junkfood.hide();
NONVEG.hide();
HOME1.show();
test.hide();


if (ageval<=10) {category="kids"}
if(ageval>10 && ageval <=14) { category = "tween"}
if(ageval>14 && ageval <=18) { category = "teen"}
if(ageval>18 && ageval <=25) { category = "adult1"}
if(ageval>25 && ageval <=35) { category = "adult2"}
if(ageval>35 && ageval <=50) { category = "adult3"}
if(ageval>50) { category = "senior"}


switch (category) {

case "kids":
{
    if(excalkids <= 200 )
    {
    skip= 50;
    dance=10;
    swim = 10;
    cycle=10;
    yoga = 30;
    run = 10;
    jog=30;
    brisk=20;
    }

    if(excalkids > 200 && excalkids <=500)
    {
    skip= 100;
    dance=30;
    swim = 30;
    cycle=30;
    yoga = 30;
    run = 30;
    jog=30;
    brisk=30;
    }

    if(excalkids > 500 && excalkids <=800)
    {
    skip= 100;
    dance=20;
    swim = 30;
    cycle=45;
    yoga = 45;
    run = 45;
    jog=45;
    brisk=45;
    }
    if(excalkids > 800)
    {
    skip= 500;
    dance=45;
    swim = 45;
    cycle=60;
    yoga = 60;
    run = 45;
    jog=45;
    brisk=60;
    }
}
    break;

case "tween":
    if(excaltween <= 200 )
    {
    skip= 100;
    dance=20;
    swim = 20;
    cycle=20;
    yoga = 30;
    run = 20;
    jog=20;
    brisk=20;
    }

    if(excaltween > 200 && excaltween <=500)
    {
    skip= 200;
    dance=30;
    swim = 30;
    cycle=30;
    yoga = 45;
    run = 30;
    jog=30;
    brisk=30;
    }

    if(excaltween > 500 && excaltween <=800)
    {
    skip= 300;
    dance=45;
    swim = 45;
    cycle=45;
    yoga = 60;
    run = 30;
    jog=45;
    brisk=45;
    }
    if(excaltween > 800)
    {
    skip= 400;
    dance=60;
    swim = 60;
    cycle=60;
    yoga = 90;
    run = 40;
    jog=60;
    brisk=60;
    }
break;

case "teen":
    if(excalteen <= 200 )
    {
    skip= 100;
    dance=20;
    swim = 20;
    cycle=20;
    yoga = 30;
    run = 20;
    jog=20;
    brisk=20;
    }

    if(excalteen > 200 && excalteen <=500)
    {
    skip= 200;
    dance=30;
    swim = 30;
    cycle=30;
    yoga = 45;
    run = 30;
    jog=30;
    brisk=30;
    }

    if(excalteen > 500 && excalteen <=800)
    { 
    skip= 300;
    dance=45;
    swim = 45;
    cycle=45;
    yoga = 60;
    run = 30;
    jog=45;
    brisk=45;
    }
    if(excalteen > 800)
    {
    skip= 400;
    dance=60;
    swim = 60;
    cycle=60;
    yoga = 90;
    run = 40;
    jog=60;
    brisk=60;
    }
    break;

case "adult1":
    if(excaladults1 <= 200 )
    {
    skip= 100;
    dance=20;
    swim = 20;
    cycle=20;
    yoga = 30;
    run = 20;
    jog=30;
    brisk=20;
    }

    if(excaladults1 > 200 && excaladults1 <=500)
    {
    skip= 200;
    dance=30;
    swim = 30;
    cycle=30;
    yoga = 45;
    run = 30;
    jog=45;
    brisk=30;
    }

    if(excaladults1 > 500 && excaladults1 <=800)
    {
    skip= 300;
    dance=45;
    swim = 45;
    cycle=30;
    yoga = 60;
    run = 30;
    jog=60;
    brisk=45;
    }
    if(excaladults1 > 800)
    {
    skip= 400;
    dance=60;
    swim = 30;
    cycle=60;
    yoga = 90;
    run = 40;
    jog=90;
    brisk=60;
    }
    break;

case "adult2":
    if(excaladults2 <= 200 )
    {
    skip= 100;
    dance=20;
    swim = 20;
    cycle=10;
    yoga = 30;
    run = 10;
    jog=30;
    brisk=20;
    }

    if(excaladults2 > 200 && excaladults2 <=500)
    {
    skip= 200;
    dance=30;
    swim = 30;
    cycle=30;
    yoga = 45;
    run = 30;
    jog= 45;
    brisk=30;
    }

    if(excaladults2 > 500 && excaladults2 <=800)
    {
    skip= 300;
    dance=45;
    swim = 45;
    cycle=45;
    yoga = 60;
    run = 30;
    jog=45;
    brisk =45;
    }
    if(excaladults2 > 800)
    {
    skip= 400;
    dance=60;
    swim = 60;
    cycle=60;
    yoga = 90;
    run = 40;
    jog=60;
    brisk=60;
    }
break;

case "adult3":
    if(excaladults3 <= 200 )
    {
    skip= 100;
    dance= 20;
    swim = 20;
    cycle = 30;
    yoga = 30;
    run = 20;
    jog = 20;
    brisk= 20;
    }

    if(excaladults3 > 200 && excaladults3 <=500)
    {
    skip= 200;
    dance= 30;
    swim = 30;
    cycle= 45;
    yoga = 45;
    run = 30;
    jog= 30;
    brisk= 30;
    }

    if(excaladults3 > 500 && excaladults3 <=800)
    {
    skip= 300;
    dance= 45;
    swim = 45;
    cycle= 45;
    yoga = 45;
    run = 30;
    jog= 30;
    brisk= 45;
    }
    if(excaladults3 > 800)
    {
    skip= 400;
    dance= 60;
    swim = 60;
    cycle= 60;
    yoga = 60;
    run = 40;
    jog= 45;
    brisk= 60;
    }
    break;

case "senior":
    if(excalsenior <= 200 )
    {
        skip= 100;
        dance= 20;
        swim = 20;
        cycle = 30;
        yoga = 30;
        run = 20;
        jog = 20;
        brisk= 20;
    }

    if(excalsenior > 200 && excalsenior <=500)
    {
        skip= 200;
        dance= 20;
        swim = 30;
        cycle= 40;
        yoga = 30;
        run = 30;
        jog= 30;
        brisk= 30;
    }

    if(excalsenior > 500 && excalsenior <=800)
    {
        skip= 300;
        dance= 30;
        swim = 30;
        cycle= 40;
        yoga = 45;
        run = 30;
        jog= 30;
        brisk= 45;
    }
    if(excalsenior > 800)
    {
        skip= 400;
        dance= 40;
        swim = 45;
        cycle= 60;
        yoga = 60;
        run = 40;
        jog= 45;
        brisk= 60;
    }
    break;


}

/*Exercise Printing in HTML*/

exerciseheadline.html("Pick any one of the below exercises:");
exerciseheadline.position(50,70);
exercise.html("Skipping - " +skip+ " times OR");
exercise.position(70,90);
exercise1.html("Dancing  - "+dance+ " mins OR");
exercise1.position(70,110);
exercise2.html("Swimming - " + swim+ " mins OR");
exercise2.position(70,130);
exercise3.html("Cycling - " + cycle+ " mins OR");
exercise3.position(70,150);
exercise4.html("Yoga     - " + yoga+ " mins OR");
exercise4.position(70,170);
exercise5.html("Running  - " + run+ " mins OR");
exercise5.position(70,190);
exercise6.html("Jogging  - " + jog+ " mins OR");
exercise6.position(70,210);
exercise7.html("Walking  - " + brisk+ " mins");
exercise7.position(70,230);


}







