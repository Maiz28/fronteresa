import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private apollo: Apollo) { }

  filterData(valueToSearch : string):void{

    const QUERY_By_NAME={};
    this.apollo.

  }

}


