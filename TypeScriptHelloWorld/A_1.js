//class Greeter2 {
//    element: HTMLElement;
//    btn: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;
//    constructor(element: HTMLElement, startBtn: HTMLButtonElement) {
//        this.element = element;
//        this.btn = startBtn;
//        this.element.innerHTML += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//        //clickBtn.addEventListener("click ", this.test); 
//        console.log(this.element);
//        console.log(this.btn);
//        // alert("Alert is ok");
//        // this.btn.innerHTML = "OK Btn";
//        this.btn.addEventListener("click", () => this.test());
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
//document.getElementById('button').onclick = function () {
//    alert("button was clicked");
//}​;
//window.onload = () => {
//    var el = document.getElementById('container');
//    var startBtn = document.getElementById("startBtn");
//    var greeter2 = new Greeter2(el, clickBtn);
//    greeter2.start();
//};
//# sourceMappingURL=A_1.js.map