import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-task-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './task-chart.component.html',
  styleUrl: './task-chart.component.css'
})
export class TaskChartComponent implements OnInit{
data: any;
currentRange: string = 'monthly';

allData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Daily',
      data: [10, 20, 15, 30, 50, 20, 30],
      borderColor: '#5051F9',
      backgroundColor: 'rgba(80, 81, 249, 0.2)',
      fill: true,
      tension: 0.4
    },
    {
      label: 'Weekly',
      data: [100, 200, 150, 300,220, 250, 300, 150, 100],
      borderColor: 'rgba(30, 167, 255, 1)',
      backgroundColor: 'rgba(30, 167, 255, 0.2)',
      fill: true,
      tension: 0.4
    },
    {
      label: 'Monthly',
      data: [100, 200, 150, 300, 250, 400, 300, 200, 250, 300, 150, 100],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
};

ngOnInit() {
  this.data = this.allData;
}

setRange(range: string) {
  this.currentRange = range;
}
}
