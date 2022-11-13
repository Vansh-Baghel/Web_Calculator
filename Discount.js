// console.log((20 * 10) / 100);

let inputPrice = document.querySelector(".valueInput");
let discountPrice = document.querySelector(".discountInput");
let discountOutAmount = document.querySelector(".discountOutput");
let finalOutAmount = document.querySelector(".finalOutput");
let convertBtn = document.querySelector(".Convert");
let resetBtn = document.querySelector(".Reset");
let alert = document.querySelector(".alertMsg");
let closeAlert = document.querySelector(".fa-times");

function calc() {
  if (discountPrice.value > 100) {
    // To avoid the calculation for values more than 100%
    alert.style.display = "grid";
    // alert("Discount price exceeds the limit");
  } else {
    let evalFinalOutput = eval((inputPrice.value * discountPrice.value) / 100);
    let calcDiscountAmount = inputPrice.value - evalFinalOutput;
    finalOutAmount.innerHTML = `₹ ${calcDiscountAmount}`;
    discountOutAmount.innerHTML = `₹ ${evalFinalOutput}`;
  }
}

closeAlert.addEventListener("click", () => {
  alert.style.display = "none";
});

resetBtn.addEventListener("click", () => {
  inputPrice.value = "";
  discountPrice.value = "";
  finalOutAmount.innerHTML = "";
  discountOutAmount.innerHTML = "";
});

// Using the Enter key to trigger the output
[inputPrice, discountPrice].forEach((item) =>
  item.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      calc();
    }
    // Disabling the use of '-' & '+' key
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
    }
  })
);
