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
      'Authorization': 'Bearer BQD0Hzsid63mB0LiTzgwpTKGbZ8MazpcfGkcJNQmx4N_XGzguFPd7ofYQ0s4a6xmX9w87Jx8z0FUOJyKEVc'

     });

     return this.http.get(url, {headers});
   }

   getNewReleases() {
     return this.getQuery('browse/new-releases')
            .pipe(map(data => data['albums'].items));


   }



   getArtista(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data => data['artists'].items));
   }


}
