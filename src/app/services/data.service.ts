import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pluck, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor( private apollo: Apollo) { }



}


