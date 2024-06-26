import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { CompanyService } from '../services/company.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Company, GetCompanyList, GetUsersCompanyListBody } from '../types/company.type';
import { AnimationOptions } from 'ngx-lottie';
import { SelectDialogComponent } from '../select-dialog/select-dialog.component';
import { UserDetails } from 'src/app/shared/types/authentication.type';
import { KeyModules } from 'src/app/shared/types/modules.type';

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
  public companiesList: Company[] = [];
  public companiesListLoaded: boolean = false;
  public tableColumns: string[] = ["شماره بسته", "نام شرکت", "کد شعبه", "تلفن", "وضعیت", "توضیحات شرکت", "عملیات"]

  constructor(private dialog: DialogService, private companyService: CompanyService, private authentication: AuthenticationService) {
    this.authentication.authorize();
  }

  ngOnInit(): void {
    const currentUserPackageNo: GetUsersCompanyListBody = {
      packageNo: (this.authentication.userDetails as UserDetails).packageNo
    } as const;

    this.companyService.getUsersCompanyList(currentUserPackageNo).subscribe(res => {
      this.companiesList = res;
      this.companiesListLoaded = true;
    })

    if (this.authDone && !this.authentication.currentCompanySelected() && this.authentication.userDetails) {
      this.companyService.getUsersCompanyList(currentUserPackageNo).subscribe(res => {
        if (!res.length) {
          this.dialog.openFullScreenDialog(CreateDialogComponent, { 
            data: {
              firstCompany: true
            } 
          }).afterClosed().subscribe(() => this.companySelected = true);
        }
        else {
          this.dialog.openFullScreenDialog(SelectDialogComponent, {
            data: {
              companies: res,
              reSelect: false
            }
          }).afterClosed().subscribe(() => this.companySelected = true);
        }
      })
    }
    else if (this.authDone && this.authentication.currentCompanySelected()) {
      this.companySelected = true;
    }
  }

  public onDataUpdated(data: KeyModules): void {
    if (data === 'company') {
      this.reloadCompanyList()
    }
  }

  private reloadCompanyList(): void {
    this.companiesListLoaded = false;
  
    const currentUserPackageNo: GetUsersCompanyListBody = {
      packageNo: (this.authentication.userDetails as UserDetails).packageNo
    } as const;

    this.companyService.getUsersCompanyList(currentUserPackageNo).subscribe(res => {
      this.companiesList = res;
      this.companiesListLoaded = true;
    })
  }

  public onDeleteCompany(idToDelete: number): void {
    this.companyService.deleteCompany({ databaseId: idToDelete }).subscribe(res => {
      this.reloadCompanyList()
    })
  }

  public onAddCompany(): void {
    this.dialog.openFullScreenDialog(CreateDialogComponent, {
      data: {
        firstCompany: false, 
        disableClose: false
      }
    }).afterClosed().subscribe(res => {
      this.reloadCompanyList()
    })
  }
}
