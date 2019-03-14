import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public lineChartData: Array<any> = [
    {
      data: [11, 17, 23],
      label: "Commits"
    },
    { data: [12, 20, 13], label: "Builds" },
    { data: [21, 35, 29], label: "Issues" }
  ];
  public lineChartLabels: Array<any> = ["Day Before", "Yesterday", "Today"];
  public lineChartOptions: any = {
    tooltips: {
      enabled: true
    },
    responsive: true
    
  };
  public lineChartLegend: boolean = true;
  public lineChartType: string = "line";
  constructor() { }

  ngOnInit() {
  }

}
