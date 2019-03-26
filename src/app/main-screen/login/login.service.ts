import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/common.constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private router: Router) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    url: string = CommonConstants.login;
    onSubmitUserDetails(formvalue) {
        this.checkUser(formvalue).subscribe((data) => {
            if (data == true) {
                sessionStorage.setItem('emailID', formvalue.emailID)
                this.router.navigate(['/dashboard'])
            }
        })
    }
    checkUser(data): Observable<any> {
        return this.http.post(this.url, data, this.httpOptions).pipe(map(data => data))
    }
}