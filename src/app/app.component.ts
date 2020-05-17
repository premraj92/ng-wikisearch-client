import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  noSearchResults = false;
  pages = [];
  constructor(private wikipedia: WikipediaService) {}

  onSearchTerm(term: string) {
    this.wikipedia.onWikiApiFetch(term).subscribe((response) => {
      console.log(response);
      this.pages = response;

      this.noSearchResults = this.pages.length ? false : true;
    });
  }
}
