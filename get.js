var on,off;
var total;
var val,val1;
var button;
var result;
var plus;
function setup(){
createCanvas(800,800);
on=createInput("");
on.position(100,100);
plus=createElement("h1");
plus.html("+");
plus.position(277,69);
off=createInput("");
off.position(300,100);
button=createButton("Add");
button.position(460,150);
button.mousePressed(add);
result=createInput("");
result.position(500,100);


}
function draw(){
    
    drawSprites();
}
function add(){
val=int(on.value());
val1=int(off.value());
total=val+val1;
result.value(total);

    

}
