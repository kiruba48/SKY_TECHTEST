import { ActionType } from '../constants/eventsConstants';

interface Scores {
  home: number;
  away: number;
}

interface Competitors {
  name: string;
  position: string;
}

interface Status {
  active: boolean;
  started: boolean;
  finished: boolean;
  resulted: boolean;
  cashoutable: boolean;
  displayable: boolean;
  suspended: boolean;
  requestabet: boolean;
  live: boolean;
}

export interface EventDataInterface {
  eventId: number;
  name: string;
  linkedEventId: number;
  className: number;
  typeId: number;
  typeName: string;
  linkedEventTypeId: number;
  linkedEventTypeName: string;
  startTime: string;
  scores: Scores;
  competitors: Competitors[];
  status: Status;
  markets: number[];
}

// Type check for action
interface EventDataRequestAction {
  type: ActionType.EVENT_DATA_REQUEST;
}

interface EventDataSuccessAction {
  type: ActionType.EVENT_DATA_SUCCESS;
  payload: EventDataInterface;
}

interface EventDataFailAction {
  type: ActionType.EVENT_DATA_FAIL;
  payload: string;
}

export type EventDataAction =
  | EventDataRequestAction
  | EventDataSuccessAction
  | EventDataFailAction;
