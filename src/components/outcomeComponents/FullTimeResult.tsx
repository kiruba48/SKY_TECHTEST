import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from '../../hooks/useTypedSelector';
import { EventOutcomeInterface } from '../../state/actions/outcomeInterfaces';
import { BettingOddsViewContext } from '../../contexts/BettingOddsViewProvider';
import { betSlipActionCreator } from '../../state';

interface FTRComponent {
  outcome: EventOutcomeInterface;
}

const FullTimeResult: React.FC<FTRComponent> = ({ outcome }) => {
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
        <ListGroup.Item style={{ width: '50rem' }}>
          {outcome.name}
        </ListGroup.Item>

        <ListGroup.Item
          action
          style={{ color: 'red' }}
          onClick={dispatchOutcome}
        >
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
