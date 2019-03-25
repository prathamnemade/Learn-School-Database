import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/common.constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable()
export class LoginService {
    constructor(private http:HttpClient){}
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    url:string=CommonConstants.login;
    onSubmitUserDetails(formvalue) {
        console.warn("login Form vakue",formvalue);
        this.checkUser(formvalue).subscribe((data)=>{
            console.warn("darta",data);
            
        })
        
    }
    checkUser(data): Observable<any> {
        return this.http.post(this.url, data,this.httpOptions).pipe(map(data => data))
    }
}