import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InsurancePolicyComponent } from './insurance-policy.component';
import { PoliciesComponent } from './components/policies/policies.component';
@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [
        InsurancePolicyComponent,
        PoliciesComponent
    ],
    exports: [
        InsurancePolicyComponent,
        PoliciesComponent
    ]
})
export class InsurancePolicyModule { }
