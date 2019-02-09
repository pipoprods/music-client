// Specific
import { Artist } from '@models/artist';

export interface CollectionState {
  readonly loading: boolean;
  readonly artists: Artist[];
  readonly artistCount: number;
}

export const initialState: CollectionState = {
  loading: false,
  artists: [],
  artistCount: 0
};
