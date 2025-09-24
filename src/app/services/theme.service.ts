import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark';
    const theme: 'light' | 'dark' = savedTheme || 'dark';
    this.setTheme(theme);
  }

  setTheme(theme: 'light' | 'dark'): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(this.THEME_KEY, theme);
  }

  getCurrentTheme(): 'light' | 'dark' {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    this.setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  isDarkMode(): boolean {
    return this.getCurrentTheme() === 'dark';
  }
}