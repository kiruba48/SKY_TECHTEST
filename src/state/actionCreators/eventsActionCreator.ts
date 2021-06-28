import { ActionType } from '../constants/eventsConstants';
import { Dispatch } from 'redux'; //type def for dispatch function
import { Action, EventPayload } from '../actions/eventsAction';

export const fetchEvents =
  (ws: any, eventPayload: EventPayload) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.EVENT_LIST_REQUEST,
    });

    try {
      ws.onopen = () => {
        ws.send(JSON.stringify(eventPayload));
      };
      ws.onmessage = (event: any) => {
        const { type, data } = JSON.parse(event.data);
        // console.log(data);

        switch (type) {
          case 'LIVE_EVENTS_DATA': {
            dispatch({
              type: ActionType.EVENT_LIST_SUCCESS,
              payload: data,
            });
          }
        }
      };
    } catch (error) {
      dispatch({
        type: ActionType.EVENT_LIST_FAIL,
        payload: error.message,
      });
    }
  };
