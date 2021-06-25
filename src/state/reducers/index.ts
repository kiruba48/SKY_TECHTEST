import { combineReducers } from 'redux';
import { fetchEventsReducer } from '../reducers/eventsReducer';

const reducers = combineReducers({
  events: fetchEventsReducer,
});

export default reducers;
