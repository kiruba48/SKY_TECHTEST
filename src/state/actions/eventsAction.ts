import { ActionType } from '../constants/eventsConstants';

interface Competitors {
  name: string;
  position: string;
}

interface Scores {
  away: number;
  home: number;
}

export interface EventInterface {
  eventId: number;
  name: string | number;
  className: string;
  linkedEventTypeName: string;
  linkedEventTypeId: number;
  typeName: string;
  typeId: number;
  linkedEventId: number;
  markets: number[];
  competitors: Competitors[];
  scores: Scores;
  startTime: string;
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
  payload: EventInterface[];
}

interface EventListFailAction {
  type: ActionType.EVENT_LIST_FAIL;
  payload: string;
}

export type Action =
  | EventListRequestAction
  | EventListSuccessAction
  | EventListFailAction;
