import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit{
data: any;

  ngOnInit() {
    this.data = {
      labels: ['', '', '', ''],
      datasets: [
        {
          data: [1, 3, 2, 4],
          borderColor: '#3b82f6',
          fill: false,
          tension: 0.4
        }
      ]
    };
  }
}
