import { ActionType } from '../constants/eventsConstants';
import { EventOutcomeInterface } from './outcomeInterfaces';

// Type check for action
interface AddToBetSlipAction {
  type: ActionType.BET_SLIP_ADD_ITEM;
  payload: EventOutcomeInterface;
}

interface RemoveFromBetSlipAction {
  type: ActionType.BET_SLIP_REMOVE_ITEM;
  payload: number;
}

interface ResetBetSlipAction {
  type: ActionType.BET_SLIP_RESET;
}

export type BetSlipAction =
  | AddToBetSlipAction
  | RemoveFromBetSlipAction
  | ResetBetSlipAction;
