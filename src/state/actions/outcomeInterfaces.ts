import { ActionType } from '../constants/eventsConstants';

interface Result {
  place: number;
  result: string;
  favourite: boolean;
}

interface Price {
  decimal: string;
  num: string;
  den: string;
}

interface Status {
  active: boolean;
  resulted: boolean;
  cashoutable: boolean;
  displayable: boolean;
  suspended: boolean;
  result: string;
}

export interface EventOutcomeInterface {
  outcomeId: number;
  marketId: number;
  eventId: number;
  name: string;
  result: Result;
  price: Price;
  status: Status;
}

export interface EventOutcomePayload {
  type: string;
  id: number;
}

// Type check for action
interface EventOutcomeListRequestAction {
  type: ActionType.EVENT_OUTCOME_REQUEST;
}

interface EventOutcomeListSuccessAction {
  type: ActionType.EVENT_OUTCOME_SUCCESS;
  payload: EventOutcomeInterface[];
}

interface EventOutcomeListFailAction {
  type: ActionType.EVENT_OUTCOME_FAIL;
  payload: string;
}

export type OutcomeAction =
  | EventOutcomeListRequestAction
  | EventOutcomeListSuccessAction
  | EventOutcomeListFailAction;
