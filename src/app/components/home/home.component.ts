import { Component } from '@angular/core';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  
  constructor(public GetAllService: GetAllService) {
    this.GetAllService.GetInfo();
  }
}
