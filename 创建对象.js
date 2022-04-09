var obj = new Object();
obj.name =  '鸣人';
obj.sex = '男';
obj.age = 19;
obj.skill = function(){
    console.log('分身术')
}
console.log(obj);
console.log( obj.skill.toString());