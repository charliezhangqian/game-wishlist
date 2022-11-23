import { createSelector } from '@ngrx/store';
import { Game } from '../types/model';
import { AppState, WishlistState } from './reducer';

const getWishlist = (state: AppState): WishlistState => state.wishlist;

export const getWishlistGames = createSelector(
  getWishlist,
  (wishlist: WishlistState): Game[] => {
    return wishlist.games;
  }
);

export const getWishlistGameIds = createSelector(
  getWishlistGames,
  (games: Game[]): number[] => {
    return games.map((game) => game.gameID);
  }
);
