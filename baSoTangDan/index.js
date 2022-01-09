function xapXep() {
  var num1Value = document.getElementById("num1").value * 1;
  var num2Value = document.getElementById("num2").value * 1;
  var num3Value = document.getElementById("num3").value * 1;
  //   console.log({ num1Value, num2Value, num3Value });
  var t;
  if (num1Value > num2Value) {
    t = num1Value;
    num1Value = num2Value;
    num2Value = t;
  }
  if (num1Value > num3Value) {
    t = num1Value;
    num1Value = num3Value;
    num3Value = t;
  }
  if (num2Value > num3Value) {
    t = num2Value;
    num2Value = num3Value;
    num3Value = t;
  }
  console.log(num1Value, num2Value, num3Value);
  alert(
    "day 3 so tang dan la: " + num1Value + "  " + num2Value + "  " + num3Value
  );
}
