window.onload = function () {
    function $$(id) {
        return document.getElementById(id);
    }
    let oChange = $$("change");
    let oPhone = $$("phone");
    let oPsw = $$("psw");
    let oGetCode = document.getElementsByTagName("input")[2];
    let oLogin = $$("login");
    oChange.onclick = function () {
        if (oChange.innerText === "验证码登陆") {
            oChange.innerText = "密码登陆";
            oPsw.placeholder = "请输入验证码";
            oGetCode.id = "getCode";
            oGetCode.className = "btn";
            oGetCode.value = "获取验证码";
            oPsw.type = "text";
            oPsw.value = "";
            oPsw.maxLength = "6";
        } else {
            oChange.innerText = "验证码登陆";
            oPsw.placeholder = "请输入密码";
            oGetCode.id = "";
            oGetCode.className = "clear";
            oGetCode.value = "";
            oPsw.type = "password";
            oPsw.value = "";
            oPsw.maxLength = "16";
        }
    }


    oGetCode.onclick = function (e) {
        let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (oPhone.value == "") {
            alert("邮箱为空");
        }
        if (reg.test(oPhone.value) == false && oPhone.value != "") {
            alert("邮箱格式不正确");
        }
        if (oPhone.value != "" && reg.test(oPhone.value) == true) {
            let xhr = new XMLHttpRequest();
            xhr.timeout = 2000;
            xhr.ontimeout = function () {
                alert("网络超时");
            }
            xhr.onerror = function () {
                alert("你的网络似乎出了问题");
            }
            xhr.responseType = 'json';
            xhr.open('GET', 'http://47.98.192.167:8800/is_repeat?tel=' + oPhone.value);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (Object.values(xhr.response.data).toString() == "true") {
                            xhr = new XMLHttpRequest();
                            xhr.timeout = 2000;
                            xhr.ontimeout = function () {
                                alert("网络超时");
                            }
                            xhr.onerror = function () {
                                alert("你的网络似乎出了问题");
                            }
                            xhr.responseType = 'json';
                            xhr.open('GET', 'http://47.98.192.167:8800/smsXxs?phone=' + oPhone.value);
                            xhr.send();
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState == 4) {
                                    if (xhr.status >= 200 && xhr.status < 300) {
                                        alert("发送成功");
                                    }
                                }
                            }
                        } else {
                            alert("邮箱不存在");
                        }
                    }
                }
            }
        }
    }

    oLogin.onclick = function () {
        if (oChange.innerText == "验证码登陆") {
            if (oPhone.value == "") {
                alert("邮箱不能为空");
            }

            let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if (reg.test(oPhone.value) === false && oPhone.value != "") {
                alert("邮箱格式不对");
            }
            if (reg.test(oPhone.value) === true && oPhone.value != "" && oPsw.value != "") {
                alert("hello wolrd");
                let xhr = new XMLHttpRequest();
                xhr.timeout = 2000;
                xhr.ontimeout = function () {
                    alert("网络超时");
                }
                xhr.onerror = function () {
                    alert("你的网络似乎出了问题");
                }
                xhr.responseType = 'json';
                xhr.open('POST', 'http://47.98.192.167:8800/users/load');
                let msg = 'psw=' + oPsw.value + '&tel=' + oPhone.value;
                xhr.send(msg);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            alert(xhr.response.data.msg);
                        }
                    }
                }
            }
            if (oPsw.value == "") {
                alert("密码不能为空");
            }
        }
        if (oChange.innerText == "密码登陆") {
            if (oPhone.value == "") {
                alert("邮箱不能为空");
            }

            let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if (reg.test(oPhone.value) === false && oPhone.value != "") {
                alert("邮箱格式不对");
            }
            if (reg.test(oPhone.value) === true && oPhone.value != "" && oPsw.value != "") {
                alert("hello wolrd");
                let xhr = new XMLHttpRequest();
                xhr.timeout = 2000;
                xhr.ontimeout = function () {
                    alert("网络超时");
                }
                xhr.onerror = function () {
                    alert("你的网络似乎出了问题");
                }
                xhr.responseType = 'json';
                xhr.open('POST', 'http://47.98.192.167:8800/users/load');
                let msg = 'pin=' + oPsw.value + '&tel=' + oPhone.value;
                xhr.send(msg);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            alert(xhr.response.data.msg);
                        }
                    }
                }
            }
            if (oPsw.value.length < 6) {
                alert("请输入正确的验证码");
            }
        }
    }

    let oRegister = $$("register");
    oRegister.onclick = function () {
        window.location.assign("http://localhost:3000/task/task-3/register.html");
    }
}