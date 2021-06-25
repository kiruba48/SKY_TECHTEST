import { ActionType } from '../constants/eventsConstants';

// Type check for action
interface EventListRequestAction {
  type: ActionType.EVENT_LIST_REQUEST;
}

interface EventListSuccessAction {
  type: ActionType.EVENT_LIST_SUCCESS;
  payload: string[];
}

interface EventListFailAction {
  type: ActionType.EVENT_LIST_FAIL;
  payload: string;
}

export type Action =
  | EventListRequestAction
  | EventListSuccessAction
  | EventListFailAction;
