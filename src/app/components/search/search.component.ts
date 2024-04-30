import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  search = new FormControl; 
  constructor() { }

  ngOnInit(): void {
  }

}
