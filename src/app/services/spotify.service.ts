import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {

    console.log('serv spoti listo');
   }

   getNewReleases() {
     const headers = new HttpHeaders({
        'Authorization': 'Bearer BQDV-6hoA6884qAF9oa-VWaTeFsQKQKJeeB9i7FAiJGYQggJDTJnyXT0jXTpwr9F1yjUEV6QIGFeYoR4uKs'

     });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers} );


   }



   getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDV-6hoA6884qAF9oa-VWaTeFsQKQKJeeB9i7FAiJGYQggJDTJnyXT0jXTpwr9F1yjUEV6QIGFeYoR4uKs'

   });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers} );
   }


}
