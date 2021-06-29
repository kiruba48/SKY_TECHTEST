import { store } from './state';
import { MarketDataInterface } from './state/actions/marketDataInterfaces';
import { ActionType } from './state/constants/eventsConstants';
// import { fetchEvents } from './state/actionCreators/eventsActionCreator';
export const ws = new WebSocket('ws://localhost:8889');

// ws.onopen = () => {
//     ws.send(JSON.stringify(eventPayload));
// };
// let payload: any;

const fetchEvents = (data: any) => {
  store.dispatch({
    type: ActionType.EVENT_LIST_REQUEST,
  });
  try {
    store.dispatch({
      type: ActionType.EVENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    store.dispatch({
      type: ActionType.EVENT_LIST_FAIL,
      payload: error.message,
    });
  }
};

const fetchMarketData = (data: MarketDataInterface) => {
  // console.log(data);

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

const fetchOutcomeData = (data: any) => {
  store.dispatch({
    type: ActionType.EVENT_OUTCOME_REQUEST,
  });
  try {
    store.dispatch({
      type: ActionType.EVENT_OUTCOME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    store.dispatch({
      type: ActionType.EVENT_OUTCOME_FAIL,
      payload: error.message,
    });
  }
};

const fetchEventData = (data: any) => {
  store.dispatch({
    type: ActionType.EVENT_DATA_REQUEST,
  });
  try {
    store.dispatch({
      type: ActionType.EVENT_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    store.dispatch({
      type: ActionType.EVENT_DATA_FAIL,
      payload: error.message,
    });
  }
};

ws.onmessage = (event: any) => {
  const { type, data } = JSON.parse(event.data);
  // console.log(event.data);
  switch (type) {
    case 'LIVE_EVENTS_DATA':
      fetchEvents(data);
      break;
    case 'MARKET_DATA':
      fetchMarketData(data);
      break;
    case 'OUTCOME_DATA':
      fetchOutcomeData(data);
      break;
    case 'EVENT_DATA':
      // console.log(data);

      fetchEventData(data);
      break;
    case 'ERROR':
      console.log(data);
      break;
    default:
      return;
  }
};

// console.log(payload);  //undefined

// export default payload;
