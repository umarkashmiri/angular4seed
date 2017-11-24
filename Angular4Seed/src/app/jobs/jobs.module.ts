import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { JobsRoutingModule } from './jobs.routing';
import { AlertComponent } from '../shared/alert/alert.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      JobsRoutingModule,
    ],
    declarations: [SearchComponent, AlertComponent],
    providers: []
})
export class JobsModule { }
