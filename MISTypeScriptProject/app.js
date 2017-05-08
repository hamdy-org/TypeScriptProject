var UserData = (function () {
    function UserData() {
    }
    return UserData;
})();
var userdata = new UserData();
function onclickbtn() {
    window.location.replace("~/A_1.html");
    //    window.location.href = "~/A_1.html";
}
function playAgain() {
    alert("playAgain button was clicked");
    window.open("C_2.html");
    window.close;
}
function forgetBtn() {
    //window.open("index.html");
    alert("Forget button was clicked");
    // deleteCookie()
    //cookie.deleteCookie();
}
function startBtn2() {
    window.open("B_1.html");
    window.close;
}
function gameBtn() {
    window.open("C_1.html");
    window.close;
}
////////// COOKIE //////////
function createCookie(cname, playername, playerdiff, score, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = date.toString();
    }
    else
        expires = "";
    var cookieString = cname + "=" + playername;
    if (playerdiff)
        cookieString += "; playerdiff=" + playerdiff;
    if (score)
        cookieString += "; score=" + score;
    if (expires)
        cookieString += "; expires=" + expires;
    alert("Cookie Is ==>>   " + cookieString);
    document.cookie = cookieString;
}
var delimiter = "---";
function getCookie(name) {
    var nameEquals = name + "=";
    var whole_cookie = document.cookie.split(nameEquals)[1].split(";")[0]; // get only the value of the cookie we need 
    //alert("Whole Cookies ==>>  " + whole_cookie);
    // (split by the name=, take everything after the name= and then split it by ";" and take everything before the ";")
    var crumbs = whole_cookie.split(delimiter); // split now our cookie in its information parts
    /*for (var i = 0; i<crumbs.length; i++) {
        var crumb = crumbs [i];
        if (crumb.indexOf(nameEquals) == 0) {

        return unescape (crumb.substring(nameEquals.length, crumb.length));
        }
    }*/ // sorry... i dont understand what this does ;) but it works without it
    //alert("Crumps ==>>  " + crumbs);
    return crumbs; // return the information parts as an array
}
function deleteCookie(name) {
    createCookie(name, "", "", "", -1);
}
////////// END COOKIE //////////////
var username;
var difficulty;
var score;
function startBtn() {
    username = document.getElementById("userName").value;
    difficulty = document.getElementById("dropdown_diff").value;
    score = 1500; //////////***From Hamdy***////////
    alert("Befor call");
    var cookieReturn = getCookie("UserData"); //Return User Name
    var userName = cookieReturn[0];
    var userDiff = cookieReturn[1];
    if (userName.match(username)) {
        alert("Welcome again " + userName + "User Diff ==>> " + userDiff);
        userdata._PlayerDiff = userName;
        window.open("A_2.html");
    }
    else {
        createCookie("UserData", username, difficulty, score, 5);
        alert("New User ==>> Cookie Is Created");
        window.open("B_1.html");
    }
    alert("cookieReturn is ==>> " + cookieReturn);
    //var userdataValues = checkCookie(username, difficulty, score);
    //alert("After call" + userdataValues);
    //if (userdataValues.length != 0) {
    //    //Cookie Exists
    //    alert("Old User ==>> A_2 Will Display");
    //    //var plData = new userdata(playername, playerdifficulty, playerscore);
    //    //==>> Set User Data In PlayerData Class
    //    window.open("A_2.html");
    //} else {
    //    //No Cookie Exists
    //    alert("New User B_1 Will Display");
    //    //==>> Set User Data In PlayerData Class
    //    window.open("B_1.html");
    //    window.close;
    //}
    alert(username + "  " + difficulty + "  " + score);
}
window.onload = function () {
    //  var el = document.getElementbyid('content');
    //var clickbtn = document.getelementbyid("button");
    //var greeter = new greeter(el, clickbtn);
    var cookieReturn = getCookie("UserData"); //Return User Name
    var user = cookieReturn[0];
    var dif = cookieReturn[1];
    //let user: string = cookieReturn[0];
    document.getElementById("username").innerHTML = user;
    document.getElementById("userdiff").innerHTML = dif;
    document.getElementById("userscore").innerHTML = score.toString();
    //var username: string = "hamdy saad";
    //document.getElementById("textContent").innerHTML = nada;
    //greeter.start();
};
//# sourceMappingURL=app.js.map