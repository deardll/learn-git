function px(a) {
    for (let i = 0; i < a.length-1; i++) { // 需要调换的次数
        for (let j = 0; j < a.length-i-1; j++) { //每一趟需要交换的次数
            if (a[j] > a[j+1]) { //比对冒泡
                var b;
                b = a[j];   
                a[j] = a[j+1];
                a[j+1] = b;
            }
        } 
    }
    return a;
}

var arr = [65,4,78,55,33,23];
console.log(px(arr));