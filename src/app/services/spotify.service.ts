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

   getNewReleases() {
     const headers = new HttpHeaders({
        'Authorization': 'Bearer BQD--1SUEpztL7G084233IB1jILASMzCoV43_Fj_MVh8lVwJcesJyPy5mkVVQ5JzmpOKi5upA2eNVhtA1yg'

     });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers} )
            .pipe(map(data => data['albums'].items));


   }



   getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD--1SUEpztL7G084233IB1jILASMzCoV43_Fj_MVh8lVwJcesJyPy5mkVVQ5JzmpOKi5upA2eNVhtA1yg'

   });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers} )
            .pipe( map( data => data['artists'].items));
   }


}
