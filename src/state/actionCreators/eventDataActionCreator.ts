import { Dispatch } from 'redux'; //type def for dispatch function
import { store } from '../store';
import { ActionType } from '../constants/eventsConstants';
import {
  EventDataInterface,
  EventDataAction,
} from '../actions/eventDataInterface';

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

export const resetEventData =
  () => async (dispatch: Dispatch<EventDataAction>) => {
    dispatch({
      type: ActionType.EVENT_DATA_RESET,
    });
  };
