import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { GameService } from '../services/GameService';
import { addGame } from '../store/actions';
import { AppState } from '../store/reducer';
import { getWishlistGameIds } from '../store/selector';
import { Game } from '../types/model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: Observable<Game[]> | undefined;

  private searchText = new BehaviorSubject<string>('');

  constructor(
    private gameService: GameService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.games = combineLatest([
      this.gameService.getGames(),
      this.searchText,
      this.store.select(getWishlistGameIds),
    ]).pipe(
      map(([games, query, gameIds]: [Game[], string, number[]]): Game[] => {
        const checkedGames = games.map((game) => ({
          ...game,
          isLiked: gameIds.includes(game.gameID),
        }));
        if (!query) {
          console.log(checkedGames);
          return checkedGames;
        }
        console.log(gameIds);
        return checkedGames.filter((game) =>
          game.title.toLowerCase().includes(query.toLowerCase())
        );
      })
    );
  }

  search(event: any): void {
    this.searchText.next(event.target.value);
  }

  addGame(game: Game): void {
    this.store.dispatch(addGame(game));
  }
}
