import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import cuid from 'cuid';

@Injectable()
export class ReportService {
    constructor() { }
    getMockupReport() {
        return Observable.of([
            {
                id: cuid(),
                rentalName: 'บ้านให้เช่า ใจกลางเมือง ขนาด พร้อมเฟอร์นิเจอร์อยู่ครบ เอาไว้ปาร์ตี้ พร้อมที่จอดรถ',
                times: 2,
                fee: 350000,
            },
            {
                id: cuid(),
                rentalName: 'ห้องพักให้เช่า',
                times: 4,
                fee: 5800,
            },
            {
                id: cuid(),
                rentalName: 'ห้องพักให้เช่า',
                times: 44,
                fee: 6200,
            },
            {
                id: cuid(),
                rentalName: 'คอนโดให้เช่า',
                times: 8,
                fee: 13000,
            },
            {
                id: cuid(),
                rentalName: 'ทาวน์โฮม 3 ชั้นให้เช่า',
                times: 3,
                fee: 15000,
            },
        ]);
    }
}
