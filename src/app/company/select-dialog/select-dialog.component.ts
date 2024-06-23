import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Company } from '../types/company.type';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent implements OnInit {
  public companiesList: Company[] = [];
  public getCompaniesLoaded: boolean = false;
  
  constructor(
    private dialogRef: MatDialogRef<SelectDialogComponent>,
    private authentication: AuthenticationService,
    private dialog: DialogService,
    private companyService: CompanyService,
    @Inject(MAT_DIALOG_DATA) public data: { companies: Company[], reSelect: boolean }
  ) { }

  ngOnInit(): void {
    if (this.data.reSelect && this.authentication.userDetails) {
      this.companyService.getUsersCompanyList({ packageNo: this.authentication.userDetails.packageNo }).subscribe(companies => {
        this.companiesList = companies;
        this.getCompaniesLoaded = true;
      })
    }
    else {
      this.companiesList = this.data.companies;
    }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public onSelectCompany(company: Company): void {
    this.authentication.currentCompany = company;
    this.dialogRef.close();
  }

  public onAddCompanyDialog(): void {
    this.dialog.openFullScreenDialog(CreateDialogComponent, {
      data: {
        disableClose: this.data.reSelect ? false : true
      }
    }).afterClosed().subscribe(() => this.dialogRef.close());
  }
}
