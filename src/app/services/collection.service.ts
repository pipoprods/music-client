// 3rd-party
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Specific
import { environment } from '@root/environments/environment';

import { Artist } from '@models/artist';
import { Album } from '@models/album';

@Injectable()
export class CollectionService {

  constructor(
      private http: HttpClient,
    ) { }

  public getArtists(count?: number, offset?: number): Observable<Artist[]> {
    return this.http.get<Artist[]>(
        `${environment.api}/artist/`,
        { params: (count !== undefined && offset !== undefined) ? { count: count.toString(), offset: offset.toString() } : undefined }
      );
  }

  public getArtistCount(): Observable<number> {
    return this.http.get<number>(`${environment.api}/artist/count`);
  }

  public getAlbums(id: string, count?: number, offset?: number): Observable<Album[]> {
    return this.http.get<Album[]>(
        `${environment.api}/artist/${encodeURIComponent(id)}/albums`,
        { params: (count !== undefined && offset !== undefined) ? { count: count.toString(), offset: offset.toString() } : undefined }
      );
  }
}
