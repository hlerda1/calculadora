//import express from 'express' (no es necesario para este proyecto)
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const Result = require('./models')
let result

const url = "mongodb+srv://lerda1:Prog2323@cluster0-dfaos.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url, {}, (error) => {
  if(error){
    console.log(error)
  }else{
    console.log("Base de datos conectada");
  }
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  //console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  //let result
  switch (req.params.selectedOperator) {
    case '*':
      result = firstValue * secondValue
      break
    case '+':
      result = firstValue + secondValue
      break
    case '-':
      result = firstValue - secondValue
      break
    case '/':
      result = firstValue / secondValue
      break
    case 'M+':
    case 'M-':
      result = mem
      break
    default:
      break
  }
  res.send({ result: result })
})

//PATH para suma
app.get('/sum/:firstValue/:secondValue', function (req, res) {
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)
  result = firstValue + secondValue

  const newResult = new Result({value: result})
  newResult.save((error, result) => {
    if(error)
    {
      console.log(error);
    } else {
      console.log(result);
    }
  })

  res.send({ result: result})
})

//PATH para resta
app.get('/sub/:firstValue/:secondValue', function (req, res) {
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  res.send({ result: result = firstValue - secondValue})
})

//PATH para multiplicacion
app.get('/mult/:firstValue/:secondValue', function (req, res) {
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  res.send({ result: result = firstValue * secondValue})
})

//PATH para division
app.get('/div/:firstValue/:secondValue', function (req, res) {
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  res.send({ result: result = firstValue / secondValue})
})

//localhost por defecto

app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000")
})
