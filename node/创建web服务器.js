//1.导入http模块
const http = require('http')
//2.创建web服务器实例
const server = http.createServer();
//3.为服务器实例绑定request事件，监听客户端的请求。
server.on('request',function(req,res){
    //req是请求对象，它包含了与客户端相关的数据和属性，例如：

    //req.url是客户端请求的url地址
    const url =req.url;

    //req.method是客户端的method请求类型，默认get
    const method = req.method

    //res 是相应对象，它包含了与服务器相关的数据和属性，例如：
    //要发送到客户端的字符串
    const str =`您请求的地址是 ${url},请求的类型为 ${method}`;
    console.log(str);

    //调用res.setHeader()方法，设置Content-Type响应头，解决中文乱码的问题
    res.setHeader('Content-Type','text/html; charset=utf-8');
    
    //res.end()方法的作用：
    //向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str);


})
//4.启动服务器
server.listen(80,function () {
    console.log('server running at http://127.0.0.1');
})