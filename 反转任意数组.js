function fz(a) {
    var b = [];
    for (let j = a.length - 1; j >= 0; j--) { //3 2 1 0
        b[b.length] = a[j];
    }
    return b;
}
var arr = ['ss', 'fff', 'ddd', 'gvv'];
console.log(fz(arr)); 