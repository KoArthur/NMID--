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
        if (oName.value != "") {

        };
    }
    let oPsw = $$("psw");
    let oPhone = $$("phone");
    oPhone.onblur = function () {
        if (oPhone.value != "") {
            let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if (reg.test(oPhone.value) === true) {
                let xhr = new XMLHttpRequest();
            }
        }
    }
    let verifyCode = "";
    let oCode = $$("code");
    oCode.onblur = function () {
        if (oCode.value != "" && verifyCode != "") {
            if (verifyCode === oCode.value) {
                console.log("success");
                document.getElementsByClassName("mark")[3].innerHTML = "✔";
            } else {
                console.log("error");
                document.getElementsByClassName("mark")[3].innerHTML = "❌";
            }
        }
    }
    let oGetCode = $$("getCode");
    oGetCode.onclick = function () {
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
                xhr.open('GET', 'http://47.98.192.167:8800/smsXxs?phone=' + oPhone.value);
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
    }

}