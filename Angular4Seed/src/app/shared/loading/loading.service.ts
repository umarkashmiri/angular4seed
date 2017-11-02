import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {

    private loadingSubject = new Subject<boolean>();
    public loadinState = this.loadingSubject.asObservable();


    public show() { this.loadingSubject.next(true); }
    public hide() { this.loadingSubject.next(false); }
}
