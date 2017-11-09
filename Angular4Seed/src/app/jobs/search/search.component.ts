import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../jobs.service';
import { Job } from '../job.models';
import { LoadingService } from '../../shared/loading/loading.service';
import { AlertService } from '../../shared/alert/alert.service';
import { Alert, AlertType } from '../../shared/alert/alert';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [JobService]
})
export class SearchComponent implements AfterContentInit {
  searchKey: string;
  public jobs: Array<Job>;
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) {
    this.jobs = new Array<Job>();
  }

  ngAfterContentInit() {
    this.loadingService.show();
    let search: string = this.route.snapshot.params['id'];
    this.DoSearch(search);
  }

  DoSearch(s: string) {
    this.jobService.search(s).subscribe((result: Array<Job>) => {
      this.jobs = result;

      if (this.jobs.length == 0) {
        this.alertService.error('No results found!', false);
      }
      
      if (this.searchKey == undefined) {
        //this.alertService.info(this.jobs.length + ' jobs found!', false);
        this.alertService.info('You can now search job!', true);
      }
      else if (this.searchKey != undefined && this.jobs.length > 0) {
        this.alertService.success(this.jobs.length + ' jobs found!', false);
      }
      
      this.loadingService.hide();
    });
  }

  OnSerach() {
    this.alertService.hide();
    this.DoSearch(this.searchKey);

  }
}
