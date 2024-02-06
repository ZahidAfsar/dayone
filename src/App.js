import './App.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
//State Variable Function   Hook(useState)
//This state Variable is a int because its initial value is 0 an empty string

  const [count, setCount] = useState(0);

//This state Variable is a string because its initial value is '' an empty string
  const [inputField, setInputField] = useState('');

//what ever is in useState () <-- will be the initial value of the state value

  const clickFunction = () => {
    //inside of setCount we are updating count / altering the state
    setCount(count + 1);
  }

  return (
    <>
      <Button variant="primary" onClick={() => clickFunction()} >Iterate</Button>{' '}
      <p>{count}</p>

      <input onChange={(e) => setInputField(e.target.value)} ></input>
      <p>{inputField}</p>
    </>
  );
}

export default App;
