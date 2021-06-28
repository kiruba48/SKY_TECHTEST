import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const MyBetSlip: React.FC = () => {
  return (
    <>
      <Jumbotron fluid style={{ backgroundColor: 'darkblue' }}>
        <Container className='py-3'>
          <h3 style={{ color: 'white' }}>Football Live</h3>
        </Container>
      </Jumbotron>
    </>
  );
};

export default MyBetSlip;
