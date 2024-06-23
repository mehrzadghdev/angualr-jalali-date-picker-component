import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Person } from '../types/person.type';
import { PersonService } from '../services/person.service';
import { Company } from 'src/app/company/types/company.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public personsList: Person[] = [];
  public personListLoaded: boolean = false;
  public tableColumns: string[] = ["packageNo", "name", "branchNo", "tel", "status", "desc", "action"]
  
  constructor(private authentication: AuthenticationService, private router: Router, private personSerivce: PersonService) {
    this.authentication.authorize();
  }

  ngOnInit(): void {
    if (!this.authentication.currentCompanySelected()) {
      this.router.navigate(['/software/company']);
    }
    else {
      const currentCompany = this.authentication.currentCompany as Company;

      this.personSerivce.getCompaniesPersonList({ databaseId: currentCompany.databaseId }).subscribe(res => {
        this.personsList = res;
      })
    }
  }

  public onDeletePerson(personCodeToDelete: number): void {
    this.personSerivce.deletePerson({ code: personCodeToDelete }).subscribe(res => {
      this.personsList = this.personsList.filter(person => person.code !== personCodeToDelete);
    }) 
  }
}
