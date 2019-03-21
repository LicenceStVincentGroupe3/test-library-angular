import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  ngOnInit() {
    const chart = new CanvasJS.Chart('donut', {
      animationEnabled: true,
      title: {
        text: 'Performance des opérations',
        horizontalAlign: 'center',
        fontColor : '#888888',
        fontFamily : 'ROBOTO',
        fontStyle : 'Bold'
      },
      legend: {
        fontColor: '#B3B3B3'
      },
      data: [{
        type: 'doughnut',
        showInLegend: true,
        startAngle: 120,
        legendFontColor: 'red',
        dataPoints: [
          { y: 55, name: 'Ouvert' },
          { y: 45, name: 'Non ouvert' },
          { y: 20, name: 'Non délivré' },
          { y: 80, name: 'Ajout/Mise à jour des données'}
        ]
      }]
    });

    chart.render();

  }
}
