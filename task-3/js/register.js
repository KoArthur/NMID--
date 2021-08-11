window.onload = function () {
    function $$(id) {
        return document.getElementById(id);
    }

    function register() {
        // //1.创建对象
        // let xhr = new XMLHttpRequest();
        // //2.初始化，设置请求方法和url
        // xhr.open('GET', 'http://localhost:8000/server?a=100&b=200');
        // //3.发送
        // xhr.send();
        // //4.事件绑定
        // //on when 当....时候
        // //readystate是xhr对象中的属性，表示状态0 1 2 3 4
        // //change改变
        // xhr.onreadystatechange = function () {
        //     //判断
        //     if (xhr.readyState === 4) {
        //         //判断响应状态码 200 404 403 401 500
        //         //2xx 成功
        //         if (xhr.status >= 200 && xhr.status < 300) {
        //             //处理结果 行 头 空头 体
        //             //1. 响应行
        //             console.log(xhr.status); //状态码
        //             console.log(xhr.statusText); //状态字符串
        //             console.log(xhr.getAllResponseHeaders()); //所有响应头
        //             console.log(xhr.response); //响应体
        //         } else {
        //         }
        //     }
        // }
    }

    let oPhone = $$("phone");
    oPhone.onblur = function () {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("GET", "http://47.98.192.167:8800/is_repeat");
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {

                } else {
                    console.log(error);
                }
            }
        };
    };
    let oName = $$("name");
    oName.onblur = function () {
        // //创建对象
        // let xhr = new XMLHttpRequest();
        // //初始化
        // xhr.open('POST', 'http://127.0.0.1:8000/server');
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // //xhr.setRequestHeader('name', 'Julia');
        // // xhr.send('a=100&b=200&c=300');
        // xhr.send('a:100&b:200&c:300');
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4) {
        //         if (xhr.status >= 200 && xhr.status < 300) {
        //             oAge.value = xhr.response;
        //         }
        //     }
        // }
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', 'http://47.98.192.167:8800/is_repeat?name=' + oName.innerText);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    $$("box").innerHTML = "<div id='wrap'><p id='txt'></p></div>";
                    $$("txt").innerText = "success";
                    setTimeout(() => {
                        $$("box").innerHTML = "";
                    }, 2000);
                } else {
                    console.log(error);
                }
            }
        };

    };
    let oGender = $$("gender");
    oGender.onclick = function () {
        // let xhr = new XMLHttpRequest();
        // xhr.timeout = 2000;
        // xhr.ontimeout = function () {
        //     alert("网络超时");
        // }
        // xhr.onerror = function () {
        //     alert("你的网络似乎出了问题");
        // }
        // //设置响应体数据类型
        // xhr.responseType = 'json';
        // xhr.open('GET', 'http://127.0.0.1:8000/json-server');
        // xhr.send();
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4) {
        //         if (xhr.status >= 200 && xhr.status < 300) {
        //             //console.log(xhr.response);
        //             //数据转换
        //             //let data = JSON.parse(xhr.response);
        //             let data = xhr.response;
        //             console.log(data.name);
        //         }
        //     }
        // }
    };
    let oBack = $$("back");
    oBack.onclick = function () {
        window.location.href = "http://localhost:3000/NMID--/task-3/login.html";
    }
};