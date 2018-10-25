import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
          .subscribe( (data: any) => {
            this.nuevasCanciones = data;
            this.loading = false;

          }, (errorServicio) => {
            this.loading = false;
            this.error = true;
            console.log(errorServicio);
          }
          );


   }

  ngOnInit() {
  }

}
