function $$(id) {
    return document.getElementById(id);
}

function change() {
    let Ochange = $$("change");
    let oVa = $$("validate");
    if (Ochange.innerText === "◯验证码登陆") {
        Ochange.innerText = "◯密码登陆";
        oVa.innerHTML = '<input type="password" name="" id="" placeholder="请输入验证码">' +
            '<div id="btn" onclick="getcode()">获取验证码</div>';
    } else {
        Ochange.innerText = "◯验证码登陆";
        oVa.innerHTML = '<input type="password" name="" id="" placeholder="请输入密码">';
    }
}

function forget() {
    window.location.href = "#";
}

function register() {
    window.location.href = "http://localhost:3000/NMID--/task-3/register.html";
}

function getCode() {

}