import React, { useState } from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';

interface BetInput {
  betInput: string;
}

const BetSlipForm: React.FC<BetInput> = ({ betInput }) => {
  const [betAmount, setBetAmount] = useState('');

  return (
    <Container>
      <Row>
        <Col>
          <Form.Control
            type='input'
            placeholder='£'
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
          />
        </Col>
        <Col>
          <span>
            Returns: £- {(Number(betAmount) * Number(betInput)).toFixed(2)}
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default BetSlipForm;
