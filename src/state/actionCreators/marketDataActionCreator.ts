import { ActionType } from '../constants/eventsConstants';
// import { Dispatch } from 'redux'; //type def for dispatch function
// import {
//   MarketDataAction,
//   MarketDataPayload,
// } from '../actions/marketDataInterfaces';

// export const fetchMarketData =
//   (ws: any, eventPayload: MarketDataPayload) =>
//   async (dispatch: Dispatch<MarketDataAction>, getState: any) => {
//     dispatch({
//       type: ActionType.EVENT_MARKET_DATA_REQUEST,
//     });

//     const { marketData } = getState();

//     // console.log(marketData.data);

//     try {
//       ws.send(JSON.stringify(eventPayload));

//       ws.onmessage = (event: any) => {
//         const { type, data } = JSON.parse(event.data);
//         // const testData = [...marketData.data, data];
//         // console.log(testData);

//         switch (type) {
//           case 'MARKET_DATA': {
//             dispatch({
//               type: ActionType.EVENT_MARKET_DATA_SUCCESS,
//               payload: data,
//             });
//           }
//         }
//       };
//     } catch (error) {
//       dispatch({
//         type: ActionType.EVENT_MARKET_DATA_FAIL,
//         payload: error.message,
//       });
//     }
//   };
