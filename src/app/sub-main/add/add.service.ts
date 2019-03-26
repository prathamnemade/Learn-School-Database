import { Injectable } from '@angular/core';
import { CommonConstants } from 'src/app/common.constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable()
export class AddService {
    fullname: string;
    birthday: String;
    selectedSchool: string;
    selectedClass: string;
    selectedDivision: string;
    selectedStatus: string;
    schools = []
    classes = []
    divisions = []
    url: string = CommonConstants.addDetails;
    responseAdd: boolean = false;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) {
        this.schools = [{ name: "School A" },
        { name: "School B" },
        { name: "School C" },
        { name: "School D" },
        { name: "School E" },
        { name: "School F" },
        { name: "School G" }
        ]
        this.classes = [
            { name: "Class A" },
            { name: "Class B" },
            { name: "Class C" },
            { name: "Class D" },
            { name: "Class E" },
            { name: "Class F" },
        ]
        this.divisions = [
            { name: "Division 1" },
            { name: "Division 2" },
            { name: "Division 3" },
            { name: "Division 4" },
            { name: "Division 5" },
            { name: "Division 6" },
        ]
    }
    addDetails() {
        this.details({ fullname: this.fullname, birthday: this.birthday, selectedSchool: this.selectedSchool, selectedClass: this.selectedClass, selectedDivision: this.selectedDivision, selectedStatus: this.selectedStatus })
            .subscribe((data) => {
                this.responseAdd = data
            }
            )
    }
    details(data): Observable<any> {
        return this.http.post(this.url, data, this.httpOptions).pipe(map(data => data))
    }
    addNew() {
        this.responseAdd = false;
        this.fullname = "";
        this.birthday = "";
        this.selectedSchool = "";
        this.selectedClass = "";
        this.selectedDivision = "";
        this.selectedStatus = "";
    }


}