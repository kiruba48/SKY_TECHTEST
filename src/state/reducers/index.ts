import { combineReducers } from 'redux';
import { fetchEventsReducer } from '../reducers/eventsReducer';
import { outcomeReducer } from './outcomeReducer';
import { marketDataReducer } from './marketDataReducer';

const reducers = combineReducers({
  events: fetchEventsReducer,
  outcomes: outcomeReducer,
  marketData: marketDataReducer,
});

export default reducers;

// RootState defining to let TS know what exactly is inside the State.
export type RootState = ReturnType<typeof reducers>;
