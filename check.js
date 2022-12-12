function check() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / (height ^ 2);
    let result = "";
    if (bmi < 18)
       result = "underweight";
    else if (bmi < 25.0)
        result = "normal";
    else if (bmi < 30.0)
        result = "overweight";
    else
        result = "obese";
    document.getElementById("result").innerHTML = "Your BMI: " + bmi + ". You are " + result +".";
}