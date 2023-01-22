
  function calculate() {
    var input = document.getElementById("display").value;
    var result = eval(input);
    document.getElementById("display").value = result;
  }

  function addToDisplay(val) {
    document.getElementById("display").value += val;
  }

  function clearDisplay() {
    document.getElementById("display").value = "";
  }

