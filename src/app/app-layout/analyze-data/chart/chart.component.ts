import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { CommonService } from '../../common-service';


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    chart: AmChart;
    fileOption = 'option1';
    constructor(private _amCharts: AmChartsService, private commonService: CommonService) { }


    ngOnInit() {
    }

    callRun() {
        this.commonService.getCsvFile();
        this.commonService.sendCsvTransformedData.subscribe(responce => {
            this.chart2Create(responce);
        });
    }

    chart2Create(chartData) {
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
                "zoomable": true,
                "valueZoomable": true,
                "cursorAlpha": 0,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "valueLineAlpha": 0.2
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

    zoomChart() {
        this.chart.zoomToIndexes(this.chart.dataProvider.length - 20, this.chart.dataProvider.length - 1);
    }

}

