import { TaskListComponent } from "./task-list/task-list.component";
import { Component } from '@angular/core';
import { TaskChartComponent } from './task-chart/task-chart.component';

import { StatisticsComponent } from "./statistics/statistics.component";
import { ScheduleComponent } from "./schedule/schedule.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskChartComponent,TaskListComponent,StatisticsComponent,ScheduleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
