import { ActionType } from '../constants/eventsConstants';
import { BetSlipAction } from '../actions/betSlipInterface';
import { EventOutcomeInterface } from '../actions/outcomeInterfaces';

export const betSlipReducer = (
  state: EventOutcomeInterface[] = [],
  action: BetSlipAction
) => {
  switch (action.type) {
    case ActionType.BET_SLIP_ADD_ITEM:
      const item = action.payload;
      return [...state, item];
    case ActionType.BET_SLIP_REMOVE_ITEM:
      return state.filter((item) => item.outcomeId !== action.payload);
    case ActionType.BET_SLIP_RESET:
      return [];
    default:
      return state;
  }
};
