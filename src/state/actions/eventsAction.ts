import { ActionType } from '../constants/eventsConstants';

export interface Event {
  eventId: number;
  name: string | number;
  className: string;
}

export interface EventPayload {
  type: string;
  primaryMarkets: boolean;
}

// Type check for action
interface EventListRequestAction {
  type: ActionType.EVENT_LIST_REQUEST;
}

interface EventListSuccessAction {
  type: ActionType.EVENT_LIST_SUCCESS;
  payload: Event[];
}

interface EventListFailAction {
  type: ActionType.EVENT_LIST_FAIL;
  payload: string;
}

export type Action =
  | EventListRequestAction
  | EventListSuccessAction
  | EventListFailAction;
