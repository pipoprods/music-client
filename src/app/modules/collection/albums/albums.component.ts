// 3rd-party
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';


// Specific
import { CollectionState } from '@stores/collection/state';
import { LoadAlbumsAction } from '@stores/collection/actions';
import { albums, loading } from '@stores/collection/reducer';
import { Album } from '@models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  public loading$ = this.store.select(loading);
  public albums$ = this.store.select(albums);
  public albums: Album[] = [];

  public artist: string;

  constructor(
      private store: Store<CollectionState>,
      private route: ActivatedRoute,
      private location: Location,
    ) {
      this.subscriptions.push(this.albums$.subscribe(data => {
          this.albums = data.map(d => d).sort((a, b) => b.year - a.year);
        }));
    }

  ngOnInit() {
    this.artist = decodeURIComponent(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(new LoadAlbumsAction(this.route.snapshot.paramMap.get('id')));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public back(): void {
    this.location.back();
  }
}
