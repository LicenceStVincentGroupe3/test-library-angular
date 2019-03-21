import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      width: 1400,
      title: {
        text: 'Suivi des indicateurs de performance'
      },
      axisX: {
        minimum: new Date(2018, 0O2, 11),
        maximum: new Date(2018, 0O2, 19),
        valueFormatString: 'MMM YY',
        gridColor: '#F7F7F7',
        gridThickness: 2
      },
      axisY: {
        interval: 10,
        gridColor: '#F7F7F7',
      },
      legend: {
        verticalAlign: 'top',
        horizontalAlign: 'right'
      },
      data: [{
        indexLabelFontColor: 'darkSlateGray',
        name: 'Contacts gagnés',
        type: 'area',
        fillOpacity: .1,
        showInLegend: true,
        legendMarkerType: 'circle',
        dataPoints: [
          { x: new Date(2018, 0o2, 11), y: 30, label: '11 Fev' },
          { x: new Date(2018, 0o2, 12), y: 62, label: '12 Fev' },
          { x: new Date(2018, 0o2, 13), y: 39, label: '13 Fev' },
          { x: new Date(2018, 0o2, 14), y: 56, label: '14 Fev' },
          { x: new Date(2018, 0o2, 15), y: 64, label: '15 Fev' },
          { x: new Date(2018, 0o2, 16), y: 43, label: '16 Fev' },
          { x: new Date(2018, 0o2, 17), y: 50, label: '17 Fev' },
          { x: new Date(2018, 0o2, 18), y: 44, label: '18 Fev' },
          { x: new Date(2018, 0o2, 19), y: 58, label: '19 Fev' }
         ]
       }]
    });
    chart.render();
  }
}
