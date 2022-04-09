var ff = prompt("使用计算器：\n1.加法：\n2.减法：\n3.乘法；\n4.除法：\n5.退出；\n请输入您的选项：");

if (ff == 1) {
    var a = prompt('请输入一个数值')
    var b = prompt('请输入一个数值')
    alert(parseInt(a)+parseInt(b));

}
if (ff == 2) {
    var a = prompt('请输入一个数值')
    var b = prompt('请输入一个数值')
    alert(parseInt(a)-parseInt(b));
}
if (ff == 3) {
    var a = prompt('请输入一个数值')
    var b = prompt('请输入一个数值')
    alert(parseInt(a)*parseInt(b));
}
if (ff == 4) {
    var a = prompt('请输入一个数值')
    var b = prompt('请输入一个数值')
    alert(parseInt(a)/parseInt(b));
}
if (ff == 5) {
    alert('已退出计算')
}