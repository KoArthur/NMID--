window.onload = function () {
    function $$(id) {
        return document.getElementById(id);
    }
    let oChange = $$("change");

    oChange.onclick = function () {
        if (oChange.innerText === "验证码登陆") {
            oChange.innerText = "密码登陆";
            let oMode = $$("mode");
            oMode.innerHTML = '<input type="password" name="psw" class="input" placeholder="请输入验证码">';
            oMode.innerHTML += '<input type="button" id="getNum" class="btn" value="获取验证码">';
        } else {
            oChange.innerText = "验证码登陆";
            let oMode = $$("mode");
            oMode.innerHTML = '<input type="password" name="psw" class="input" placeholder="请输入密码">';
        }
    }

    let oRegister = $$("register");
    oRegister.onclick = function () {
        window.location.assign("http://localhost:3000/task/task-3/register.html");
    }
}