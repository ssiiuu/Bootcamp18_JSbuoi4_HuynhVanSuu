function chanLe() {
  var num1Value = document.getElementById("num1").value * 1;
  var num2Value = document.getElementById("num2").value * 1;
  var num3Value = document.getElementById("num3").value * 1;
  //   console.log({ num1Value, num2Value, num3Value });
  var i = 0;
  var j = 0;
  if (num1Value % 2 == 0) {
    i++;
  } else {
    j++;
  }
  if (num2Value % 2 == 0) {
    i++;
  } else {
    j++;
  }
  if (num3Value % 2 == 0) {
    i++;
  } else {
    j++;
  }
  alert("Có " + i + " số chẵn và Có " + j + " số lẽ");
}
