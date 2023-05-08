const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // convert cm to m

  const bmi = weight / (height * height);

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(1)}`;
});
