import { store } from '../store';
import { ActionType } from '../constants/eventsConstants';
import { MarketDataInterface } from '../actions/marketDataInterfaces';

export const fetchMarketData = (data: MarketDataInterface) => {
  store.dispatch({
    type: ActionType.EVENT_MARKET_DATA_REQUEST,
  });
  try {
    store.dispatch({
      type: ActionType.EVENT_MARKET_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    store.dispatch({
      type: ActionType.EVENT_MARKET_DATA_FAIL,
      payload: error.message,
    });
  }
};
