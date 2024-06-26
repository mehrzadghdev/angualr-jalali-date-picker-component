import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CreatePersonComponent } from './create-person/create-person.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';


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
    MatTableModule,
    MatDialogModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTooltipModule
  ]
})
export class PersonModule { }
