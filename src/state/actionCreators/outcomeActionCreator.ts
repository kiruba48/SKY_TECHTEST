import { ActionType } from '../constants/eventsConstants';
import { Dispatch } from 'redux'; //type def for dispatch function
import {
  OutcomeAction,
  EventOutcomePayload,
} from '../actions/outcomeInterfaces';

export const fetchEventOutcomes =
  (
    ws: any,
    outcomes: number[] //EventOutcomePayload
  ) =>
  async (dispatch: Dispatch<OutcomeAction>) => {
    dispatch({
      type: ActionType.EVENT_OUTCOME_REQUEST,
    });

    try {
      // console.log(eventPayload);
      outcomes.map((outcome) =>
        ws.send(
          JSON.stringify({
            type: 'getOutcome',
            id: outcome,
          })
        )
      );
      // ws.send(JSON.stringify(eventPayload));

      ws.onmessage = (event: any) => {
        const { type, data } = JSON.parse(event.data);

        switch (type) {
          case 'OUTCOME_DATA': {
            // console.log(data);
            dispatch({
              type: ActionType.EVENT_OUTCOME_SUCCESS,
              payload: data,
            });
          }
        }
      };
    } catch (error) {
      dispatch({
        type: ActionType.EVENT_OUTCOME_FAIL,
        payload: error.message,
      });
    }
  };
