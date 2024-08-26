
import { useState } from 'react';
import './App.css';


 

function App() {
   
  let operators=["+","-","/","*"]
  
    const [displayValue, setDisplayValue] = useState(''); // Current display value
    const [operator, setOperator] = useState(null);       // Current operator (+, -, *, /)
    const [prevValue, setPrevValue] = useState(null);     // Previous value before the operator

   
  // Function to handle number and dot button clicks
 const handleNumberClick = (value) => {
 
  if (value === '.' && displayValue.includes('.')) {
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
     
      if (operators.includes(displayValue[displayValue.length-1])) {
        return;
    } 
      
      if (displayValue && displayValue!==0) {
            setPrevValue(displayValue);
            setDisplayValue(displayValue+value); 
        }
        setOperator(value);
    };

    // Function to handle the equal button (=)
    const handleEqualClick = () => {
        if (prevValue !== null && operator && displayValue) {
            const currentValue = parseFloat(displayValue);
            const previousValue = parseFloat(prevValue);

            let result;
            switch (operator) {
                case '+':
                    result = previousValue + currentValue;
                    break;
                case '-':
                    result = previousValue - currentValue;
                    break;
                case '*':
                    result = previousValue * currentValue;
                    break;
                case '/':
                    result = previousValue / currentValue;
                    break;
                default:
                    return;
            }
            setDisplayValue(result.toString());
            setPrevValue(null);
            setOperator(null);
        }
    };

    // Function to handle the clear button (C or AC)
    const handleClearClick = () => {
        setDisplayValue('0');
        setPrevValue(null);
        setOperator(null);
    };
  


  return (
    <div className="App">
      <h1>Simple Calculator</h1>

      <div className="calculator-main">
      <div  id="display">{displayValue}</div>
      <div id='disp'></div>
      <div className="buttons">
      <button className="btn" id="clear" onClick={() =>handleClearClick()}>AC</button>
      <button className="btn op-btn" id="multiply" onClick={() => handleOperatorClick("*")}>X</button>
      <button className="btn op-btn" id="divide" onClick={() => handleOperatorClick("/")}>/</button>
      <button className="btn num-btn" id="backspace" onClick={() => console.log("lol")}>C</button>
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
      <button className="btn op-btn" id="equals" onClick={() => handleEqualClick()}>=</button>
      <button className="btn num-btn" id="zero" onClick={() => handleNumberClick(0)}>0</button>
      <button className="btn num-btn" id="decimal" onClick={() => handleNumberClick(".")}>.</button>
      </div>
      </div>
    </div>
  );}


export default App;
