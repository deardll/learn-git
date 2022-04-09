function getRandomIntInclusive(min, max) {//得到一个两数之间的随机整数，包括两个数在内
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
  }
var random = getRandomIntInclusive(1,50);
for (let i = 0; i < 10; i++) {
    var num = prompt('你来猜，请输入1~50之间的一个数字')
    if (num > random) {
        alert('你猜大了');
    }else if (num < random) {
        alert('你猜小了');
    }else{
        alert("猜对了");
        break;
    }
    
}