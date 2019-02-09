// 3rd-party
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

// Specific
import { CollectionState } from '@stores/collection/state';
import {
    CollectionActionTypes,
    LoadArtistsAction,
    LoadedArtistsAction,
    LoadedArtistCountAction,
    LoadArtistCountAction
  } from '@stores/collection/actions';

import { CollectionService } from '@services/collection.service';

@Injectable()
export class CollectionEffects {
  @Effect()
  loadedArtists$ = this.actions$.ofType<LoadArtistsAction>(CollectionActionTypes.LoadArtists).pipe(
    switchMap((action) => this.collectionService.getArtists(action.count, action.offset)),
    map(artists => new LoadedArtistsAction(artists))
  );

  @Effect()
  loadedArtistCount$ = this.actions$.ofType<LoadArtistCountAction>(CollectionActionTypes.LoadArtistCount).pipe(
    switchMap(() => this.collectionService.getArtistCount()),
    map(count => new LoadedArtistCountAction(count))
  );

  constructor(
    private actions$: Actions,
    private store: Store<CollectionState>,
    private collectionService: CollectionService,
  ) { }
}
