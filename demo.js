/*
//var  声明一个变量
var a=1
var b=2
console.log(a+b)
*/
//注释
// var c=10;
// console.log(c)
// var a=10;b="20";d=true;e=10.01;
// console.log(typeof a,typeof b,typeof d,typeof e)
// var  age=prompt("请输入您的年龄",18)
// console.log(age,typeof age)
// console.log((127+45*78)/(34+543)-9*(324-34))
// var sheshidu=parseFloat(prompt("请输入摄氏度"))
// var huashidu=9/5*sheshidu+32
// alert("您好,你的华氏度是"+huashidu +"\n给钱!")
// var num=prompt("请输入一个数字");
// var flag_5=num%5;
// var flag_6=num%6;
// if (flag_5==0 && flag_6==0){
//     alert("5和6整除")
// }else if (flag_5==0 &&flag_6!=0){
//     alert("5除,6不能")
// }else if (flag_5 !=0 && flag_6 ==0){
//     alert("5不能,6能")
// }else if (flag_5 !=0 && flag_6 !=0){
//     alert("都不能")
// }
/*九九乘法表
for (var i=1;i<=9;i++){
    var chart="";
    for (var j=1;j<=i;j++){
        chart+=(`${j}*${i}=${j*i}\t`)
    }
    console.log(chart)
}*/
// JavaScript
// for (var i=100;i<=999;i++){
//     var a=Math.pow(i%100%10,3);
//     var b=Math.pow(Math.floor(i/10)%10,3);
//     var c=Math.pow(Math.floor(i/100),3);
//     if  (i==a+b+c){
//         console.log("水仙花数有:",i)
//     }
// }
// function sum(a,b) {
//     console.log(arguments[0]);
//     console.log(a+b);
// }
// sum(3,4);
function yueshu(m) {
    var count=0;
    for (var i=1;i<=m;i++){
        if(m%i==0){
            count++;
        }
    }
    return count
}

function isZhishu(n) {
    if (yueshu(n)==2){
        return true
    }else {
        return false
    }
}
function sumZhiShu(i,j) {
    sum = 0
    for (var i = i; i <= j; i++) {
        if (isZhishu(i)) {
            sum += i
        } else {
            continue
        }
    }
    return sum
}
console.log(sumZhiShu(1,100))