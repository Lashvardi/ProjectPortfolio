import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { portfolio } from '../models/portfolio';
import {ServiceUrlBuilder} from "../ServiceUrlBuilder";

@Injectable({
  providedIn: 'root',
})
export class GetAllService {
  constructor(public http: HttpClient) {}

  public GetInfo() {
    this.http.get<portfolio>(ServiceUrlBuilder.buildUrl('lashvardi')).subscribe((data) => {
      console.log(data);
    });
  }
  
}
