import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks/useTypedSelector';
import { ListGroup } from 'react-bootstrap';
import { EventOutcomeInterface } from '../../state/actions/outcomeInterfaces';
import { BettingOddsViewContext } from '../../contexts/BettingOddsViewProvider';
import { betSlipActionCreator } from '../../state';

interface BSNDComponent {
  outcome: EventOutcomeInterface;
}

const BothScoreNoDraw: React.FC<BSNDComponent> = ({ outcome }) => {
  const { bettingView } = useContext(BettingOddsViewContext);
  const outcomeId = outcome.outcomeId;

  const fraction = `${outcome.price.num} / ${outcome.price.den}`;
  const decimal = outcome.price.decimal;
  const dispatch = useDispatch();

  // Bets Data from state
  const bettingData = useSelector((state) => state.betSlip);
  const foundOnBetSlip = () =>
    bettingData.find((bet) => bet.outcomeId === outcome.outcomeId);

  const dispatchOutcome = () => {
    if (foundOnBetSlip()) {
      dispatch(betSlipActionCreator.removeItemAction(outcomeId));
    } else {
      dispatch(betSlipActionCreator.addToBetSlipAction(outcome));
    }
  };

  return (
    <>
      <ListGroup horizontal>
        <ListGroup.Item style={{ width: '100rem' }}>
          {outcome.name}
        </ListGroup.Item>
        {outcome.status.suspended ? (
          <ListGroup.Item style={{ color: 'gray', padding: '0 10.84rem' }}>
            Susp
          </ListGroup.Item>
        ) : (
          <ListGroup.Item
            action
            style={{ color: 'red', paddingLeft: '9rem' }}
            onClick={dispatchOutcome}
          >
            {foundOnBetSlip()
              ? 'Selected'
              : bettingView === 'fractional'
              ? fraction
              : bettingView === 'decimal'
              ? decimal
              : null}
          </ListGroup.Item>
        )}
      </ListGroup>
    </>
  );
};

export default BothScoreNoDraw;
