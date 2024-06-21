import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyService } from '../services/company.service';
import { AddCompanyBody } from '../types/company.type';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {
  public addCompanyForm: FormGroup;
  public addCompanyStep: 'welcome' | 'base' | 'information' | 'tax' = 'welcome'

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateDialogComponent>,
    private companyService: CompanyService,
    @Inject(MAT_DIALOG_DATA) public data: { firstCompany: boolean }
  ) {
    this.addCompanyForm = fb.group({
      companyName: ['', Validators.required],
      taxIdentity: ['', Validators.required],
      privateKey: ['', Validators.required],
      companyZipCode: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyTel: ['', Validators.required],
      companyBranchNo: ['', Validators.required],
      companyStatus: [data.firstCompany ? true : false, Validators.required],
      companyDesc: ['', Validators.required]
    })
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public setStep(step: 'welcome' | 'base' | 'information' | 'tax') {
    this.addCompanyStep = step;
  }

  public onAddCompany(): void {
    if (!this.addCompanyForm.invalid) {
      const addCompanyBody: AddCompanyBody = {
        packageNo: 3001012,
        companyName: (this.addCompanyForm.controls["companyName"].value) + "",
        taxIdentity: (this.addCompanyForm.controls["taxIdentity"].value) + "",
        privateKey: (this.addCompanyForm.controls["privateKey"].value) + "",
        companyZipCode: (this.addCompanyForm.controls["companyZipCode"].value) + "",
        companyAddress: (this.addCompanyForm.controls["companyAddress"].value) + "",
        companyTel: (this.addCompanyForm.controls["companyTel"].value) + "",
        companyBranchNo: (this.addCompanyForm.controls["companyBranchNo"].value) + "",
        companyStatus: (this.addCompanyForm.controls["companyStatus"].value),
        companyDesc: (this.addCompanyForm.controls["companyDesc"].value) + ""
      }
      
      this.companyService.addCompany(addCompanyBody).subscribe(res => {
        console.log(res);
      })
    }
    else {
      this.addCompanyForm.markAllAsTouched();
    }
  }
}
