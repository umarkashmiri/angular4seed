import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'account', loadChildren: './account/account.module#AccountModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'jobs', loadChildren: './jobs/jobs.module#JobsModule' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppRoutingModule,
            providers: []
        };
    }
}
