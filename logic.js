const header = document.getElementById("header");
header.textContent = "Welcome to the FunkyTown!";
header.style.color = "red";
header.classList.add("active");
const text1 = document.getElementById("text1");
text1.textContent = "Russki yazick sletel ot ispolzovaniya script";
/*const vid = document.getElementById("vid");
vid.style.display = "none";

const mybutton = document.getElementById("ismyButton");

mybutton.addEventListener("click", function () {
    console.log("������ ������!");
});
*/
const greeting = document.getElementById("greeting");
header.addEventListener("click", function () {
    alert("Stay FUNKY!");
});

const text2 = document.getElementById("text2");
//text2.textContent = "Russki yazick sletel ot ispolzovaniya script";
text2.addEventListener("click", function () {
    this.classList.add("clicked");
});

const lection = document.getElementById("lection");
lection.style.display = "visible";

const knopka = document.getElementById("knopka");
knopka.addEventListener("click", function () {
    lection.classList.add("visible");
});

const practic = document.getElementById("practic");

const show2pr = document.getElementById("show2pr");

const pr1 = document.getElementById("pr1");
const pr2 = document.getElementById("pr2");
const pr3 = document.getElementById("pr3");
const pr4 = document.getElementById("pr4");
const pr5 = document.getElementById("pr5");
const pr6 = document.getElementById("pr6");
const pr7 = document.getElementById("pr7");
const pr8 = document.getElementById("pr8");
const pr9 = document.getElementById("pr9");
const pr10 = document.getElementById("pr10");
const pr11 = document.getElementById("pr11");
const pr12 = document.getElementById("pr12");
const pr13 = document.getElementById("pr13");
const pr14 = document.getElementById("pr14");
const pr15 = document.getElementById("pr15");
const pr16 = document.getElementById("pr16");
show2pr.addEventListener("click", function () {
    pr1.textContent = "2 sem tema";
    pr2.textContent = "2 sem tema";
    pr3.textContent = "2 sem tema";
    pr4.textContent = "2 sem tema";
    pr5.textContent = "2 sem tema";
    pr6.textContent = "2 sem tema";
    pr7.textContent = "2 sem tema";
    pr8.textContent = "2 sem tema";
    pr9.textContent = "2 sem tema";
    pr10.textContent = "2 sem tema";
    pr11.textContent = "2 sem tema";
    pr12.textContent = "2 sem tema";
    pr13.textContent = "2 sem tema";
    pr14.textContent = "2 sem tema";
    pr15.textContent = "2 sem tema";
    pr16.textContent = "2 sem tema";
});

const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
pic2.addEventListener("mouseover", function () {
    this.classList.add("anim")
});

pic2.addEventListener("click", function () {
    this.classList.add("cli")
    pic3.classList.add("cli")
});

pic3.addEventListener("dblclick", function () {
    alert("НИКТО НЕ ПОСТРАДАЛ (Кроме Вольво)");
});


/*
var namee = "";
var email = "";
var phone = "";
var date = "";
var comment = "";

const button = document.getElementById("myForm");

form.addEventListener("submit"), function (event) {

    event.preventDefault();

    namee = form.elements["namee"].value;
    email = form.elements["email"].value;
    phone = form.elements["tel"].value;
    date = form.elements["date"].value;
    comment = form.elements["comment"].value;

    console.log(namee);
    console.log(email);
    console.log(phone);
    console.log(date);
    console.log(comment);
};
*/
