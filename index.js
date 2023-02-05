var submit1 = document.getElementById("submit1");
submit1.addEventListener("click", function () {
  var number1 = document.getElementById("number1").value;
  var par = parseInt(number1);
  var number2 = document.getElementById("number2").value;
  var par2 = parseInt(number2);
  var result = par * par2;
  document.getElementById("amount").innerHTML = result;
});
