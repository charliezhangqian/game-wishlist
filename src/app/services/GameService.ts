import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Game } from '../types/model';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private httpClient: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.httpClient
      .get<Game[]>(
        'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
      )
      .pipe(catchError(() => of([])));
  }
}
