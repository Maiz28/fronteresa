import { Component, OnInit,   inject,  ElementRef, } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent implements OnInit {
  private el = inject(ElementRef);
  private title = inject(Title);
 

  constructor() { }

  ngOnInit(): void {
  }

}
