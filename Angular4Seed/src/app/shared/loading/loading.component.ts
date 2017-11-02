import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoadingService } from './loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {

    public isShown = false;
    public sub: Subscription;

    constructor(private loadingService: LoadingService) { }

    ngOnInit() {
        this.sub = this.loadingService.loadinState.subscribe((result: boolean) => {
            this.isShown = result;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}
