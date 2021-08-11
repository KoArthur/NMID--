//1.引入express
const {
    request,
    response
} = require('express');
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头，运行跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('HELLO EXPRESS');
});
app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('HELLO EXPRESS');
});
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    let data = {
        name: 'julia'
    };
    let str = JSON.stringify(data);
    response.send(str);
})
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send('delay');
    }, 3000);
})
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
})