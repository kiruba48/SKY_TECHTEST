import { combineReducers } from 'redux';
import { fetchEventsReducer } from '../reducers/eventsReducer';
import { outcomeReducer } from './outcomeReducer';

const reducers = combineReducers({
  events: fetchEventsReducer,
  outcomes: outcomeReducer,
});

export default reducers;

// RootState defining to let TS know what exactly is inside the State.
export type RootState = ReturnType<typeof reducers>;
