import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

// Accessing the local storage to get the betSlip Item stored (if any)
const itemInLS = localStorage.getItem('betSlipItems');
const storedBetSlipItems = itemInLS ? JSON.parse(itemInLS) : [];

// passing all the middleware as array
const middleware = [thunk];

export const store = createStore(
  reducers,
  { betSlip: storedBetSlipItems },
  composeWithDevTools(applyMiddleware(...middleware))
);
