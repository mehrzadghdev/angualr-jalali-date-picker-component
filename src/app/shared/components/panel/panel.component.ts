import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Theme } from '../../types/theme.type';
import { DialogService } from '../../services/dialog.service';
import { SelectDialogComponent } from 'src/app/company/select-dialog/select-dialog.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  public isExpanded: boolean = true;

  get isMobile(): boolean { 
    return window.screen.width <= 768; 
  }

  get currentTheme(): Theme {
    return this.themeService.getColorTheme();
  }

  public searchQuery: string = "";
  public fullscreen: boolean = true;

  constructor(
    private themeService: ThemeService,
    private authenticaton: AuthenticationService,
    private dialog: DialogService
  ) {}

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
}
