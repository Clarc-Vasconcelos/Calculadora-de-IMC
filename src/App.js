import './App.css';
import { useState } from 'react';

const App = () => {
  const[weight, setWeight] = useState('')
  const[height, setHeight] = useState('')
  const[result, setResult] = useState('')
  
  
  

  const getWeight = (e) => {
    setWeight(e.target.value)
  }
  const getHeight = (e) => {
    setHeight(e.target.value)
  }
  const imc = (e) => {
    e.preventDefault();
    setResult(eval(weight/(height*height)).toFixed(2))
}

  
  let textDescription;
  
  if (weight === '' || height === '') {
     textDescription = 'Preencha todos os campos'
  } else if (result > 19 && result < 24) {
    textDescription  = 'peso ideal ' + 'IMC = ' + result
  } else if (result > 24 && result <  29) {
    textDescription = 'sobrepeso ' + 'IMC = ' + result
  } else if (result > 29 && result <  34) {
    textDescription = 'obesidade grau I ' + 'IMC = ' + result
  } else if (result > 34 && result <  40) {
    textDescription = 'obesidde grau II ' + 'IMC = ' + result
  } else if (result >= 40) {
    textDescription = 'obesidade grau ' + 'IMC = ' + result
  } else {
    textDescription = 'Preencha todos os campos'
  }

  return (
    <div className='bigBox'>
      <form onSubmit={imc} className='formStyle'>
      
        <h1>Calculadora IMC</h1>
        <label>Peso</label>
        <input type='text' value={weight} onChange={getWeight} placeholder='digite seu peso'/>
        <label>Altura</label>
        <input type='text' value={height} onChange={getHeight} placeholder='digite sua altura' className='inputWithDescription'/>
        <p className='descriptionInput'>Use ponto invés de vírgula (ex: 1.80)</p>
        <button type='submit'>Calcular IMC</button>
        <br />
        <label>IMC</label>
        <div className='boxResult'>{result}</div>
        <label>Descrição</label>
        <div className='boxTextDescription'>{textDescription}</div>      
      </form>
    </div>
    )
}

export default App;
