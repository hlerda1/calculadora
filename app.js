/*window.onload = function(){

  let firstValue;
  let secondValue;
  let selectedOperator = "";
  let memoryValue = null;
  let statusAction = 0;

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
    if(statusAction == 1){
      display.innerText = "";
      statusAction = 0;
      display.innerText += event.target.textContent;
    }
    else {
      display.innerText += event.target.textContent;
      //console.log(event.target.textContent);
    }
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
    if(display.innerText == "" || display.innerText == "ERROR")
    {
      display.innerText = "ERROR";
    }
    else{
      memoryValue += parseFloat(display.innerText);
      display.innerText = memoryValue;
    }

  }

  btnMsubstract.onclick = function (event) {
    if(display.innerText == "" || display.innerText == "ERROR")
    {
      display.innerText = "ERROR";
    }
    else{
      memoryValue -= parseFloat(display.innerText)
      display.innerText = memoryValue
    }
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
    statusAction = 1;
  }
}*/



let firstValue
let secondValue
let selectedOperator
let mem = 0

window.onload = function () {
  const display = document.getElementById("display")
  const btnMc = document.getElementById("btnMc")
  const btnMadd = document.getElementById("btnMadd")
  const btnMsub = document.getElementById("btnMsub")
  const btnDiv = document.getElementById("btnDiv")
  const btnSeven = document.getElementById("btnSeven")
  const btnEight = document.getElementById("btnEight")
  const btnNine = document.getElementById("btnNine")
  const btnMult = document.getElementById("btnMult")
  const btnFour = document.getElementById("btnFour")
  const btnFive = document.getElementById("btnFive")
  const btnSix = document.getElementById("btnSix")
  const btnSub = document.getElementById("btnSub")
  const btnOne = document.getElementById("btnOne")
  const btnTwo = document.getElementById("btnTwo")
  const btnThree = document.getElementById("btnThree")
  const btnAdd = document.getElementById("btnAdd")
  const btnC = document.getElementById("btnC")
  const btnCero = document.getElementById("btnCero")
  const btnDecimal = document.getElementById("btnDecimal")
  const btnEqual = document.getElementById("btnEqual")

  btnSeven.onclick = onClickFunction
  btnEight.onclick = onClickFunction
  btnNine.onclick = onClickFunction
  btnFour.onclick = onClickFunction
  btnFive.onclick = onClickFunction
  btnSix.onclick = onClickFunction
  btnOne.onclick = onClickFunction
  btnTwo.onclick = onClickFunction
  btnThree.onclick = onClickFunction
  btnCero.onclick = onClickFunction

  btnDecimal.onclick = pointFunction

  btnC.onclick = cleanFunction

  btnDiv.onclick = operatorFunction
  btnMult.onclick = operatorFunction
  btnSub.onclick = operatorFunction
  btnAdd.onclick = operatorFunction

  btnEqual.onclick = resultFunction

  btnMc.onclick = mcFunction
  btnMadd.onclick = mAddFunction
  btnMsub.onclick = mSubFunction

  if(!event) {event = windows.event} //para que funcione en ie
}

const onClickFunction = function (event) {
  display.innerText += event.target.textContent
}

const pointFunction = function () {
  display.innerText += '.'
}

const cleanFunction = function () {
  display.innerText = ''
}

const mcFunction = function () {
  mem = 0
}

const mAddFunction = function () {
  mem += parseFloat(display.innerText)
  selectedOperator = event.target.textContent
  display.innerText = ''
}

const mSubFunction = function () {
  mem -= parseFloat(display.innerText)
  selectedOperator = event.target.textContent
  display.innerText = ''
}

const operatorFunction = function () {
  firstValue = parseFloat(display.innerText)
  display.innerText = ''
  selectedOperator = event.target.textContent
}

const resultFunction = function (event) {
  secondValue = parseFloat(display.innerText)

  const options = {
    baseURL: "http://localhost:3000/",
    timeout: 5000,
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }
  // fetch(`http://localhost:3000/getresult/${firstValue}/${secondValue}/${selectedOperator}`, options)
  // .then(res => res.json())
  // .then((response) => {
  //   console.log(response)
  //   display.innerText = response.result
  // })

  let path;

  switch (selectedOperator) {
    case '+':
        path = "sum"
      break
    case '-':
        path = "sub"
      break
    case '*':
        path = "mult"
      break
    case '/':
        path = "div"
      break
    default:
      break
  }

  fetch(`http://localhost:3000/${path}/${firstValue}/${secondValue}`, options)
    .then(res => res.json())
    .then((response) => {
    console.log(response)
    display.innerText = response.result
      })

}
