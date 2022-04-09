var str = 'abcoefoxyozzopp';
var obj = {};
for (let i = 0; i < str.length; i++) {
    //把str中的每个字符存储给对象，如果对象没有该属性就=1.如果存在就+1;
    if (obj[str[i]] ) { //obj[str[i]]的[]中可以是变量，obj.str[i]无法设置未定义的属性（变量），但可以添加确定的对象属性名和属性值
        obj[str[i]]++ 
    }else{
        obj[str[i]] = 1;
    }
    console.log(obj);
}
var max = 0;
var strr = ''
//遍历对象，找到对象中出现最多的属性名和属性值
for (var key in obj) { 
    //key得到的是属性名
    //obj[key]得到的是属性值
    console.log(key);
    if(obj[key] > max){
        max = obj[key];
        strr = key;
    }
}
console.log('出现最多的次数是'+strr +'出现最多的次数是'+max);