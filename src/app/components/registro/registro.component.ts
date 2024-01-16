import { Component, OnInit } from '@angular/core';
import { CompletoService } from 'src/app/services/completo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private completoService: CompletoService) {}

  ngOnInit(): void {}

  getCompleto() {
    this.completoService.getCompleto().subscribe((res) => {
      this.completoService.completo = res;
      console.log(res);
    });
  }
}
