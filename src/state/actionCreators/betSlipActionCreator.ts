import { Dispatch } from 'redux'; //type def for dispatch function
import { ActionType } from '../constants/eventsConstants';
import { BetSlipAction } from '../actions/betSlipInterface';
import { EventOutcomeInterface } from '../actions/outcomeInterfaces';

export const addToBetSlipAction =
  (outcome: EventOutcomeInterface) =>
  async (dispatch: Dispatch<BetSlipAction>, getState: any) => {
    dispatch({
      type: ActionType.BET_SLIP_ADD_ITEM,
      payload: outcome,
    });
    // Saving the current state in local storage after dispatching the action above.
    localStorage.setItem('betSlipItems', JSON.stringify(getState().betSlip));
  };

export const removeItemAction =
  (outcomeId: number) =>
  async (dispatch: Dispatch<BetSlipAction>, getState: any) => {
    dispatch({
      type: ActionType.BET_SLIP_REMOVE_ITEM,
      payload: outcomeId,
    });
    // Updating the LS after removing selected outcome
    localStorage.setItem('betSlipItems', JSON.stringify(getState().betSlip));
  };

export const resetBetSlipAction =
  () => async (dispatch: Dispatch<BetSlipAction>) => {
    dispatch({
      type: ActionType.BET_SLIP_RESET,
    });
    // Updating the LS after resetting
    localStorage.removeItem('betSlipItems');
  };
