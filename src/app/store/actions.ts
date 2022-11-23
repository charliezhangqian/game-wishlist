import { Game } from '../types/model';

export enum ActionType {
  addGame = '[Wishlist] Add game',
  removeGame = '[Wishlist] remove game',
}

export interface AddGame {
  type: ActionType.addGame;
  payload: {
    game: Game;
  };
}

export interface RemoveGame {
  type: ActionType.removeGame;
  payload: {
    gameId: number;
  };
}

export function addGame(game: Game): AddGame {
  return {
    type: ActionType.addGame,
    payload: { game },
  };
}

export function remove(gameId: number): RemoveGame {
  return {
    type: ActionType.removeGame,
    payload: { gameId },
  };
}

export type Action = AddGame | RemoveGame;
