import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Theme } from '../../types/theme.type';
import { DialogService } from '../../services/dialog.service';
import { SelectDialogComponent } from 'src/app/company/select-dialog/select-dialog.component';
import { CreateDialogComponent } from 'src/app/company/create-dialog/create-dialog.component';
import { CreatePersonComponent } from 'src/app/person/create-person/create-person.component';
import { Router } from '@angular/router';
import { CreateProductComponent } from 'src/app/product/create-product/create-product.component';
import { KeyModules } from '../../types/modules.type'

@Component({
  selector: 'key-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input("module")
  public currentModule: KeyModules = 'company';
  public isExpanded: boolean = true;

  get isMobile(): boolean { 
    return window.screen.width <= 768; 
  }

  get currentTheme(): Theme {
    return this.themeService.getColorTheme();
  }

  public searchQuery: string = "";
  public fullscreen: boolean = true;

  @Output()
  public moduleDataUpdated: EventEmitter<KeyModules> = new EventEmitter<KeyModules>();

  constructor(
    private themeService: ThemeService,
    private authenticaton: AuthenticationService,
    private dialog: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authenticaton.currentCompanySelected()) {
      this.router.navigate(['/software/company']);
    }
  }

  public onSearch(): void {
    if (this.searchQuery === "") {
      console.log("searching: ", this.searchQuery);
    }
  }

  public toggleFullScreen(): void {
    this.fullscreen = !this.fullscreen
    if (!this.fullscreen) {
      document.body.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }

  public changeTheme(value: Theme) {
    this.themeService.setColorTheme(value);
  }

  public onLogout(): void {
    this.authenticaton.logout();
  }

  public toggleAccordion(accordion: HTMLLIElement): void {
    if (accordion.classList.contains("opened") && this.isExpanded) {
      accordion.classList.remove("opened");
    }
    else if (this.isExpanded) {
      accordion.classList.add("opened");
    }
  }

  public onReSelectCompany(): void {
    this.dialog.openFullScreenDialog(SelectDialogComponent, {
      data: {
        reSelect: true
      }
    })
  }

  public onAddCompany(): void {
    this.dialog.openFullScreenDialog(CreateDialogComponent, {
      data: {
        firstCompany: false, 
        disableClose: false
      }
    }).afterClosed().subscribe(res => {
      this.moduleDataUpdated.emit('company');
    })
  }

  public onAddPerson(): void {
    this.dialog.openFormDialog(CreatePersonComponent, {
      width: "456px"
    }).afterClosed().subscribe(res => {
      this.moduleDataUpdated.emit('person');
    })
  }

  public onAddProduct(): void {
    this.dialog.openFormDialog(CreateProductComponent, {
      width: "456px"
    }).afterClosed().subscribe(res => {
      this.moduleDataUpdated.emit('product');
    })
  }
}
