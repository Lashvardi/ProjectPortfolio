import { Component } from '@angular/core';
import { portfolio } from 'src/app/models/portfolio';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  portfolio : portfolio[] = [];
  // constructor(public getAllService: GetAllService) {
  //   this.getAllService.GetInfo().subscribe((data) => {
  //     console.log(data);
  //     this.portfolio.push(data);
  //   });
  // }
}
