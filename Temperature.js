/* let a = 20;
let b = 40;
let c = 60;

let inside = document.querySelector("div");

if (b === 40) {
    inside.style.
  inside.style.backgroundColor = "black";
}
 */

let tempFromType = document.getElementById("valueFrom");
let tempToType = document.getElementById("valueTo");

function change() {
  return tempFromType.options[tempFromType.selectedIndex].value;
}

function changeTo() {
  return tempFromType.options[tempToType.selectedIndex].value;
}

// change();

// console.log(tempFromType.options[tempFromType.selectedIndex].value);

let inputVal = document.getElementById("enteredVal");
let outputVal = document.querySelector("output");

let submit = document
  .getElementById("convert")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let input = inputVal.value;

    // switch statement
    switch (change()) {
      case "cel":
        // Nested switch statement
        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = input;
            console.log(outputVal.innerHTML);
            break;

          case "fah":
            outputVal.innerHTML = ((input * 9) / 5 + 32).toFixed(2);
            break;

          case "newt":
            outputVal.innerHTML = (input * 0.33).toFixed(2);
            break;

          case "kal":
            outputVal.innerHTML = (input + 273.15).toFixed(2);
            break;

          case "reau":
            outputVal.innerHTML = ((input * 4) / 5).toFixed(2);
            break;

          default:
            outputVal.innerHTML = "Wrong value";
        }

      case "fah":
        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = (((input - 32) * 5) / 9).toFixed(2);
            break;

          case "fah":
            outputVal.innerHTML = input;
            break;

          case "newt":
            outputVal.innerHTML = ((input * 60) / 11 + 32).toFixed(2);
            break;

          case "kal":
            outputVal.innerHTML = (((input - 32) * 5) / 9 + 273.15).toFixed(2);
            break;

          case "reau":
            outputVal.innerHTML = (input - 32)(4 / 9).toFixed(2);
            break;

          default:
            outputVal.innerHTML = "Wrong value";
        }
        break;

      case "kal":
        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = input - (273.15).toFixed(2);
            break;

          case "fah":
            outputVal.innerHTML = (9 / 5(input - 273.15) + 32).toFixed(2);
            break;

          case "newt":
            outputVal.innerHTML = (input / 3.03).toFixed(2);
            break;

          case "kal":
            outputVal.innerHTML = input.toFixed(2);
            break;

          case "reau":
            outputVal.innerHTML = ((input - 273.15) * (4 / 5)).toFixed(2);
            break;

          default:
            outputVal.innerHTML = "Wrong value";
        }
        break;

      case "newt":
        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = (input / 0.33).toFixed(2);
            break;

          case "fah":
            outputVal.innerHTML = ((input * 60) / 11 + 32).toFixed(2);
            break;

          case "newt":
            outputVal.innerHTML = input.toFixed(2);
            break;

          case "kal":
            outputVal.innerHTML = (input * 3.03).toFixed(2);
            break;

          case "reau":
            outputVal.innerHTML = ((input * 80) / 33).toFixed(2);
            break;

          default:
            outputVal.innerHTML = "Wrong value";
        }
        break;

      case "reau":
        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = input.toFixed(2);
            break;

          case "fah":
            outputVal.innerHTML = ((input * 9) / 5 + 32).toFixed(2);
            break;

          case "newt":
            outputVal.innerHTML = (input * 0.33).toFixed(2);
            break;

          case "kal":
            outputVal.innerHTML = (input + 273.15).toFixed(2);
            break;

          case "reau":
            outputVal.innerHTML = ((input * 4) / 5).toFixed(2);
            break;

          default:
            outputVal.innerHTML = "Wrong value";
        }
        break;
    }
  });

// getSelectedFromValue();
