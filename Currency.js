let apiKey = "eac9075ad30be9c7acb61db0";
let selectTag1 = document.querySelector(".select1");
let selectTag2 = document.querySelector(".select2");
let optionsVal = document.querySelectorAll("select");
let fromCurrency = document.querySelector(".from select");
let toCurrency = document.querySelector(".to select");
let input = document.querySelector("input");
let outputVal = document.querySelector("output");
let swapping = document.querySelector(".swap");

// To get the countryName from dataJSON
let countryNameJSON = Object.values(dataJSON).map(
  (country) => country.countryName
);

// To get the currencyCode from dataJSON

let currencyCodeJSON = Object.values(dataJSON).map(
  (currencyName) => currencyName.currency
);

// To get the symbol of the country
let symbolJSON = Object.values(dataJSON).map((allSymbol) => allSymbol.symbol);

// Converted the select menu with names of the country
try {
  for (i = 0; i <= 1; i++) {
    for (j = 0; j < 249; j++) {
      // if ((duplicateElements[j] = currencyCodeJSON[j])) {
      let optionTag = `<option value='${currencyCodeJSON[j]}'> ${countryNameJSON[j]} </option>`;
      optionsVal[i].insertAdjacentHTML("beforeend", optionTag);
    }
    selectTag1.addEventListener("change", (e) => flagChange1(e.target));
    selectTag2.addEventListener("change", (e) => flagChange2(e.target));
  }
} catch (error) {
  /* Here I avoided the error msg which was simply showing for insertAdjacentHTML even when it was working */
  console.log(error.message);
}

function flagChange1(element) {
  // Getting flags
  for (code in dataJSON) {
    if (
      dataJSON[code].countryName ==
      selectTag1.options[selectTag1.selectedIndex].text
    ) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${code.toLowerCase()}.png`;
    }
  }
}

function flagChange2(element) {
  // Getting flags
  for (code in dataJSON) {
    if (
      dataJSON[code].countryName ==
      selectTag2.options[selectTag2.selectedIndex].text
    ) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${code.toLowerCase()}.png`;
    }
  }
}
/* 
  /* Tried but didn't work */
//   for (code in dataJSON) {
//     if ((currencyCodeJSON = element.value)) {
//       console.log(currencyCodeJSON);
//       let imgTag = element.parentElement.querySelector("img");
//       imgTag.src = `https://flagcdn.com/48x36/${code.toLowerCase()}.png`;
//     }
//     // console.log(`https://flagcdn.com/48x36/${code.toLowerCase()}.png`);
//   }
// }

//   Object.entries(dataJSON).forEach(function (curVal, i) {
//     if (curVal[1].currency == element.value) {
//       // console.log(curVal[0].toLowerCase());
//       // console.log(`https://flagcdn.com/48x36/${curVal[0].toLowerCase()}.png`);
//       let imgTag = element.parentElement.querySelector("img");
//       //   imgTag.src = curVal[1].currency.includes(duplicateElements[i])
//       //     ? ""
//       //     : `https://flagcdn.com/48x36/${curVal[0].toLowerCase()}.png`;

//       imgTag.src = `https://flagcdn.com/48x36/${curVal[0].toLowerCase()}.png`;
//     }
//   });
// }

//   Object.entries(dataJSON).forEach(function (curVal, i) {
//     // console.log(curVal[0].toLowerCase());
//     // console.log(`https://flagcdn.com/48x36/${curVal[0].toLowerCase()}.png`);
//     let imgTag = element.parentElement.querySelector("img");
//     console.log(`https://flagcdn.com/48x36/${curVal[1].countryName}.png`);
//     imgTag.src = curVal[1].currency = element.value
//       ? `https://flagcdn.com/48x36/${curVal[0].toLowerCase()}.png`
//       : "";
//   });
// }

// // console.log(Object.keys(dataJSON));
// for (flag of Object.keys(dataJSON)) {
//   if ((countryNameJSON = myNewFunction)) {
//     // console.log(curVal[0].toLowerCase());
//     // console.log(`https://flagcdn.com/48x36/${curVal[0].toLowerCase()}.png`);
//     let imgTag = element.parentElement.querySelector("img");
//     console.log(`https://flagcdn.com/48x36/${flag.toLowerCase()}.png`);
//     if ()
//     // imgTag.src = `https://flagcdn.com/48x36/${Object.keys(
//     //   dataJSON.toLower
//     // )}.png`;
//   }
//
// console.log(Object.keys(dataJSON)[currencyCodeJSON.indexOf("AFN")]);
// }

// Getting flag didn't work
//   for (let code in country_list) {
//     if (code == element.value) {
//       let imgTag = element.parentElement.querySelector("img");
//       console.log(
//         `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`
//       );
//       imgTag.src = `https://flagcdn.com/48x36/${country_list[
//         code
//       ].toLowerCase()}.png`;
//     }
//   }
// } */

// 'change' event is used to change the fromCurrency.value everytime we change the option .
// While using it , it must still contain ".value"
fromCurrency.addEventListener("change", () => fromCurrency.value);
toCurrency.addEventListener("change", () => toCurrency.value);

function countryExchangeRate() {
  /* fromCurrency.value will change the amount according to the selected value in the options tag , like if its india then the rate will
   be mulitplied acc to the indian currency with the rest of the countries. This will maintain the change of currency properly if its
   from USD to INR or EUR to USD as definitely if is wasnt the case and all the country data had same base then we couldn't select
   the fromCountry because it would've been fixed */

  let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
  // let url = `https://v6.exchangerate-api.com/v6/latest/${fromCurrency.value}`;
  fetch(url)
    .then((res) => {
      if (!res.ok)
        throw new Error(
          "The Limit of API usage has been reached for the month."
        );
      return res.json();
    })
    .then((result) => {
      /* Here the currency must still be the ".value" , this indicates the value of the option which we've assigned (3 digit code) ,
      like if we select India in option , then toCurrency.value will become INR and according to the base (fromCurrency) its value will
      be displayed.*/

      let toValAPI = result.conversion_rates[toCurrency.value];
      let output = (input.value * toValAPI).toFixed(2);

      for (code in dataJSON) {
        if (input.value <= 99999999) {
          if (toCurrency.value == dataJSON[code].currency) {
            outputVal.innerHTML = `${input.value} ${fromCurrency.value} = ${dataJSON[code].symbol} ${output}`;
          }
        } else {
          outputVal.innerHTML = "The number is too big";
        }
      }
    })

    .catch((err) => alert(err));
}

// To set default value as 0 in the output .
if (input.value != 0) {
  outputVal.innerHTML = 0;
}

// Swapping the countries
// swapping.addEventListener("click", (e) => {
//   let temp = fromCurrency.value;
//   fromCurrency.value = toCurrency.value;
//   toCurrency.value = temp;

//   countryExchangeRate();
//   flagChange1(fromCurrency);
//   flagChange2(toCurrency);
// });

input.addEventListener("keypress", (e) => {
  // Using the Enter key to trigger the output
  if (e.key === "Enter") {
    countryExchangeRate();
  }
  // Disabling the use of '-' & '+' key
  if (e.key === "-" || e.key === "+") {
    e.preventDefault();
  }
});
