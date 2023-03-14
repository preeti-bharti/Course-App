import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeholder : any;
  @Output() searchEvent = new EventEmitter<string>();
  fa_search=faSearch;
  searchItem : any;
  constructor() { }

  ngOnInit(): void {
  }
  search() {
    this.searchEvent.emit(this.searchItem);
  }

}
