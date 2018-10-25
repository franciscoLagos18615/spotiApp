import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {

    console.log('serv spoti listo');
   }

   getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA1WPiiU6kyEaFiPW-MLc36KTzdh1au9hafl5Y7DQwjZV6PCeerBmtKjXBEYwvh3_yvMJkT9Xh1qq4e55o'

     });

     return this.http.get(url, {headers});
   }

   getNewReleases() {
     return this.getQuery('browse/new-releases')
            .pipe(map(data => data['albums'].items));


   }



   getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data => data['artists'].items));
   }

   getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
           // .pipe( map( data => data['artists'].items))
   }

   getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
          .pipe( map( data => data['tracks']));
   }

}
