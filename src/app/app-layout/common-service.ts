import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, last, map, tap } from 'rxjs/operators';
import { Observable, observable, Subject } from 'rxjs'
import { Papa } from 'ngx-papaparse';
@Injectable()
export class CommonService {

    constructor(private http: HttpClient, private papa: Papa) {
    }
    chartData = [];
    allCsvData = [];
    countCsvFiles = 0;
    sendCsvTransformedData = new Subject();
    MANAGE_DATA: PeriodicElement[] = [
    ];

    defaultFailSrc;

    getCsvFile() {
        this.chartData = [];
        this.allCsvData = [];
        this.countCsvFiles = 0;
        var filenames: Array<string> = ["n-AAPL.csv", "n-ADBE.csv", "n-ADI.csv",
            "n-ADSK.csv", "n-AKAM.csv", "n-AMAT.csv", "n-AMD.csv",
            "n-AMZN.csv", "n-CMCSA.csv", "n-COST.csv", "n-CRM.csv",
            "n-CRUS.csv", "n-CTXS.csv"]
        filenames.forEach((filename) => {
            this.getDateFromCsvFile(filename).subscribe(data => {
                if (filenames.length === this.allCsvData.length) {
                    var responce = this.CreateCsvGraphData();
                    this.sendCsvTransformedData.next(responce)
                }
            })
        })
    }

    getDateFromCsvFile(filename) {
        var url = "assets/n-stock/" + filename;
        return this.http.get(url, { responseType: 'text' })
            .pipe(
                map(data => { return this.parseCsvToJson(filename, data) }),
                last()
            )
    }


    getDataForTheCause(){
        return this.http.get('assets/output.json')
    }

    parseCsvToJson(filename: string, data: string) {
        this.papa.parse(data, {
            complete: (result) => {
                var payload = {
                    'filename': filename,
                    'DataSet': result.data
                };
                this.allCsvData.push(payload)
            }
        });
        return filename;
    }



    CreateCsvGraphData() {
        for (let i = 1; i < this.allCsvData[0].DataSet.length; i++) {
            var tempDate = new Date(this.allCsvData[0].DataSet[i][0]);
            var tempobj = {};
            tempobj['date'] = tempDate;
            for (let j = 0; j < this.allCsvData.length; j++) {
                tempobj[this.allCsvData[j].filename] = this.allCsvData[j].DataSet[i][1];
            }
            this.chartData.push(tempobj);
        }
        return this.chartData;
    }


    private log(filename: string, data: string) {
        const message = `DownloaderService downloaded "${filename}" and got "${data}".`;
    }

    private logError(filename: string, error: any) {
        const message = `DownloaderService failed to download "${filename}"; got error "${error.message}".`;
    }


    //  manage data logic
    parseUploadedData(files: File[]) {
        Array.from(files).forEach((f, i) => {
            let self = this;
            let fileReader: FileReader = new FileReader();
            fileReader.onloadend = function (x) {
                var datares = fileReader.result.toString();
                self.manageDataParseCsvToJson(f, datares);

            }
            fileReader.readAsText(f, f.name);
        });
        // this to send file data through https request
        // this.http.post('https://file.io', formData, { reportProgress: true, observe: 'events' })
        //   .subscribe(event => {
        //   });
    }


    manageDataParseCsvToJson(file, data: string) {
        var folderName = file.webkitRelativePath.split("/")[0];
        var tempArr = this.MANAGE_DATA.filter(d => d.name === folderName);
        var payload: PeriodicElement;
        if (tempArr.length > 0) {
            payload = tempArr[0];
        }
        else {
            payload = {
                'name': folderName,
                'FileCount': 0,
                'MinDataRows': null,
                'MaxDataRows': null,
                'highlighted': this.MANAGE_DATA.length > 0 ? false : true,
                'failSrc': this.MANAGE_DATA.length > 0 ? false : true,
                'file': []
            };
            this.MANAGE_DATA.push(payload);
        }
        this.papa.parse(data, {
            complete: (result) => {
                payload.MinDataRows = payload.MinDataRows == null ? result.data.length : payload.MinDataRows > result.data.length ? result.data.length : payload.MinDataRows;
                payload.MaxDataRows = payload.MaxDataRows == null ? result.data.length : payload.MaxDataRows < result.data.length ? result.data.length : payload.MaxDataRows;
                payload.FileCount = payload.FileCount + 1;
                payload.file.push(file)
            }
        });
    }
}

export interface PeriodicElement {
    name: string;
    FileCount: number;
    MinDataRows: number;
    MaxDataRows: number;
    highlighted: boolean;
    failSrc?: boolean;
    file?: File[]
}