import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  isDark = true;

  constructor() {
    // Set dark mode by default if no theme is stored
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (!storedTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  }

  ngOnInit() {
    // Initialize with the current theme state
    const storedTheme = localStorage.getItem('portfolio-theme');
    this.isDark = storedTheme ? storedTheme === 'dark' : true;
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
    localStorage.setItem('portfolio-theme', this.isDark ? 'dark' : 'light');
  }
}