import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  albums: any;
  allPhotos: any;
  albumClicked = false;
  photoClicked = false;
  photos = [];
  userIds: any;
  albumIds: any;

  constructor (private http: HttpClient) {
    this.http.get<any>('http://jsonplaceholder.typicode.com/albums').subscribe(data => {
      this.albums = data;
    })
    this.http.get<any>('http://jsonplaceholder.typicode.com/photos').subscribe(data => {
      this.allPhotos = data;
    })

  }

  showPhotos(userId: any) {
    this.albumClicked = true;
    for (let photo of this.allPhotos) { 
      if (userId.id === photo.albumId) {
        this.photos.push(photo);
      }
    }
  }
  title = 'app';
}
