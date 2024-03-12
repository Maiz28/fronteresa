import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlatillosService } from 'src/app/services/platillos.service';

@Component({
  selector: 'app-agregarmenu',
  templateUrl: './agregarmenu.component.html',
  styleUrls: ['./agregarmenu.component.css']
})
export class AgregarmenuComponent implements OnInit {

  constructor( public platillosService:PlatillosService) { }

  ngOnInit(): void {
  }

  addPlatillo( form:NgForm){
    this.platillosService.createPlatillo(form.value).subscribe(
      res =>console.log(res), 
      err =>console.error(err)
    )
  }


}
