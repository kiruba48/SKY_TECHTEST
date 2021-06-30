import { fetchEvents } from './state/actionCreators/eventsActionCreator';
import { fetchMarketData } from './state/actionCreators/marketDataActionCreator';
import { fetchOutcomeData } from './state/actionCreators/outcomeActionCreator';
import { fetchEventData } from './state/actionCreators/eventDataActionCreator';

// Websocket connect.
export const ws = new WebSocket('ws://localhost:8889');

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
