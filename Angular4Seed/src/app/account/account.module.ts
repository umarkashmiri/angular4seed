import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

import { AccountRoutingModule } from './account-routing';

@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule.forRoot()
    ],
    declarations: [LoginComponent, LogoutComponent, RegisterComponent, ForgotpasswordComponent, ResetpasswordComponent]
})
export class AccountModule { }
