import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Archivo CSS personalizado

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  return (
    <Container className="mt-4 calculator-container">
      <Row>
        <Col xs={12} className="mb-4">
          <input
            type="text"
            className="form-control display-input"
            value={displayValue}
            readOnly
          />
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('7')}
          >
            7
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('8')}
          >
            8
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('9')}
          >
            9
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-secondary"
            className="calc-button"
            onClick={() => handleButtonClick('/')}
          >
            /
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('4')}
          >
            4
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('5')}
          >
            5
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('6')}
          >
            6
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-secondary"
            className="calc-button"
            onClick={() => handleButtonClick('*')}
          >
            *
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('1')}
          >
            1
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('2')}
          >
            2
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('3')}
          >
            3
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-secondary"
            className="calc-button"
            onClick={() => handleButtonClick('-')}
          >
            -
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Button
            variant="outline-primary"
            className="calc-button"
            onClick={() => handleButtonClick('0')}
          >
            0
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-secondary"
            className="calc-button"
            onClick={() => handleButtonClick('.')}
          >
            .
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-success"
            className="calc-button"
            onClick={calculateResult}
          >
            =
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="outline-secondary"
            className="calc-button"
            onClick={() => handleButtonClick('+')}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mt-4">
          <Button
            variant="danger"
            className="calc-button"
            onClick={clearDisplay}
          >
            Limpiar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

