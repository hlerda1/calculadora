window.onload = function(){

  let firstValue;
  let secondValue;
  let selectedOperator = "";
  let memoryValue = null;

  const display = document.getElementById('display')
  const btnOne = document.getElementById('btnOne')
  const btnTwo = document.getElementById('btnTwo')
  const btnThree = document.getElementById('btnThree')
  const btnFour = document.getElementById('btnFour')
  const btnFive = document.getElementById('btnFive')
  const btnSix = document.getElementById('btnSix')
  const btnSeven = document.getElementById('btnSeven')
  const btnEight = document.getElementById('btnEight')
  const btnNine = document.getElementById('btnNine')
  const btnZero = document.getElementById('btnZero')
  const btnDecimal = document.getElementById('btnDecimal')
  const btnC = document.getElementById('btnC')
  const btnMadd = document.getElementById('btnMadd')
  const btnMsubstract = document.getElementById('btnMsubstract')
  const btnMC = document.getElementById('btnMC')

  //console.log(btnOne)

  const numberOnClick = function(event){
    display.innerText += event.target.textContent;
    //console.log(event.target.textContent);
  }

  btnOne.onclick = numberOnClick;
  btnTwo.onclick = numberOnClick;
  btnThree.onclick = numberOnClick;
  btnFour.onclick = numberOnClick;
  btnFive.onclick = numberOnClick;
  btnSix.onclick = numberOnClick;
  btnSeven.onclick = numberOnClick;
  btnEight.onclick = numberOnClick;
  btnNine.onclick = numberOnClick;
  btnZero.onclick = numberOnClick;
  btnDecimal.onclick = numberOnClick;

  btnC.onclick = function () {
    display.innerText = "";
    selectedOperator = "";
//    firstValue = 0;
//    secondValue = 0;
  }

  btnMadd.onclick = function (event) {
    memoryValue += parseFloat(display.innerText)
    display.innerText = memoryValue
  }

  btnMsubstract.onclick = function (event) {
    memoryValue -= parseFloat(display.innerText)
    display.innerText = memoryValue
  }

  btnMC.onclick = function (event) {
    memoryValue = null;
    display.innerText = memoryValue
  }

  const operatorFunction = function (event) {
    firstValue = parseFloat(display.innerText)
    display.innerText = ""
    selectedOperator = event.target.textContent
  }

  btnDivide.onclick = operatorFunction;
  btnMultiply.onclick = operatorFunction;
  btnAdd.onclick = operatorFunction;
  btnSubstract.onclick = operatorFunction;

  btnEqual.onclick = function(event){
    secondValue = parseFloat(display.innerText)
    let result
    switch (selectedOperator) {
      case '+':
        result = firstValue + secondValue
        break;
      case '-':
        result = firstValue - secondValue
        break;
      case '*':
        result = firstValue * secondValue
        break;
      case '/':
        result = firstValue / secondValue
        break;
      case '':
          result = display.innerText
          break;
      default:
    }
    display.innerText = result;
  }
}
