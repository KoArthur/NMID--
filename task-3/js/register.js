window.onload = function () {
    function $$(id) {
        return document.getElementById(id);
    }
    let oBack = $$("back");
    oBack.onclick = function () {
        window.location.assign("http://localhost:3000/task/task-3/login.html");
    }
    let oName = $$("name");
    oName.onblur = function () {
        if (oName.value != "" || oName.value.length < 8) {
            let xhr = new XMLHttpRequest();
            xhr.timeout = 2000;
            xhr.ontimeout = function () {
                alert("网络超时");
            }
            xhr.onerror = function () {
                alert("你的网络似乎出了问题");
            }
            xhr.responseType = 'json';
            xhr.open('GET', 'http://47.98.192.167:8800/is_repeat?nick_name=' + oName.value);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        console.log(Object.values(xhr.response.data).toString());
                        if (Object.values(xhr.response.data).toString() == 'false') {
                            document.getElementsByClassName("mark")[0].innerHTML = "✔";
                        } else {
                            document.getElementsByClassName("mark")[0].innerHTML = "❌";
                        }
                    }
                }
            }
        };
    }
    let oPsw = $$("psw");
    oPsw.onblur = function () {
        if (oPsw.value != "") {
            let reg = /^(?=.*[a-z])(?=.*\d)[\s\S]{8,16}$/;
            if (reg.test(oPsw.value) === true && oPsw.value.length > 7) {
                document.getElementsByClassName("mark")[1].innerHTML = "✔";
            } else {
                document.getElementsByClassName("mark")[1].innerHTML = "❌";
            }
        }
    }
    let oPhone = $$("phone");
    oPhone.onblur = function () {
        if (oPhone.value != "") {
            let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if (reg.test(oPhone.value) === true) {
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
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            console.log(Object.values(xhr.response.data).toString());
                            if (Object.values(xhr.response.data).toString() == 'false') {
                                document.getElementsByClassName("mark")[2].innerHTML = "✔";
                            } else {
                                document.getElementsByClassName("mark")[2].innerHTML = "❌";
                            }
                        }
                    }
                }
            }
        }
    }
    let verifyCode = "";
    let oCode = $$("code");
    oCode.onblur = function () {
        if (oCode.value != "" && verifyCode != "") {
            if (verifyCode === oCode.value) {
                document.getElementsByClassName("mark")[3].innerHTML = "✔";
            } else {
                document.getElementsByClassName("mark")[3].innerHTML = "❌";
            }
        }
    }
    let oGetCode = $$("getCode");
    oGetCode.onclick = function () {
        if (oPhone.value != "" && document.getElementsByClassName("mark")[2].innerHTML == "✔") {
            let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if (reg.test(oPhone.value) === true) {
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
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            verifyCode = xhr.response.verifyCode;
                        }
                    }
                }
            }
        }
        if (oPhone.value == "") {
            alert("邮箱为空");
        } else {
            alert("邮箱格式不正确");
        }
    }
    let oRegister = $$("register");
    oRegister.onclick = function () {
        if (document.getElementsByClassName("mark")[0].innerHTML == "✔" && document.getElementsByClassName("mark")[1].innerHTML == "✔" && document.getElementsByClassName("mark")[2].innerHTML == "✔" && document.getElementsByClassName("mark")[3].innerHTML == "✔") {
            let xhr = new XMLHttpRequest();
            xhr.timeout = 2000;
            xhr.ontimeout = function () {
                alert("网络超时");
            }
            xhr.onerror = function () {
                alert("你的网络似乎出了问题");
            }
            xhr.responseType = 'json';
            xhr.open('POST', 'http://47.98.192.167:8800/is_repeat?nick_name=' + oName.value);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send();
        } else {
            alert("请审核信息");
        }
    }
}