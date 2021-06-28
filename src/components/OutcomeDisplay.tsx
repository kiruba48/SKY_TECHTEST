import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { outcomeActionCreator } from '../state';
import { WebSocketContext } from '../contexts/websocket';

interface OutcomeList {
  outcomes: number[];
}

export const OutcomeDisplay: React.FC<OutcomeList> = ({ outcomes }) => {
  const dispatch = useDispatch();
  const ws = useContext(WebSocketContext);

  //   let eventOutcomePayload = {
  //     type: 'getOutcome',
  //     id: outcome,
  //   };

  //   dispatch(
  //     outcomeActionCreator.fetchEventOutcomes(ws, eventOutcomePayload)
  //   );
  //   const outcomesToDispatch = outcomes.map((outcome) => ({
  //     type: 'getOutcome',
  //     id: outcome,
  //   }));
  //   console.log(outcomesToDispatch);

  useEffect(() => {
    outcomes.map((outcome) => {
      const outcomePayload = {
        type: 'getOutcome',
        id: outcome,
      };
      return setTimeout(() => {
        dispatch(outcomeActionCreator.fetchEventOutcomes(ws, outcomePayload));
      }, 2000);
      // if (index === outcomes.length - 1) {
      // }
    });
  }, [ws, outcomes, dispatch]);

  return <div>Display Outcome</div>;
};

export default OutcomeDisplay;
