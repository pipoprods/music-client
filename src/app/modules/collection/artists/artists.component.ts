// 3rd-party
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

// Specific
import { CollectionState } from '@stores/collection/state';
import { LoadArtistsAction, LoadArtistCountAction } from '@stores/collection/actions';
import { artists, artistCount, loading } from '@stores/collection/reducer';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public loading$ = this.store.select(loading);
  public artists$ = this.store.select(artists);
  public max$ = this.store.select(artistCount);

  // Pagination
  public count = 10;
  public offset = 0;
  public max: number;

  constructor(
      private store: Store<CollectionState>,
      private router: Router,
      private route: ActivatedRoute,
    ) {
      this.max$.subscribe(max => {
          // Set max value
          this.max = max;

          // Check current page is inside bounds
          if (this.offset * this.count > this.max) {
            this.fetchData(0);
          }
        });
      this.artists$.subscribe(a => { if (a.length) { this.loading$ = undefined; } });
    }

  ngOnInit() {
    this.store.dispatch(new LoadArtistCountAction());
    this.fetchData((Number(this.route.snapshot.paramMap.get('pagenr')) || 1) - 1);
  }

  private fetchData(offset: number): void {
      this.offset = offset;
      this.router.navigate(['collection', 'artist', 'page', this.offset + 1]);
      this.store.dispatch(new LoadArtistsAction(this.count, this.offset));
  }

  public paginatePrevious(): void {
    if (this.offset > 0) {
      this.fetchData(this.offset - 1);
    }
  }

  public paginateNext(): void {
    if ((this.offset + 1) * this.count < this.max) {
      this.fetchData(this.offset + 1);
    }
  }
}
