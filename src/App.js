
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Simple Calculator</h1>

      <div className="calculator-main">
      <div  id="display">0</div>

      <div className="buttons">
      <button className="btn" id="clear" onClick={() => console.log("lol")}>AC</button>
      <button className="btn op-btn" id="multiply" onClick={() => console.log("lol")}>X</button>
      <button className="btn op-btn" id="divide" onClick={() => console.log("lol")}>/</button>
      <button className="btn num-btn" id="backspace" onClick={() => console.log("lol")}>C</button>
      <button className="btn num-btn" id="seven" onClick={() => console.log("lol")}>7</button>
      <button className="btn num-btn" id="eight" onClick={() => console.log("lol")}>8</button>
      <button className="btn num-btn" id="nine" onClick={() => console.log("lol")}>9</button>
      <button className="btn op-btn" id="subtract" onClick={() => console.log("lol")}>-</button>
      <button className="btn num-btn" id="four" onClick={() => console.log("lol")}>4</button>
      <button className="btn num-btn" id="five" onClick={() => console.log("lol")}>5</button>
      <button className="btn num-btn" id="six" onClick={() => console.log("lol")}>6</button>
      <button className="btn op-btn" id="add" onClick={() => console.log("lol")}>+</button>
      <button className="btn num-btn" id="one" onClick={() => console.log("lol")}>1</button>
      <button className="btn num-btn" id="two" onClick={() => console.log("lol")}>2</button>
      <button className="btn num-btn" id="three" onClick={() => console.log("lol")}>3</button>
      <button className="btn op-btn" id="equals" onClick={() => console.log("lol")}>=</button>
      <button className="btn num-btn" id="zero" onClick={() => console.log("lol")}>0</button>
      <button className="btn num-btn" id="decimal" onClick={() => console.log("lol")}>.</button>
      </div>
      </div>
    </div>
  );
}

export default App;
