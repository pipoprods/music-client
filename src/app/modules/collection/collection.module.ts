// 3rd-party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store, Action } from '@ngrx/store';

// Specific
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionService } from '@services/collection.service';
import { reducer } from '@stores/collection/reducer';
import { CollectionEffects } from '@stores/collection/effects';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';

@NgModule({
  imports: [
    StoreModule.forFeature('collection', reducer),
    EffectsModule.forFeature([ CollectionEffects ]),
  ],
})
export class CollectionStoreModule { }

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
    CollectionStoreModule
  ],
  declarations: [
    ArtistsComponent,
    AlbumsComponent
  ],
  providers: [
    CollectionService
  ]
})
export class CollectionModule { }
