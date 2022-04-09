var arr = ['red','blue','red','green','pink','red']

var index = arr.indexOf('red'); //0
var num=0;
while(index !== -1){
    num++;
    console.log(index);
    index = arr.indexOf('red',index + 1); 
}
console.log(num);