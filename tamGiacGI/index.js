function tamGiacGi() {
  var a = document.getElementById("canha").value * 1;
  var b = document.getElementById("canhb").value * 1;
  var c = document.getElementById("canhc").value * 1;
  //   console.log({ aValue, bValue, cValue });
  if (a == b && a == c) {
    alert("Đây là tam giác đều");
  } else if ((a == b && b != c) || (a == c && b != c) || (b == c && a != c)) {
    alert("Đây là tam giác cân");
  } else if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    c * c + b * b == a * a
  ) {
    alert("Đây là tam giác vuông");
  } else {
    alert("Đây là tam giác thường");
  }
}
