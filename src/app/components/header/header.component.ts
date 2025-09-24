import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  downloadResume() {
    // The PDF file should be in the assets/documents folder
    const resumeUrl = 'assets/documents/SarveshPandeyResume.pdf';
    
    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'SarveshPandeyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}