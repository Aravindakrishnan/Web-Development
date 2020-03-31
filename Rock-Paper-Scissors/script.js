var  you = 0;
var  pc = 0;
const imgs = ["https://i.ya-webdesign.com/images/rocking-clipart-transparent.png","https://www.pngkey.com/png/detail/346-3465683_file-newspaper-cover-svg-newspaper-cartoon-png.png","https://pngimage.net/wp-content/uploads/2018/05/cartoon-knife-png-4.png"];
var a;
function stone()
{
a = "stone";
hello();
}
function paper()
{
a = "paper";
hello();
}
function knife()
{
a = "knife";
hello();
}
function hello()
{
var point = document.getElementById('point').value;

gaming_status(0,2);
function gaming_status(st, lt)
{

st = Math.ceil(st);
lt = Math.floor(lt);
var computer1 = Math.floor(Math.random() * (lt - st + 1)) + st;
const comp = ['stone','paper','knife'];

console.log("Computer:%c"+comp[computer1],"color:red;");
if(a=="knife" && comp[computer1]=="knife"){
document.getElementById('Result').innerHTML = "Draw";
document.getElementById("yourimg").src = imgs[2];
document.getElementById('pcimg').src = imgs[2];
}
if(a=="stone" && comp[computer1]=="stone"){
document.getElementById('Result').innerHTML = "Draw";
document.getElementById("yourimg").src = imgs[0];
document.getElementById('pcimg').src = imgs[0];
}
if(a=="paper" && comp[computer1]=="paper"){
document.getElementById('Result').innerHTML = "Draw";
document.getElementById("yourimg").src = imgs[1];
document.getElementById('pcimg').src = imgs[1];
}
if(a=="stone" && comp[computer1]=="paper"){
document.getElementById('Result').innerHTML = "Pc Won";
document.getElementById("yourimg").src = imgs[0];
document.getElementById('pcimg').src = imgs[1];
pc=pc+1;
}
if(a=="stone" && comp[computer1]=="knife"){

document.getElementById('Result').innerHTML = "You Won";
document.getElementById("yourimg").src = imgs[0];
document.getElementById('pcimg').src = imgs[2];
you=you+1;
}
if(a=="knife" && comp[computer1]=="stone"){

document.getElementById('Result').innerHTML = "Pc Won";
document.getElementById("yourimg").src = imgs[2];
document.getElementById('pcimg').src = imgs[0];
pc=pc+1;
}
if(a=="knife" && comp[computer1]=="paper"){

document.getElementById('Result').innerHTML = "You Won";
document.getElementById("yourimg").src = imgs[2];
document.getElementById('pcimg').src = imgs[1];

you=you+1;
}
if(a=="paper" && comp[computer1]=="stone"){

document.getElementById('Result').innerHTML = "You Won";
document.getElementById("yourimg").src = imgs[1];
document.getElementById('pcimg').src = imgs[0];
you=you+1;
}
if(a=="paper" && comp[computer1]=="knife"){

document.getElementById('Result').innerHTML = "Pc Won";
document.getElementById("yourimg").src = imgs[1];
document.getElementById('pcimg').src = imgs[2];
pc=pc+1;
}
document.getElementById('you1').innerHTML = you;
console.log("%c Your point","color:blue;");
console.log(you);
if(you==point){
document.getElementById('who').innerHTML = "You Won";
//alert("You won");

document.write("<h1 style='color:blue;opacity:0.7;'>You Won</h1><p style='color:green;font-size:18px;'>Have a nice day!</p>");
}
if(pc == point){
document.getElementById('who').innerHTML = "PC Won";
//alert("Pc won");
document.write("<h1 style='color:red;opacity:0.7;'>Pc Won</h1><p style='color:red;font-size:18px;'>Try Again...</p>");
}

document.getElementById('pc1').innerHTML = pc;
console.log("%c Pc point","color:red;");
console.log(pc);
}
}