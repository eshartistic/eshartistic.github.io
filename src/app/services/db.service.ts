import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

const sheetId = '1fJny3yZAFOJ-IGY4IorMVSm4wBwKsL2HnKuE9cmq_uY';
const sheetName = 'Form+responses+1';
const baseUrl = 'https://opensheet.elk.sh';

@Injectable({
    providedIn: 'root'
})
export class DBService {

    constructor(private http: HttpClient) {
    }

    private async request(method: string, url: string, data?: any) {

        console.log('request ' + JSON.stringify(data));

        const result = this.http.request(method, url, {
            body: data,
            responseType: 'json',
            observe: 'body'
        });

        return new Promise<any>((resolve, reject) => {
            result.subscribe(resolve as any, reject as any);
        });
    }

    getData() {
        return this.request('get', `${baseUrl}/${sheetId}/${sheetName}`);
    }
}
