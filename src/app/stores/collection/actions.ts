// 3rd-party
import { Action } from '@ngrx/store';

// Specific
import { Artist } from '@models/artist';
import { Album } from '@models/album';

export enum CollectionActionTypes {
  LoadArtists = 'Load artists',
  LoadedArtists = 'Loaded artists',
  LoadArtistCount = 'Load artist count',
  LoadedArtistCount = 'Loaded artist count',
  LoadAlbums = 'Load albums',
  LoadedAlbums = 'Loaded albums',
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

export class LoadAlbumsAction implements Action {
  readonly type = CollectionActionTypes.LoadAlbums;
  constructor(public readonly id: string) {}
}

export class LoadedAlbumsAction implements Action {
  readonly type = CollectionActionTypes.LoadedAlbums;
  constructor(public readonly albums: Album[]) {}
}

export type CollectionAction = LoadArtistsAction
  | LoadedArtistsAction
  | LoadArtistCountAction
  | LoadedArtistCountAction
  | LoadAlbumsAction
  | LoadedAlbumsAction
  ;
