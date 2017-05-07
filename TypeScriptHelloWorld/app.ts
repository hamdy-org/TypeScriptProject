
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

function onclickbtn(): void {

    window.open("A_1.html");

}

function playAgain(): void {

    alert("playAgain button was clicked");
    window.open("C_2.html");
   
}

function forgetBtn(): void {

    //window.open("index.html");

    alert("Forget button was clicked");
    deleteCookie()

    
}

function startBtn2(): void {
    window.open("B_1.html");
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

function setCookie(playername: string, difficulty: string, score ,days ) {

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

    document.cookie = "userdata" + "=" + playername + "," + difficulty + "," + score  + ";" + expires ;
    //document.cookie = cookieString;
}


function checkCookie(userdataValues): string {

    var allcookies = document.cookie;
    // Get all the cookies pairs in an array
    var cookiearray = allcookies.split(';');
    document.write("cookiearray : " + cookiearray);
    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
        var key = cookiearray[i].split('=')[0];
        var value = cookiearray[i].split('=')[1];
        //var value2 = cookiearray[i].split(',')[2];
        //var value3 = cookiearray[i].split(',')[3];
        //alert("Key is : " + key + " and Value is : " + value /*+ "  Value222  " + value2 + "  Value333  " + value3*/);

        if (key === "userdata" /*&& value.match(userdataValues)*/) {
            //Cookies exists
            //alert("Welcome again " + playername);
            return null;
        } else { //No cookie exists
            //deleteCookie();
            //alert("New User ! " + playername);
            //setCookie(playername, difficulty , 1500 , 5);
            //alert("Add New Cookie with player name =  " + playername + "  and difficulty = " + difficulty); 
            return value;
        }

        

        //document.write("Player Data : " + playername + " " + difficulty + " " + score); 

        //document.write("All Cookies : " + allcookies);  
    }
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
    setCookie("userdata", "", "" , -1);
}

////////////////////

function startBtn(): void {

    //window.open("index.html");
    //var username = parseFloat((<HTMLInputElement>document.getElementById("userName")).value);

    //var username = parseFloat(document.getElementById("userName").value);

    let username: string = (document.getElementById("userName") as HTMLInputElement).value;

    //alert(username);

    let difficulty = (document.getElementById("dropdown_diff") as HTMLInputElement).value;
    //var strUser = e.options[e.selectedIndex].value;
    var score 

    var userdata : string = username + "," + difficulty + "," + "";

    var userdataValues = checkCookie(userdata);

    if (userdataValues.length != 0) {
        //Cookie Exists
        var playername;
        var playerdifficulty;
        var playerscore;
        var dataarray = userdataValues.split(',');

        playername = dataarray[0];
        playerdifficulty = dataarray[1];
        playerscore = dataarray[2];

        window.open("A_2.html");

    } else {
        //No Cookie Exists
        setCookie(username, difficulty, score, 5);
        window.open("B_1.html");
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
      var  name = cookiearray[i].split('=')[0];
      var value = cookiearray[i].split('=')[1];
        alert("Key is : " + name + " and Value is : " + value );
    }
}

function gameBtn(): void {
    window.open("C_1.html");
}
