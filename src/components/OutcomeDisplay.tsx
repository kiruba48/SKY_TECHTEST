import React, { useEffect, useMemo } from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { MarketDataInterface } from '../state/actions/marketDataInterfaces';
import { EventOutcomeInterface } from '../state/actions/outcomeInterfaces';
import BothScoreNoDraw from './outcomeComponents/BothScoreNoDraw';
import HalfTimeFullTime from './outcomeComponents/HalfTimeFullTime';
import FullTimeResult from './outcomeComponents/FullTimeResult';
import { ws } from '../ws';
import Message from './outcomeComponents/Message';

interface OutcomeList {
  outcomes: number[];
  market: MarketDataInterface;
}

export const OutcomeDisplay: React.FC<OutcomeList> = ({ outcomes, market }) => {
  const marketOutcomes = useSelector((state) => state.outcomes);
  const { loading, error, data: outcomesData } = marketOutcomes;

  const filteredOutcomes = useMemo(() => {
    return outcomesData.filter(
      (outcome) => outcome.marketId === market.marketId
    );
  }, [market.marketId, outcomesData]);

  // Populate outcome data with appropriate layouts
  const populateData = (outcome: EventOutcomeInterface) => {
    switch (market.name) {
      case 'Half-Time/Full-Time':
        return (
          outcome.status.displayable && (
            <HalfTimeFullTime outcome={outcome} key={outcome.outcomeId} />
          )
        );
      case 'Both Score No Draw':
        return (
          outcome.status.displayable && (
            <BothScoreNoDraw outcome={outcome} key={outcome.outcomeId} />
          )
        );
      case 'Full Time Result':
        return (
          outcome.status.displayable && (
            <FullTimeResult outcome={outcome} key={outcome.outcomeId} />
          )
        );
      default:
        return;
    }
  };

  const sendMessage = (): void => {
    outcomes.map((outcome) => {
      return ws.send(
        JSON.stringify({
          type: 'getOutcome',
          id: outcome,
        })
      );
    });
  };

  useEffect(() => {
    if (outcomesData.length === 0) {
      sendMessage();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {error && <Message variant='danger'>{error}</Message>}
      {!loading && !error && filteredOutcomes.map(populateData)}
    </>
  );
};

export default OutcomeDisplay;
