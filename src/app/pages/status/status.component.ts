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
      dataCPU: {
        labels: ['6h ago', '5h ago', '4h ago', '3h ago', '2h ago', '1h ago', 'Now'],
        datasets: [
          {
            label: "CPU",
            data: [17, 35, 25, 12, 55, 34, 14],
            backgroundColor: ['rgba(0,255,255, .2)'],
            borderColor: ['rgba(0,255,255, 1)']
          }
        ]
      },

      dataRAM: {
        labels: ['6h ago', '5h ago', '4h ago', '3h ago', '2h ago', '1h ago', 'Now'],
        datasets: [
          {
            label: "RAM",
            data: [17, 35, 25, 12, 55, 34, 14],
            backgroundColor: ['rgba(64,0,255, .2)'],
            borderColor: ['rgba(64,0,255, 1)']
          }
        ]
      },
    },
    {
      name: 'Tea-bot Re:Write',
      status: 'All systems running.'
    },
  ];

  
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
