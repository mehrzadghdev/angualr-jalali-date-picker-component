import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PanelComponent } from './components/panel/panel.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatRippleModule,
    MatMenuModule,
    FormsModule,
    MatBadgeModule
  ],
  exports: [
    PanelComponent
  ] 
})
export class SharedModule { }
