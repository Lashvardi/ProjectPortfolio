import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { portfolio } from '../models/portfolio';
import {ServiceUrlBuilder} from "../ServiceUrlBuilder";

@Injectable({
  providedIn: 'root',
})
export class GetAllService {
  portfolio: portfolio[] = [];
  constructor(public http: HttpClient) {}

  public GetInfo():  Observable<portfolio>  {
    return this.http.get<portfolio>(ServiceUrlBuilder.buildUrl('lashvardi'));
  }
  
  
}
