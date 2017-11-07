import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

import { AuthService } from './auth.service';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reset', component: ResetpasswordComponent, canActivate: [AuthService] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AccountRoutingModule,
            providers: [AuthService]
        };
    }
}
