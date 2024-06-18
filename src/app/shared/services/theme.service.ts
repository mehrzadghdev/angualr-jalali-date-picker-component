import { Injectable } from '@angular/core';
import { Theme } from '../types/theme.type';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  constructor() { }

  public initTheme(): void {
    document.body.setAttribute("theme", this.getColorTheme());
  }

  public getColorTheme(): Theme {
    const theme = localStorage.getItem("theme");

    if (theme !== null && theme === 'default' || theme === 'dark') {
      return theme;
    }

    return "default";
  }

  public setColorTheme(value: Theme): void {
    document.body.setAttribute("theme", value);
    localStorage.setItem("theme", value);
  }
}
