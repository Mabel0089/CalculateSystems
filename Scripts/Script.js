function calculateInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);
    var interest = (principal * rate * time) / 100;
    var totalAmount = principal + interest;
    document.getElementById('result').innerText = 'ดอกเบี้ย: ' + interest + ' บาท, ยอดรวม: ' + totalAmount + ' บาท';
}
function calculate() {
    var result;
      var birthYear = parseInt(document.getElementById('birthYear').value);
      var currentYear = new Date().getFullYear();
      result = currentYear - birthYear;
      document.getElementById('result').innerText = 'อายุของคุณ: ' + result + ' ปี';
}
  function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");
  
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      resultDiv.innerHTML = "Please enter valid height and weight.";
      return;
    }
  
    var bmi = weight / ((height / 100) ** 2);
    var category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
  }