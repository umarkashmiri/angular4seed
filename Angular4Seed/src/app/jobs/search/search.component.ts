import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchKey: string;

    constructor(
        private route: ActivatedRoute,
        private router:Router
    ) { }

    ngOnInit() {
        let search: string = this.route.snapshot.params['id'];
        if (search && search.length > 0) {
            console.log('loading search results');
        } else {
            console.log('search with no results');
        }
    }

    OnSerach() {
        console.log(this.searchKey);
        this.router.navigate(['/jobs/search', this.searchKey]);
    }
}
