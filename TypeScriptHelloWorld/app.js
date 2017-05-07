//class Greeter {
//    element: HTMLElement;
//    btn: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;
//    constructor(element: HTMLElement, clickBtn: HTMLElement) {
//        this.element = element;
//        this.btn = clickBtn;
//        this.element.innerHTML += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//        //clickBtn.addEventListener("click ", this.test); 
//        console.log(this.element);
//        console.log(this.btn);
//       // alert("Alert is ok");
//       // this.btn.innerHTML = "OK Btn";
//      //  this.btn.addEventListener("click", () => this.test());
//        //clickBtn.onclick = function clickBtnFun() {
//        //    alert("OK");
//        //    window.open("A_1.html");
//        //};
//    }
//    test() {
//        window.open("A_1.html");
//    }
//    start() {
//        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
//    }
//    stop() {
//        clearTimeout(this.timerToken);
//    }
//}
////document.getElementById('button').onclick = function () {
////    alert("button was clicked");
////}​;​
//window.onload = () => {
//    var el = document.getElementById('content');
//    var clickBtn = document.getElementById("button");
//    var greeter = new Greeter(el, clickBtn);
//    greeter.start();
//};
//var plData = new userdata("","",1500);
function onclickbtn() {
    window.close;
    window.open("A_1.html");
}
function playAgain() {
    alert("playAgain button was clicked");
    window.open("C_2.html");
    window.close;
}
function forgetBtn() {
    //window.open("index.html");
    alert("Forget button was clicked");
    deleteCookie();
}
function startBtn2() {
    window.open("B_1.html");
    window.close;
}
//Cookie
function getCookie(cname) {
    //var re = new RegExp(name + "=([^;]+)");
    //var value = re.exec(document.cookie);
    //return (value != null) ? unescape(value[1]) : null;
    //document.write(getCookie("field1"));
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(playername, difficulty, score, days) {
    //if (days) {
    //    var date = new Date();
    //    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    //    var expires = date.toGMTString();
    //} else var expires = "";
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    //var cookieString = "playername = " + playername;
    //cookieString += "; difficulty =" + difficulty;
    document.cookie = "userdata" + "=" + playername + "," + difficulty + "," + score + ";" + expires;
    //document.cookie = cookieString;
}
function checkCookie(PlayerName, difficulty, score) {
    var allcookies = document.cookie;
    // Get all the cookies pairs in an array
    var cookiearray = allcookies.split(';');
    document.write("cookiearray : " + cookiearray);
    // Now take key value pair out of this array
    //for (var i = 0; i < cookiearray.length; i++) {
    var key = cookiearray[1].split('=')[0];
    var value = cookiearray[1].split('=')[1];
    //var value2 = cookiearray[i].split(',')[2];
    //var value3 = cookiearray[i].split(',')[3];
    alert("Key is : " + key + " and Value is : " + value /*+ "  Value222  " + value2 + "  Value333  " + value3*/);
    var playername;
    var playerdifficulty;
    var playerscore;
    var dataarray = value.split(',');
    playername = dataarray[0];
    playerdifficulty = dataarray[1];
    playerscore = dataarray[2];
    alert("playername is : " + playername + " playe NAME is : " + PlayerName /*+ "  Value222  " + value2 + "  Value333  " + value3*/);
    if (key.match("userdata") && playername.match(PlayerName) /*value.match(userdataValues)*/) {
        //Cookies exists
        alert("IF Is True");
        alert("Welcome again " + playername);
        return "0";
    }
    else {
        //deleteCookie();
        alert("New User ! ");
        setCookie(PlayerName, difficulty, score, 5);
        //alert("Add New Cookie with player name =  " + playername + "  and difficulty = " + difficulty); 
        return value;
    }
    //document.write("Player Data : " + playername + " " + difficulty + " " + score); 
    //document.write("All Cookies : " + allcookies);  
    //}
    //document.write("All Cookies : " + allcookies + "  Key  " + key + "  Value  " + value);  
    //var user = getCookie("playername");
    //if (user != "" /*&& user.valueOf == playername*/) {
    //    //alert("Welcome again " + user + document.cookie.valueOf);
    //} else {
    //    alert("New User ! ");
    //    setCookie(playername, difficulty);
    //}
}
function deleteCookie() {
    setCookie("userdata", "", "", -1);
}
////////////////////
function startBtn() {
    //window.open("index.html");
    //var username = parseFloat((<HTMLInputElement>document.getElementById("userName")).value);
    //var username = parseFloat(document.getElementById("userName").value);
    var username = document.getElementById("userName").value;
    //alert(username);
    var difficulty = document.getElementById("dropdown_diff").value;
    //var strUser = e.options[e.selectedIndex].value;
    var score = 1500; //////////******////////
    //var userdata : string = username + "," + difficulty + "," + "";
    alert("Befor call");
    var userdataValues = checkCookie(username, difficulty, score);
    alert("After call" + userdataValues);
    if (userdataValues.length != 0) {
        //Cookie Exists
        var playername;
        var playerdifficulty;
        var playerscore;
        var dataarray = userdataValues.split(',');
        playername = dataarray[0];
        playerdifficulty = dataarray[1];
        playerscore = dataarray[2];
        alert("Old User A_2 Will Display");
        //var plData = new userdata(playername, playerdifficulty, playerscore);
        window.open("A_2.html");
    }
    else {
        //No Cookie Exists
        setCookie(username, difficulty, score, 5);
        alert("New User B_1 Will Display");
        var plData = new userdata(username, difficulty, score);
        window.open("B_1.html");
        window.close;
    }
    alert(username + "  " + difficulty);
    // ReadCookie()
}
function ReadCookie() {
    var allcookies = document.cookie;
    document.write("All Cookies : " + allcookies);
    // Get all the cookies pairs in an array
    var cookiearray = allcookies.split(';');
    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
        var name = cookiearray[i].split('=')[0];
        var value = cookiearray[i].split('=')[1];
        alert("Key is : " + name + " and Value is : " + value);
    }
}
function gameBtn() {
    window.open("C_1.html");
    window.close;
}
window.onload = function () {
    //  var el = document.getElementbyid('content');
    //var clickbtn = document.getelementbyid("button");
    //var greeter = new greeter(el, clickbtn);
    var username = "mmm";
    var userdiff = "nok";
    var userscore = "1233";
    document.getElementById("username").innerHTML = username;
    document.getElementById("userdiff").innerHTML = userdiff;
    document.getElementById("userscore").innerHTML = userscore;
    //var username: string = "hamdy saad";
    //document.getElementById("textContent").innerHTML = nada;
    //greeter.start();
};
//# sourceMappingURL=app.js.map