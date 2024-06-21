import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { CompanyService } from '../services/company.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { GetUsersCompanyListBody } from '../types/company.type';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  get authDone(): boolean {
    return this.authentication.userLoggedIn;
  }
  public companySelected: boolean = false;

  constructor(private dialog: DialogService, private companyService: CompanyService, private authentication: AuthenticationService) {
    this.authentication.authorize();
  }

  ngOnInit(): void {
    if (this.authDone && !this.authentication.currentCompanySelected()) {
      const currentUserPackageNo: GetUsersCompanyListBody = {
        packageNo: 3001012
      } as const;
      
      this.companyService.getUsersCompanyList(currentUserPackageNo).subscribe(res => {
        // if (!res.length) {
        if (true) {
          this.dialog.openFullScreenDialog(CreateDialogComponent, { 
            data: {
              firstCompany: false
            } 
          }).afterClosed().subscribe(() => this.companySelected = true);
        }
      })
    }
  }
}
