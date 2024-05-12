window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let obj = {
   amount : document.getElementById('loan-amount').value = 1200,
   years : document.getElementById('loan-years').value = 5,
   rate : document.getElementById('loan-rate').value = 7
  }

  return calculateMonthlyPayment(obj)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let obj = getCurrentUIValues()
  let monthly = calculateMonthlyPayment(obj)

  updateMonthly(monthly)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let {amount, years, rate} = values
  rate /= 100
  rate /= 12
  years *= 12
  
  let monthlyPayment = (amount * rate) / (1 - (1 + rate)**-(years))

  return `${(Math.round(monthlyPayment * 100) / 100).toFixed(2)}`
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const valUi = document.getElementById('monthly-payment')
  valUi.innerHTML = `$ ${monthly}`

}

