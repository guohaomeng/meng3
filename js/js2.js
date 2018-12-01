//评分功能
function rec(){
    var score;
    score=prompt("打个分吧，满分100");
    if(score>100)
    {
        alert(score+",好给力的分数....");}
    else if(score>=75)
    {
        alert("Great！");}
    else if(score>=60)
    {
        alert(score+"(⊙﹏⊙)");}
    else if(score>=0)
    {
        alert("/(ㄒoㄒ)/~~");}
    else if(score=="false")
    {
        alert("为何是空空如也呢？");}
    
    else 
    {
        alert("(⊙﹏⊙)，0-100的纯数字哦");}
}

//定义"改变颜色"的函数
function meng1() {   
var mychar=document.getElementById("txt");
txt.style.color="red";
}
//定义"隐藏内容"的函数
function meng3(){
    var mychar=document.getElementById("txt");
    txt.style.display="none";
   
}


//定义"显示内容"的函数
function meng4(){
    var mychar=document.getElementById("txt");
    txt.style.display="block";
   
}

//定义"改变宽高"的函数
function meng2(){
var mychar=document.getElementById("txt");
txt.style.width="500px";
txt.style.height="500px";
}


//定义"取消设置"的函数
function meng5(){
var mychar=confirm("确定要取消设置吗？")
if (mychar==true){
txt.style="none"    
}

}
