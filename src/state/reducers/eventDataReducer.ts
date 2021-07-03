import { ActionType } from '../constants/eventsConstants';
import {
  EventDataInterface,
  EventDataAction,
} from '../actions/eventDataInterface';

interface EventDataState {
  loading: boolean;
  error: string | null;
  data?: EventDataInterface;
}

const initialState: EventDataState = {
  loading: false,
  error: null,
};

export const eventDataReducer = (
  state = initialState,
  action: EventDataAction
) => {
  switch (action.type) {
    case ActionType.EVENT_DATA_REQUEST:
      return { loading: true, error: null };
    case ActionType.EVENT_DATA_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.EVENT_DATA_FAIL:
      return { loading: false, error: action.payload };
    case ActionType.EVENT_DATA_RESET:
      return { loading: false, error: null };
    default:
      return state;
  }
};
