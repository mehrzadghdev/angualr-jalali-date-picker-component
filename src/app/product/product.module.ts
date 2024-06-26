import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ListComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
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
export class ProductModule { }
