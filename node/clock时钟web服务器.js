//1.导入模块
const fs = require('fs');
const path = require('path');
const http = require('http');

//2.创建服务器
const server = http.createServer();

//监听服务器的request事件
server.on('request', function (req, res) {

    const url = req.url;
    let fpath = '';

    //3.将资源的请求url地址映射唯文件的存放路径
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock' + url)
    }

    //4.读取文件内容并响应给客户端
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) {
            return res.end('404')
        }else{
            res.end(dataStr)
        }
    })

})

//启动服务器
server.listen(80, function () {
    console.log('server running at http://127.0.0.1');
})

