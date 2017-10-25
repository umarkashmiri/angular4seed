import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { JobsRoutingModule } from './jobs.routing';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        JobsRoutingModule
    ],
    declarations: [SearchComponent]
})
export class JobsModule { }
