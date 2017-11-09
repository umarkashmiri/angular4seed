import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { AlertService } from './alert/alert.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LoadingComponent],
    exports: [LoadingComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LoadingService, AlertService]
        };
    }

}
