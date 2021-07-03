import { Dispatch } from 'redux'; //type def for dispatch function
import { store } from '../store';
import { ActionType } from '../constants/eventsConstants';
import {
  MarketDataInterface,
  MarketDataAction,
} from '../actions/marketDataInterfaces';

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

export const resetMarketData =
  () => async (dispatch: Dispatch<MarketDataAction>) => {
    dispatch({
      type: ActionType.EVENT_MARKET_DATA_RESET,
    });
  };
