import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareRoutingModule } from './software-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        SoftwareRoutingModule,
        SharedModule
    ]
})
export class SoftwareModule { }
