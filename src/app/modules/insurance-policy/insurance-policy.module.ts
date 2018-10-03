import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesComponent } from './components/policies/policies.component';

import { InsurancePolicyComponent } from './insurance-policy.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        InsurancePolicyComponent,
        PoliciesComponent
    ],
    exports: [
        InsurancePolicyComponent
    ]
})
export class InsurancePolicyModule { }
