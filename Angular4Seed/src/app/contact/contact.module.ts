import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ContactRoutingModule } from './contact.routing';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule
    ],
    declarations: [ContactUsComponent, AboutUsComponent]
})
export class ContactModule { }
