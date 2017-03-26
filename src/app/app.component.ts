import { Component } from '@angular/core';
import { Stamp } from './stamp';
import { PosterService } from './poster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private postService: PosterService
  ) { }

  postEnter(badge: string): void{
    badge = badge.trim();
    if (!badge) {return;}
    this.postService.postEnter(badge)
      .then( res => console.log(res));
  }
}
