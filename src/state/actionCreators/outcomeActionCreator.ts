import { store } from '../store';
import { ActionType } from '../constants/eventsConstants';
import { EventOutcomeInterface } from '../actions/outcomeInterfaces';

export const fetchOutcomeData = (data: EventOutcomeInterface) => {
  store.dispatch({
    type: ActionType.EVENT_OUTCOME_REQUEST,
  });
  try {
    store.dispatch({
      type: ActionType.EVENT_OUTCOME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    store.dispatch({
      type: ActionType.EVENT_OUTCOME_FAIL,
      payload: error.message,
    });
  }
};
