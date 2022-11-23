import { Game } from '../types/model';
import { Action, ActionType } from './actions';

export interface AppState {
  wishlist: WishlistState;
}

export interface WishlistState {
  games: Game[];
}

const initialState = {
  games: [],
};

export function wishlistReducer(
  state: WishlistState = initialState,
  action: Action
): WishlistState {
  switch (action.type) {
    case ActionType.addGame:
      return { games: [...state.games, action.payload.game] };
    case ActionType.removeGame:
      return {
        games: state.games.filter(
          (game) => game.gameID !== action.payload.gameId
        ),
      };
    default:
      return state;
  }
}
