import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { EventOutcomeInterface } from '../../state/actions/outcomeInterfaces';
import { BettingOddsViewContext } from '../../contexts/BettingOddsViewProvider';

interface FTRComponent {
  outcome: EventOutcomeInterface;
}

const FullTimeResult: React.FC<FTRComponent> = ({ outcome }) => {
  const { bettingView } = useContext(BettingOddsViewContext);

  const fraction = `${outcome.price.num} / ${outcome.price.den}`;
  const decimal = outcome.price.decimal;
  return (
    <>
      <ListGroup horizontal>
        <ListGroup.Item style={{ width: '50rem' }}>
          {outcome.name}
        </ListGroup.Item>

        <ListGroup.Item action style={{ color: 'red' }}>
          {bettingView === 'fractional'
            ? fraction
            : bettingView === 'decimal'
            ? decimal
            : null}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default FullTimeResult;
