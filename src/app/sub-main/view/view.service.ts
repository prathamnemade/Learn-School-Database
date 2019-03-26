import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/common.constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable()
export class ViewService {
    url:string=CommonConstants.viewDetails;
    allItems;
    countOfRows;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) {}
    fetchData(){
        this.details().subscribe((data)=>
        {
            this.allItems=data;
            this.countOfRows=data.length;
            
        })
    }
    details(): Observable<any> {
        return this.http.post(this.url,  this.httpOptions).pipe(map(data => data))
    }

}