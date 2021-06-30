import { store } from '../store';
import { ActionType } from '../constants/eventsConstants';
import { EventDataInterface } from '../actions/eventDataInterface';

export const fetchEventData = (data: EventDataInterface) => {
  store.dispatch({
    type: ActionType.EVENT_DATA_REQUEST,
  });
  try {
    store.dispatch({
      type: ActionType.EVENT_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    store.dispatch({
      type: ActionType.EVENT_DATA_FAIL,
      payload: error.message,
    });
  }
};
