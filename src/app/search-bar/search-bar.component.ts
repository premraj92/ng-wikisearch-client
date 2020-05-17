import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit , OnChanges {

  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.term);
  }

  onWikiSearch(event: any) {
    event.preventDefault();
    console.log(this.term);

    this.submitted.emit(this.term);
  }

}
