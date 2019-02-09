// 3rd-party
import { Action } from '@ngrx/store';

// Specific
import { Artist } from '@models/artist';

export enum CollectionActionTypes {
  LoadArtists = 'Load artists',
  LoadedArtists = 'Loaded artists',
  LoadArtistCount = 'Load artist count',
  LoadedArtistCount = 'Loaded artist count',
}

export class LoadArtistsAction implements Action {
  readonly type = CollectionActionTypes.LoadArtists;
  constructor(public readonly count?: number, public readonly offset?: number) {}
}

export class LoadedArtistsAction implements Action {
  readonly type = CollectionActionTypes.LoadedArtists;
  constructor(public readonly artists: Artist[]) {}
}

export class LoadArtistCountAction implements Action {
  readonly type = CollectionActionTypes.LoadArtistCount;
}

export class LoadedArtistCountAction implements Action {
  readonly type = CollectionActionTypes.LoadedArtistCount;
  constructor(public readonly count: number) {}
}

export type CollectionAction = LoadArtistsAction
  | LoadedArtistsAction
  | LoadArtistCountAction
  | LoadedArtistCountAction
  ;
