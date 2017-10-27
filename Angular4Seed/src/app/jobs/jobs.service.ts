import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Job } from './job.models';

@Injectable()
export class JobService {
    constructor(private http: Http) { }
    public search(keyword: string): Observable<Array<Job>> {
        if (keyword.length == 0) {
            return this.http.get(`/api/jobs/all`).map((res) => { return res.json() });
        }
        return this.http.get(`/api/jobs/search/${keyword}`).map((res) => { return res.json() });
    }
    
}
