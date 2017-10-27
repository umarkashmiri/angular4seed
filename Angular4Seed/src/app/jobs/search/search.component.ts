import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../jobs.service';
import { Job } from '../job.models';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [JobService]
})
export class SearchComponent implements OnInit {
    searchKey: string;
    public jobs: Array<Job>;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private jobService: JobService
    ) {
        this.jobs = new Array<Job>();
    }

    ngOnInit() {
        let search: string = this.route.snapshot.params['id'];
        if (search && search.length > 0) {
            this.jobService.search(search).subscribe((result: Array<Job>) => {
                this.jobs = result;
            });
        } else {
            this.jobService.search("").subscribe((result: Array<Job>) => {
                this.jobs = result;
            });
        }
    }

    OnSerach() {
        console.log(this.searchKey);
        this.router.navigate(['/jobs/search', this.searchKey]);
    }
}
