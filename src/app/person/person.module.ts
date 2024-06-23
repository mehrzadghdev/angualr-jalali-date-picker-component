import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CreatePersonComponent } from './create-person/create-person.component';


@NgModule({
  declarations: [
    ListComponent,
    CreatePersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule,
    MatIconModule,
    MatTableModule
  ]
})
export class PersonModule { }
