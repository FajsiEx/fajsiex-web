import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  servers = [
    {
      name: 'Wanilla',
      status: 'All systems running.',
      data: {
        cpu: this.generateChartData('cpu', [69, 42, 88, 1, 11, 22, 39]),
        ram: this.generateChartData('ram', [42, 35, 25, 65, 55, 34, 14]),
        requests: this.generateChartData('requests', [17, 35, 25, 95, 55, 34, 14])
      }
    },
    {
      name: 'Tea-bot Re:Write',
      status: 'All systems running.',
      data: {
        cpu: this.generateChartData('cpu', [17, 35, 25, 12, 55, 34, 14]),
        ram: this.generateChartData('ram', [17, 35, 25, 12, 55, 34, 14]),
        requests: this.generateChartData('requests', [17, 35, 25, 12, 55, 34, 14])
      }
    },
  ];

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          display: false,
          suggestedMax: 100
        }
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    showScale: false
  };

  constructor() { }

  ngOnInit() {
  }

  generateChartData(chartType: string, data: Array<number>) {
    const chartColor = {
      cpu: '0,255,255',
      ram: '64,0,255',
      requests: '0,128,255'
    };

    return {
      labels: ['6h ago', '5h ago', '4h ago', '3h ago', '2h ago', '1h ago', 'Now'],
      datasets: [
        {
          label: chartType,
          data,
          backgroundColor: ['rgba(' + chartColor[chartType] + ', .2)'],
          borderColor: ['rgba(' + chartColor[chartType] + ', 1)'],
          pointRadius: 0
        }
      ]
    };
  }

}
