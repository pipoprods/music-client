// 3rd-party
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Specific
import { ArtistsComponent } from './artists/artists.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', children: [
        { path: '', component: ArtistsComponent },
        { path: 'artist/page/:pagenr', component: ArtistsComponent },
      ]}
    ])
  ],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
