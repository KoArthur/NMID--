function $$(id) {
    return document.getElementById(id);
}

function register() {
    //1.创建对象
    let xhr = new XMLHttpRequest();
    //2.初始化，设置请求方法和url
    xhr.open('GET', 'http://localhost:8000/server?a=100&b=200');
    //3.发送
    xhr.send();
    //4.事件绑定
    //on when 当....时候
    //readystate是xhr对象中的属性，表示状态0 1 2 3 4
    //change改变
    xhr.onreadystatechange = function () {
        //判断
        if (xhr.readyState === 4) {
            //判断响应状态码 200 404 403 401 500
            //2xx 成功
            if (xhr.status >= 200 && xhr.status < 300) {
                //处理结果 行 头 空头 体
                //1. 响应行
                console.log(xhr.status); //状态码
                console.log(xhr.statusText); //状态字符串
                console.log(xhr.getAllResponseHeaders()); //所有响应头
                console.log(xhr.response); //响应体
            } else {

            }
        }
    }
}

window.onload = function () {
    let oAge = $$("age");
    oAge.onclick = function () {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:8000/server');
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    oAge.value = xhr.response;
                }
            }
        }
    }
}