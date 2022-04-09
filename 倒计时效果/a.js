var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var inputTime = +new Date('2022-3-10 20:00:00') //即将到来的时间
function djs() {
    var nowTime = +new Date();//当下
     times = (inputTime-nowTime)/1000;
    var h = parseInt( times/60/60 )//小时
    h = h < 10 ?  '0'+ h : h;
    hour.innerHTML = h;
    var m = parseInt( times/60%60 )//分
    m = m < 10 ?  '0'+ m : m;
    minute.innerHTML = m;
    var s = parseInt( times%60 )//秒
    s = s < 10 ?  '0'+ s : s;
    second.innerHTML = s;
}
djs(); //防止页面空白，先调用一次
setInterval(djs,1000);

