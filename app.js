window.onload = function(){

  let firstvalue
  let selectedOperator
  let secondValue

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
  }

  const operatorFunction = function (event) {
    firstvalue = parseFloat(display.innerText)
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
        result = firstvalue + secondValue
        break;
      case '-':
        result = firstvalue - secondValue
        break;
      case '*':
        result = firstvalue * secondValue
        break;
      case '/':
        result = firstvalue / secondValue
        break;
      default:

    }
    display.innerText = result;
  }
}
