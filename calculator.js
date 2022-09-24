"use strict";
let button = document.querySelectorAll("button");
// screen is the input field.
let screen = document.getElementById("quantity");
// operatorVal stores all the values in the input field , and let us perform different calculations through screen.value . 
let operateVal = "";
// let btnNotAllowed = document.querySelectorAll(".smaller__el-TACD");
let svg = document.getElementById("Layer_1");

for (let i of button) {
  i.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
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
//         Changing the btnText value to get the proper calculation . Then we are appending it inside the operateVal.
        btnText = "*";
        operateVal += btnText;
        screen.value = operateVal;
        break;

      case "⌫":
        // btnText = "";
        // operateVal += btnText;
//         slice method doesnt include the last mentioned index number so it means that it'll go from 0 to value behind -1.
        operateVal = screen.value.toString().slice(0, -1);
        screen.value = operateVal;
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
//         Here we are simply printing the numbers presssed.
        operateVal += btnText;
        screen.value = operateVal;
    }
  });
}

// screen.addEventListener("click", (e) => localStorage.clear());

// LETS GO!!
/* function run() {
  window.open("index.html", "_self");
} */
