"use strict";
let button = document.querySelectorAll("button");
let screen = document.getElementById("quantity");
let operateVal = "";
// let btnNotAllowed = document.querySelectorAll(".smaller__el-TACD");
let svg = document.getElementById("Layer_1");

for (let i of button) {
  i.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
    e.preventDefault();
    // console.log(btnText);

    // if (btnText == "=") {

    // } else if (btnText == "×") {

    // } else if (btnText == "AC") {

    // } else if (btnText == "⌫") {

    // } else {

    // }

    // console.log(e.target);
    /* 
    if (e.target === btnNotAllowed) {
      /*       btnText = "";
      // screen.value = "";
      operateVal += btnText;
      screen.value = operateVal; 
      console.log("hi");
    } */

    if (e.target == svg) {
      return;
    }

    switch (btnText) {
      case "AC":
        operateVal = "";
        screen.value = operateVal;
        break;

      case "×":
        btnText = "*";
        operateVal += btnText;
        screen.value = operateVal;
        // console.log(operateVal);
        break;

      case "⌫":
        // btnText = "";
        // operateVal += btnText;
        operateVal = screen.value.toString().slice(0, -1);
        screen.value = operateVal;
        // console.log(operateVal);
        break;

      case "=":
        btnText = "";
        operateVal = eval(screen.value);
        screen.value = operateVal;
        break;

      case "÷":
        btnText = "/";
        operateVal += btnText;
        screen.value = operateVal;

      case "123":
        btnText = "";
        operateVal += btnText;
        screen.value = operateVal;

      case "$":
        btnText = "";
        operateVal += btnText;
        screen.value = operateVal;

      default:
        operateVal += btnText;
        screen.value = operateVal;
    }
    // console.log(screen.value);
  });
}
