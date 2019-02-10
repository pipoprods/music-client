// 3rd-party
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Specific
import { initialState, CollectionState } from '@stores/collection/state';
import { CollectionAction, CollectionActionTypes } from '@stores/collection/actions';

export function reducer(state = initialState, action: CollectionAction): CollectionState {
  switch (action.type) {
    case CollectionActionTypes.LoadArtists:
      return {
        ...state,
        loading: true
      };

    case CollectionActionTypes.LoadedArtists:
      return {
        ...state,
        loading: false,
        artists: action.artists
      };

    case CollectionActionTypes.LoadedArtistCount:
      return {
        ...state,
        artistCount: action.count
      };

    case CollectionActionTypes.LoadAlbums:
      return {
        ...state,
        loading: true
      };

    case CollectionActionTypes.LoadedAlbums:
      return {
        ...state,
        loading: false,
        albums: action.albums
      };

    default:
      return state;
  }
}

// Getters
export const getCollectionState = createFeatureSelector<CollectionState>('collection');
export const loading = createSelector(getCollectionState, state => state.loading);
export const artists = createSelector(getCollectionState, state => state.artists);
export const artistCount = createSelector(getCollectionState, state => state.artistCount);
export const albums = createSelector(getCollectionState, state => state.albums);
