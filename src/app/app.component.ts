import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private teacher: Array<any>;
  private mejor: Array<any>;

  constructor(private dataService: DataService) {
    this.onload();
  }

  onload() {
    this.dataService.getTeacher().subscribe(res => {
      this.teacher = res;
    })
    console.log(this.teacher)

    this.dataService.getMejor().subscribe(res => {
      this.mejor = res;
    })
    console.log(this.mejor)
  }
}

 

