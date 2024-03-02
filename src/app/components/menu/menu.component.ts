import { Component, OnInit } from '@angular/core';
import { PlatillosService } from 'src/app/services/platillos.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public platillosService:PlatillosService) { }

  ngOnInit(): void {
  this.platillosService.getPlatillo().subscribe(
    res => console.log(res),
    err => console.error(err)

  )
  }

}
