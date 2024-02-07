import './App.css';
import {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addNumbers } from './Services/dataServices.js';


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

  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');
  const [result, setResult] = useState('');

  const getResult = async () => {
    const response = await addNumbers(numOne, numTwo);
    setResult(response);
  }

  return (
    <>
      <Button variant="primary" onClick={() => clickFunction()} >Iterate</Button>{' '}
      <p>{count}</p>

      <input onChange={(e) => setInputField(e.target.value)} ></input>
      <p>{inputField}</p>

      <Row>
      <Col lg={6} className='d-flex justify-content-center' >
        <input onChange={(e) => setNumOne(e.target.value)}></input>
      </Col>
      <Col lg={6} className='d-flex justify-content-center' >
        <input onChange={(e) => setNumTwo(e.target.value)} ></input>
      </Col>
      </Row>
      <Row>
        <Col lg={12} className='d-flex justify-content-center' >
        <Button variant="primary" onClick={() => getResult()} >Get Results</Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center' >
        <p>{result}</p>
        </Col>
      </Row>
    </>
  );
}

export default App;
