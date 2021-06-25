import { ActionType } from '../constants/eventsConstants';
import { Dispatch } from 'redux'; //type def for dispatch function
import { Action } from '../actions/eventsAction';

export const fetchEvents = (ws: any) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.EVENT_LIST_REQUEST,
  });

  try {
    // create websocket connection
    // const websocket = new WebSocket('ws://localhost:8889');
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: true }));
    };

    ws.onmessage = (event: any) => {
      const events = JSON.parse(event.data);
      console.log(events);

      dispatch({
        type: ActionType.EVENT_LIST_SUCCESS,
        payload: events,
      });
    };
  } catch (error) {
    dispatch({
      type: ActionType.EVENT_LIST_FAIL,
      payload: error.message,
    });
  }
};
