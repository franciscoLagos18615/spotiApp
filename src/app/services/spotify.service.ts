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
      'Authorization': 'Bearer BQD--1SUEpztL7G084233IB1jILASMzCoV43_Fj_MVh8lVwJcesJyPy5mkVVQ5JzmpOKi5upA2eNVhtA1yg'

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
