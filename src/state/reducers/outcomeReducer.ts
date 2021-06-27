import { ActionType } from '../constants/eventsConstants';
import {
  OutcomeAction,
  EventOutcomeInterface,
} from '../actions/outcomeInterfaces';

interface OutcomeState {
  loading: boolean;
  error: string | null;
  data: EventOutcomeInterface[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const outcomeReducer = (
  state: OutcomeState = initialState,
  action: OutcomeAction
): OutcomeState => {
  switch (action.type) {
    case ActionType.EVENT_OUTCOME_REQUEST:
      return { loading: true, error: null, data: [] };
    case ActionType.EVENT_OUTCOME_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.EVENT_OUTCOME_FAIL:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
