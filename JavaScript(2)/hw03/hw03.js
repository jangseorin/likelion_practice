const btnDecrease=document.getElementById("decrease");
const btnReset=document.getElementById("reset");
const btnIncrease=document.getElementById("increase");
const number=document.getElementById("result");
var count = 0;

btnDecrease.onclick=function(){
    count=count-1;
    number.textContent=count;
}
btnIncrease.onclick=function(){
    count=count+1;
    number.textContent=count;
}
btnReset.onclick=function(){
    count=0;
    number.textContent=count;
}