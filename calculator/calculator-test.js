

it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 1200,
    years: 5,
    rate: 7
  }
  expect(calculateMonthlyPayment(values)).toEqual("23.76")
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 1212,
    years: 5,
    rate: 7 
  }
  expect(calculateMonthlyPayment(values)).toEqual("24.00")
});

