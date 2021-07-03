import { ActionType } from '../constants/eventsConstants';

interface Status {
  active: boolean;
  resulted: boolean;
  cashoutable: boolean;
  displayable: boolean;
  suspended: boolean;
  noExtraTime: boolean;
  live: boolean;
}

export interface MarketDataInterface {
  marketId: number;
  eventId: number;
  name: string;
  type: string;
  status: Status;
  outcomes: number[];
}

export interface MarketDataPayload {
  type: string;
  id: number;
}

// Type check for action
interface MarketDataRequestAction {
  type: ActionType.EVENT_MARKET_DATA_REQUEST;
}

interface MarketDataSuccessAction {
  type: ActionType.EVENT_MARKET_DATA_SUCCESS;
  payload: MarketDataInterface; //MarketDataInterface[]
}

interface MarketDataFailAction {
  type: ActionType.EVENT_MARKET_DATA_FAIL;
  payload: string;
}

interface MarketDataResetAction {
  type: ActionType.EVENT_MARKET_DATA_RESET;
}

export type MarketDataAction =
  | MarketDataRequestAction
  | MarketDataSuccessAction
  | MarketDataFailAction
  | MarketDataResetAction;
