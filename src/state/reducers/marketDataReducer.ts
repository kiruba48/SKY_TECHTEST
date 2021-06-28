import { ActionType } from '../constants/eventsConstants';
import {
  MarketDataAction,
  MarketDataInterface,
} from '../actions/marketDataInterfaces';

interface MarketDataState {
  loading: boolean;
  error: string | null;
  data: MarketDataInterface[]; //MarketDataInterface[]
}
const initialState = {
  loading: false,
  error: null,
  data: [], //[]
};

export const marketDataReducer = (
  state: MarketDataState = initialState,
  action: MarketDataAction
): MarketDataState => {
  switch (action.type) {
    case ActionType.EVENT_MARKET_DATA_REQUEST:
      return { loading: true, error: null, data: [] };
    case ActionType.EVENT_MARKET_DATA_SUCCESS:
      // const newMarketData =

      return {
        loading: false,
        error: null,
        data: [...state.data, action.payload],
      };
    case ActionType.EVENT_MARKET_DATA_FAIL:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
