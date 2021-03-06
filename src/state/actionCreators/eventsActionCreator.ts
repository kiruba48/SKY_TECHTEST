import { store } from '../store';
import { ActionType } from '../constants/eventsConstants';
import { EventInterface } from '../actions/eventsAction';

export const fetchEvents = (data: EventInterface[]) => {
  store.dispatch({
    type: ActionType.EVENT_LIST_REQUEST,
  });
  try {
    store.dispatch({
      type: ActionType.EVENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    store.dispatch({
      type: ActionType.EVENT_LIST_FAIL,
      payload: error.message,
    });
  }
};
