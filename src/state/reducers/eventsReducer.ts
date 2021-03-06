import { ActionType } from '../constants/eventsConstants';
import { Action, EventInterface } from '../actions/eventsAction';

interface EventsState {
  loading: boolean;
  error: string | null;
  data: EventInterface[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const fetchEventsReducer = (
  state: EventsState = initialState,
  action: Action
): EventsState => {
  switch (action.type) {
    case ActionType.EVENT_LIST_REQUEST:
      return { loading: true, error: null, data: [] };
    case ActionType.EVENT_LIST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.EVENT_LIST_FAIL:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
