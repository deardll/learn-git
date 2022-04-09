var str = 'abaasdffggghhjjkkgfddsssss3444343'
//字符串长度
console.log(str.length);
//取出指定位置的字符，如0，3，5，9等
console.log(str.slice(0,1)); //从0开始截图到1结束
console.log(str.slice(3,4));
console.log(str.slice(5,6));
console.log(str.slice(9,10));
//替换指定字符，如：g替换为22，ss替换为b等操作方法
console.log(str.replace('g','22'));
console.log(str.replace('ss','b'));
//截取指定开始位置到结束位置的字符串，如：取得1-5的字符串
console.log(str.slice(1,5));
//找出以上字符串中出现次数最多的字符和出现的次数
var obj = {};
for (let i = 0; i < str.length; i++) {
    if(obj[str[i]]){//如果存在
        obj[str[i]]++
    }else{
        obj[str[i]] = 1
    }
}
console.log(obj);
var s='';
var max=0;
for (var key in obj) {
    //console.log(obj[key]);
    if(obj[key] > max){
        max=obj[key];
        s = key;
    }
}
console.log(max);
console.log(s);