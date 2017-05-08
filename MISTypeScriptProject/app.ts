
class UserData {

    _PlayerName: string;
    _PlayerDiff: string;
    _PlayerScore: number;

    //get PlayerName(): string {
    //    return this.PlayerName;
    //}

    //set PlayerName(the_PlayerName: string) {
    //    this._PlayerName = the_PlayerName;
    //}

    //get PlayerDiff(): string {
    //    return this._PlayerDiff;
    //}

    //set PlayerDiff(the_PlayerDiff: string) {
    //    this._PlayerDiff = the_PlayerDiff;
    //}

    //get PlayerScore(): number {
    //    return this._PlayerScore;
    //}

    //set PlayerScore(the_PlayerScore: number) {
    //    this._PlayerScore = the_PlayerScore;
    //}

}


let userdata = new UserData();

function onclickbtn(): void {

    window.location.replace("~/A_1.html");
//    window.location.href = "~/A_1.html";
}

function playAgain(): void {

    alert("playAgain button was clicked");
    window.open("C_2.html");
    window.close;

}

function forgetBtn(): void {

    //window.open("index.html");

    alert("Forget button was clicked");
    // deleteCookie()
    //cookie.deleteCookie();


}

function startBtn2(): void {
    window.open("B_1.html");
    window.close;
}

function gameBtn(): void {
    window.open("C_1.html");
    window.close;
}

////////// COOKIE //////////

function createCookie(cname, playername, playerdiff, score, days): void {
    let expires
    if (days) {

        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = date.toString();

    }

    else  expires = "";

    let cookieString = cname + "=" + playername ;

    if (playerdiff)
        cookieString += "; playerdiff=" + playerdiff;

    if (score)
        cookieString += "; score=" + score;

    if (expires)
        cookieString += "; expires=" + expires;

    alert("Cookie Is ==>>   " + cookieString);
    document.cookie = cookieString;
}

let delimiter = "---";

function getCookie(name) {

    let nameEquals = name + "=";
    let whole_cookie = document.cookie.split(nameEquals)[1].split(";")[0]; // get only the value of the cookie we need 
    //alert("Whole Cookies ==>>  " + whole_cookie);
    // (split by the name=, take everything after the name= and then split it by ";" and take everything before the ";")
    let crumbs = whole_cookie.split(delimiter); // split now our cookie in its information parts
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
    createCookie(name, "" , "" ,"", -1);
}


////////// END COOKIE //////////////


let username: string;
let difficulty: string;
let score: number;

function startBtn(): void {

    username = (document.getElementById("userName") as HTMLInputElement).value;
    difficulty = (document.getElementById("dropdown_diff") as HTMLInputElement).value;
    score = 1500; //////////***From Hamdy***////////

    alert("Befor call");

    let cookieReturn = getCookie("UserData"); //Return User Name
    let userName: string = cookieReturn[0];
    let userDiff: string = cookieReturn[1];

    if (userName.match(username)) {
        alert("Welcome again " + userName + "User Diff ==>> " + userDiff);
        userdata._PlayerDiff = userName;
        window.open("A_2.html");
    } else {
        
        createCookie("UserData", username, difficulty, score, 5);
        alert("New User ==>> Cookie Is Created")
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

window.onload = () => {
    //  var el = document.getElementbyid('content');
    //var clickbtn = document.getelementbyid("button");
    //var greeter = new greeter(el, clickbtn);

    let cookieReturn = getCookie("UserData"); //Return User Name
    let user: string = cookieReturn[0];
    let dif: string = cookieReturn[1];
    //let user: string = cookieReturn[0];


    document.getElementById("username").innerHTML = user;
    document.getElementById("userdiff").innerHTML = dif;
    document.getElementById("userscore").innerHTML = score.toString();
    //var username: string = "hamdy saad";
    //document.getElementById("textContent").innerHTML = nada;
      
    //greeter.start();
};

