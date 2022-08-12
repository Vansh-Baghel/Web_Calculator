/* let a = 20;
let b = 40;
let c = 60;

let inside = document.querySelector("div");

if (b === 40) {
    inside.style.
  inside.style.backgroundColor = "black";
}
 */

let mercury = document.getElementById("mercury__inner");
let tempFromType = document.getElementById("valueFrom");
let tempToType = document.getElementById("valueTo");

// function to get the value of 'convert from'

function change() {
  return tempFromType.options[tempFromType.selectedIndex].value;
}

// function to get the value of 'convert to'
function changeTo() {
  return tempFromType.options[tempToType.selectedIndex].value;
}

// function for thermometer color
function changeColor(heightVal) {
  let color = "";
  if (heightVal >= 100) {
    heightVal = 100;
    color = "red";
  } else if (heightVal <= -100) {
    heightVal = 100;
    color = "blue";
  } else if (heightVal < 0) {
    heightVal = Math.abs(heightVal);
    color = "blue";
  } else if (heightVal < 100) {
    heightVal = heightVal;
    color = "red";
  }

  mercury.style.cssText = `
    position: absolute;
    z-index: 2;
    bottom: 0;
    margin:auto;
    height : ${heightVal}%;
    width: 100%;
background-color: ${color};`;
}
// change();

// console.log(tempFromType.options[tempFromType.selectedIndex].value);

let inputVal = document.getElementById("enteredVal");
let outputVal = document.querySelector(".output");
let string = "";

let submit = document
  .getElementById("convert")
  .addEventListener("click", function (e) {
    // console.log(input);
    let input = inputVal.value;

    /* 
    if (input < 20) {
      mercury.style.cssText = `
      position: absolute;
      left:60% ;
      right: 0;
      top: 25%;
      bottom: 0%;
      margin:auto;
      height : 20px;
      width: 20px;
      background-color: red;`;
    }
 */
    // switch statement
    switch (change()) {
      case "cel":
        // here input will act as the parameter for the height element.
        changeColor(input);

        // Nested switch statement
        switch (changeTo()) {
          case "cel":
            // outputVal.innerHTML = "";
            // let out = outputVal.innerHTML;
            outputVal.innerHTML = (input * 1).toFixed(2) + "°C";
            // console.log(changeTo());
            // console.log(out);
            // console.log(input);
            return outputVal.innerHTML;

          case "fah":
            outputVal.innerHTML = ((input * 9) / 5 + 32).toFixed(2) + "°F";
            // console.log(changeTo());
            // console.log(outputVal.innerHTML);
            return outputVal.innerHTML;

          case "newt":
            outputVal.innerHTML = (input * 0.33).toFixed(2) + "°N";
            return outputVal.innerHTML;

          // IDK why it needed Number , sheeeeesh finally its solved
          case "kal":
            outputVal.innerHTML =
              (Number(input) + Number(273.15)).toFixed(2) + "K";
            // out = outputVal.innerHTML;
            // return out;
            return outputVal.innerHTML;

          case "reau":
            outputVal.innerHTML = ((input * 4) / 5).toFixed(2) + "°R";
            return outputVal.innerHTML;

          default:
            outputVal.innerHTML = "Wrong value";
        }

      case "fah":
        let fahToCel = ((input - 32) * 5) / 9;
        changeColor(fahToCel);

        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = (((input - 32) * 5) / 9).toFixed(2) + "°C";
            return outputVal.innerHTML;

          case "fah":
            outputVal.innerHTML = (input * 1).toFixed(2) + "°F";
            return outputVal.innerHTML;

          case "newt":
            const tempVar = (input - 32) * (11 / 60);
            outputVal.innerHTML = tempVar.toFixed(2) + "°N";
            return outputVal.innerHTML;

          case "kal":
            outputVal.innerHTML =
              (((input - 32) * 5) / 9 + 273.15).toFixed(2) + "K";
            return outputVal.innerHTML;

          case "reau":
            const newLocal = (Number(input) - 32) * 0.44444;
            outputVal.innerHTML = newLocal.toFixed(2) + "°R";
            return outputVal.innerHTML;

          default:
            outputVal.innerHTML = "Wrong value";
        }
        break;

      case "kal":
        let kalToCel = input - 273.15;

        changeColor(kalToCel);

        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = input - (273.15).toFixed(2) + "°C";
            return outputVal.innerHTML;

          case "fah":
            const tempVar = 1.8 * (input - 273.15) + 32;
            outputVal.innerHTML = tempVar.toFixed(2) + "°F";
            return outputVal.innerHTML;

          case "newt":
            outputVal.innerHTML = (input / 3.03).toFixed(2) + "°N";
            return outputVal.innerHTML;

          case "kal":
            outputVal.innerHTML = (input * 1).toFixed(2) + "K";
            return outputVal.innerHTML;

          case "reau":
            outputVal.innerHTML =
              ((input - 273.15) * (4 / 5)).toFixed(2) + "°R";
            return outputVal.innerHTML;

          default:
            outputVal.innerHTML = "Wrong value";
        }
        break;

      case "newt":
        let newToCel = input / 0.33;
        changeColor(newToCel);
        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = (input / 0.33).toFixed(2) + "°C";
            return outputVal.innerHTML;

          case "fah":
            outputVal.innerHTML = ((input * 60) / 11 + 32).toFixed(2) + "°F";
            return outputVal.innerHTML;

          case "newt":
            outputVal.innerHTML = (input * 1).toFixed(2) + "°N";
            return outputVal.innerHTML;

          case "kal":
            const tempVar = input / 0.33 + 273.15;
            outputVal.innerHTML = tempVar.toFixed(2) + "K";
            return outputVal.innerHTML;

          case "reau":
            outputVal.innerHTML = ((input * 80) / 33).toFixed(2) + "°R";
            return outputVal.innerHTML;

          default:
            outputVal.innerHTML = "Wrong value";
        }
        break;

      case "reau":
        let reauToCel = input * 1.25;
        changeColor(reauToCel);

        switch (changeTo()) {
          case "cel":
            outputVal.innerHTML = (input * 1.25).toFixed(2) + "°C";
            return outputVal.innerHTML;

          case "fah":
            const tempVar1 = input * 2.25 + 32;

            outputVal.innerHTML = tempVar1.toFixed(2) + "°F";
            return outputVal.innerHTML;

          case "newt":
            outputVal.innerHTML = (input * 0.4125).toFixed(2);

            return outputVal.innerHTML;

          case "kal":
            const tempVar3 = input * 1.25 + 273.15;
            outputVal.innerHTML = tempVar3.toFixed(2);

            return outputVal.innerHTML;

          case "reau":
            outputVal.innerHTML = (input * 1).toFixed(2);

            return outputVal.innerHTML;

          default:
            outputVal.innerHTML = "Wrong value";
        }
        break;

      default:
        return "Wrong Output";
    }
  });

// getSelectedFromValue();
// let input = inputVal.value;
// mercury.style.cssText = `height : 200px width: 20px background-color: orange position: absolute left:60%  right: 0 top: 0 bottom: 5% margin auto;`;
