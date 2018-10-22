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

  constructor(private http: HttpClient, private spotify: SpotifyService) {

    this.spotify.getNewReleases()
          .subscribe( (data: any) => {
            this.nuevasCanciones = data;

          });


   }

  ngOnInit() {
  }

}
