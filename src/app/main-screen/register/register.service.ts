import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/common.constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable()
export class RegisterService {
    dataSaved:string="";
    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    url: string = CommonConstants.register;
    urlExistence: string = CommonConstants.registerExistence;
    onSubmitRegisterDetails(formvalue) {
        this.registerExistence(formvalue).subscribe((data) => {
            if (data == 0) {
                this.registerUser(formvalue).subscribe((data1) => {
                    this.dataSaved=data1
                })
            }

        })


    }
    registerUser(data): Observable<any> {
        return this.http.post(this.url, data, this.httpOptions).pipe(map(data => data))
    }
    registerExistence(data): Observable<any> {
        return this.http.post(this.urlExistence, data, this.httpOptions).pipe(map(data => data))
    }
}