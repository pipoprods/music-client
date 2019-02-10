// Specific
import { Artist } from '@models/artist';
import { Album } from '@models/album';

export interface CollectionState {
  readonly loading: boolean;
  readonly artists: Artist[];
  readonly artistCount: number;
  readonly albums: Album[];
}

export const initialState: CollectionState = {
  loading: false,
  artists: [],
  artistCount: 0,
  albums: []
};
