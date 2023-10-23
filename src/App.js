import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const App = () => {
  return (
    <Container className='mt-5 text-center'>
      <Row>
        <Col>
          <Image src='https://i.imgur.com/prPdLDk.png' roundedCircle fluid />
          <h2 className='mt-3'>This is an Example Page</h2>
          <p className='lead'>Made by Josh Wilson 2</p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
