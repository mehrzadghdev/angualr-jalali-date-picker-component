import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { ThemeService } from './shared/services/theme.service';
import { RequestService } from './shared/services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private authentication: AuthenticationService,
    private themeService: ThemeService,
    private request: RequestService,
  ) { }

  ngOnInit(): void {
    this.themeService.initTheme();
  }
}
