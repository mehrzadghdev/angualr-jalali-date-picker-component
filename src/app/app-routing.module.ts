import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/software/company' },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'software', redirectTo: 'software/company', pathMatch: 'full' },
  { 
    path: 'software',
    children: [
      {
        path: "company",
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
      },
      {
        path: "person",
        loadChildren: () => import('./person/person.module').then(m => m.PersonModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
