import { Component, OnInit, NgZone } from '@angular/core';
import * as echarts from 'echarts';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { CommonService } from '../common-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AmChartsService]

})
export class DashboardComponent {
  chart: AmChart;
  constructor( private _amCharts: AmChartsService, private commonService: CommonService) { }


  ngOnInit() {
    this.commonService.getCsvFile();
    this.commonService.sendCsvTransformedData.subscribe(responce=>{
      this.chart2Create(responce);
    })
    this.chart1Create();
  }


  ngAfterViewInit() {
  }



  chart1Create() {
    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 20000; i++) {
      var now = new Date(base += oneDay);
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    var option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: 'Name Of Anomaly File',
      },
      toolbox: {
        
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
      }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }],
      series: [
        {
          name: 'Value',
          type: 'line',
          smooth: true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            color: 'rgb(255, 70, 131)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgb(255, 158, 68)'
            }, {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }])
          },
          data: data
        }
      ]
    };
    var myChart = echarts.init(document.getElementById('echartMain'))
    myChart.setOption(option);
  }

  chart2Create(chartData) {
    // var chartData = this.generateChartData();
    this.chart = this._amCharts.makeChart("echartMain2", {
      "type": "serial",
      "theme": "light",
      "legend": {
        "useGraphSettings": false
      },
      "dataProvider": chartData,
      "synchronizeGrid": true,
      "valueAxes": [{
        "id": "v1",
        "axisColor": "green",
        "axisThickness": 2,
        "axisAlpha": 1,
        "position": "left"
      }],
      "graphs": [{
        "valueAxis": "v1",
        "lineColor": "red",
        "bulletBorderThickness": 10,
        "hideBulletsCount": 30,
        "title": "AAPL",
        "valueField": "n-AAPL.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v2",
        "lineColor": "rebeccapurple",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "ADBE",
        "valueField": "n-ADBE.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "black",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "ADI",
        "valueField": "n-ADI.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "plum",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "ADSK",
        "valueField": "n-ADSK.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "orange",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "AKAM",
        "valueField": "n-AKAM.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "aqua",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "AMAT",
        "valueField": "n-AMAT.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "cornflowerblue",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "AMD",
        "valueField": "n-AMD.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "darkgrey",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "AMZN",
        "valueField": "n-AMZN.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "cyan",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "CMCSA",
        "valueField": "n-CMCSA.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "cadetblue",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "COST",
        "valueField": "n-COST.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "darkgoldenrod",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "CRM",
        "valueField": "n-CRM.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "yellow",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "CRUS",
        "valueField": "n-CRUS.csv",
        "fillAlphas": 0
      }, {
        "valueAxis": "v3",
        "lineColor": "green",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "CTXS",
        "valueField": "n-CTXS.csv",
        "fillAlphas": 0
      }],
      "chartScrollbar": {
        "updateOnReleaseOnly": true
      },
      "chartCursor": {
        "cursorPosition": "mouse",
        "graphBulletSize": 1.5,
        "zoomable":true,
         "valueZoomable":true,
          "cursorAlpha":0,
          "valueLineEnabled":true,
          "valueLineBalloonEnabled":true,
          "valueLineAlpha":0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "gridPosition": "start",
        "parseDates": true,
        "axisColor": "#DADADA",
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true,
        "position": "bottom-right"
      }
    });

    this.chart.addListener("dataUpdated", () => { this.zoomChart() });
    this.zoomChart();

  }


  // generate some random data, quite different range
  generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);

    var visits = 100;
    var hits = 100;
    var views = 200;

    for (var i = 0; i < 100; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      var newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);

      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

      chartData.push({
        date: newDate,
        visits: visits
      });
    }
    return chartData;
  }

  zoomChart() {
    this.chart.zoomToIndexes(this.chart.dataProvider.length - 20, this.chart.dataProvider.length - 1);
  }

  ngOnDestroy() {
  }

}
