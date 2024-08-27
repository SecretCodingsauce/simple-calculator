
import { useState } from 'react';
import './App.css';


 

function App() {
   
  let operators=["+","-","/","*"]
  
    const [displayValue, setDisplayValue] = useState('0'); // Current display value
    
    
   
  // Function to handle number and dot button clicks
 const handleNumberClick = (value) => {
 
  if (value === '.' && displayValue[displayValue.length-1]===".") {
    return;
}else if (operators.includes(displayValue[displayValue.length-2]) && displayValue[displayValue.length-1]==="0" && value===0){
  return
}else if (displayValue==="0") {
    setDisplayValue(`${value}`)
}
 else{ setDisplayValue((prev) => prev + value);}
};



    // Function to handle operator button clicks (+, -, *, /)
    const handleOperatorClick = (value) => {
      
      if (operators.includes(displayValue[displayValue.length-1]) ) {
        return;
    } 
      
      if ((displayValue && displayValue!==0) ||value==="-") {
           
            setDisplayValue(displayValue+value); 
        }
       
    };

    // Function to handle the equal button (=)
    function calculate(expression) {
      // Extract numbers and operators using regular expressions
      const numbers = expression.split(/[-+*/]/).map(Number);
      const operators = expression.split(/[^-+*/]+/).filter(Boolean);
  
      // Perform the calculation
      let result = numbers[0];
      for (let i = 0; i < operators.length; i++) {
          const operator = operators[i];
          const nextNumber = numbers[i + 1];
  
          switch (operator) {
              case '+':
                  result += nextNumber;
                  break;
              case '-':
                  result -= nextNumber;
                  break;
              case '*':
                  result *= nextNumber;
                  break;
              case '/':
                  result /= nextNumber;
                  break;
              default:
                  throw new Error("Unknown operator: " + operator);
          }
      }
  
     setDisplayValue(result);
  }

    // Function to handle the clear button (C or AC)
    const handleClearClick = () => {
        setDisplayValue('0');
       
    };
  
    const handleBkspClick=()=>{
     if(displayValue.length===1){
        setDisplayValue("0")
     }
     else{
      setDisplayValue(
        (d)=> d.slice(0, -1)
      )}
    }

  return (
    <div className="App">
      <h1 className=' text-2xl font-semibold'>Simple Calculator</h1>

      <div className="calculator-main">
      <div  id="display">{displayValue}</div>
      <div id='disp'></div>
      <div className="buttons">
      <button className="btn" id="clear" onClick={() =>handleClearClick()}>AC</button>
      <button className="btn op-btn" id="multiply" onClick={() => handleOperatorClick("*")}>X</button>
      <button className="btn op-btn" id="divide" onClick={() => handleOperatorClick("/")}>/</button>
      <button className="btn num-btn" id="backspace" onClick={() =>handleBkspClick()}>C</button>
      <button className="btn num-btn" id="seven" onClick={() => handleNumberClick(7)}>7</button>
      <button className="btn num-btn" id="eight" onClick={() => handleNumberClick(8)}>8</button>
      <button className="btn num-btn" id="nine" onClick={() => handleNumberClick(9)}>9</button>
      <button className="btn op-btn" id="subtract" onClick={() => handleOperatorClick("-")}>-</button>
      <button className="btn num-btn" id="four" onClick={() => handleNumberClick(4)}>4</button>
      <button className="btn num-btn" id="five" onClick={() => handleNumberClick(5)}>5</button>
      <button className="btn num-btn" id="six" onClick={() => handleNumberClick(6)}>6</button>
      <button className="btn op-btn" id="add" onClick={() => handleOperatorClick("+")}>+</button>
      <button className="btn num-btn" id="one" onClick={() => handleNumberClick(1)}>1</button>
      <button className="btn num-btn" id="two" onClick={() => handleNumberClick(2)}>2</button>
      <button className="btn num-btn" id="three" onClick={() => handleNumberClick(3)}>3</button>
      <button className="btn op-btn" id="equals" onClick={() => calculate(displayValue)}>=</button>
      <button className="btn num-btn" id="zero" onClick={() => handleNumberClick(0)}>0</button>
      <button className="btn num-btn" id="decimal" onClick={() => handleNumberClick(".")}>.</button>
      <button className="btn num-btn" id="eight" onClick={() => handleNumberClick("(")}>(</button>
      <button className="btn num-btn" id="eight" onClick={() => handleNumberClick(")")}>)</button>
      </div>
      </div>
    </div>
  );}


export default App;
