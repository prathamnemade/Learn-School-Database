import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    onSubmitUserDetails(formvalue) {
        console.warn("login Form vakue",formvalue);
        
    }
}